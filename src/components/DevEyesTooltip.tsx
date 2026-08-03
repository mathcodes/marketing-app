import React, { useState, useRef, useCallback } from 'react';
import { useDevEyes } from '../context/DevEyesContext';

interface DevEyesTooltipProps {
  label: string;
  children: React.ReactNode;
}

// ─── HTML formatter ────────────────────────────────────────────────────────
const MAX_CHARS = 2200;

function formatHTML(raw: string): string {
  const html = raw.length > MAX_CHARS ? raw.slice(0, MAX_CHARS) + '\n···' : raw;
  const tokens = html.match(/<[^>]+\/?>|<\/[^>]+>|[^<]+/g) ?? [];

  let indent = 0;
  const lines: string[] = [];
  const pad = (n: number) => '  '.repeat(n);

  for (const tok of tokens) {
    const t = tok.trim();
    if (!t || t === '\n') continue;

    if (t.startsWith('</')) {
      // closing tag — dedent before printing
      indent = Math.max(0, indent - 1);
      lines.push(pad(indent) + t);
    } else if (t.startsWith('<') && !t.endsWith('/>')) {
      // opening tag — print then indent
      lines.push(pad(indent) + t);
      // self-closing HTML void elements — don't indent
      if (!/^<(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)/i.test(t)) {
        indent++;
      }
    } else if (t.startsWith('<') && t.endsWith('/>')) {
      // self-closing JSX / void element
      lines.push(pad(indent) + t);
    } else {
      // text node
      const trimmed = t.replace(/\s+/g, ' ').trim();
      if (trimmed) lines.push(pad(indent) + trimmed);
    }
  }

  return lines.join('\n');
}

// ─── Syntax highlighter ────────────────────────────────────────────────────
function highlight(code: string): string {
  let h = code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  // Attribute values  "..."
  h = h.replace(/("(?:[^"\\]|\\.)*")/g, '<span class="tok-str">$1</span>');
  // Tag names (lowercase = element, uppercase = component)
  h = h.replace(/(&lt;\/?[A-Z][a-zA-Z0-9-]*)/g, '<span class="tok-component">$1</span>');
  h = h.replace(/(&lt;\/?[a-z][a-z0-9-]*)/g,    '<span class="tok-tag">$1</span>');
  // Attribute names  word=
  h = h.replace(/\b([a-zA-Z][a-zA-Z0-9-]*)(?==)/g, '<span class="tok-attr">$1</span>');
  // Self-close slash
  h = h.replace(/(\/>)/g, '<span class="tok-tag">$1</span>');

  return h;
}

// ─── Component ─────────────────────────────────────────────────────────────
export default function DevEyesTooltip({ label, children }: DevEyesTooltipProps) {
  const { devEyes } = useDevEyes();
  const [visible, setVisible]   = useState(false);
  const [code,    setCode]      = useState('');
  const [pos,     setPos]       = useState({ x: 0, y: 0 });
  const timerRef  = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const captureHTML = useCallback(() => {
    if (!wrapperRef.current) return '';
    // First child = the actual content (the popup is conditionally rendered after)
    const el = wrapperRef.current.children[0] as HTMLElement | undefined;
    if (!el) return '';
    return formatHTML(el.outerHTML);
  }, []);

  const handleMouseEnter = useCallback((e: React.MouseEvent) => {
    setPos({ x: e.clientX, y: e.clientY });
    timerRef.current = setTimeout(() => {
      setCode(captureHTML());
      setVisible(true);
    }, 300);
  }, [captureHTML]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    setPos({ x: e.clientX, y: e.clientY });
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setVisible(false);
  }, []);

  if (!devEyes) return <>{children}</>;

  const TW = 480;
  const TH = 360;
  const left = Math.min(pos.x + 20, window.innerWidth  - TW - 12);
  const top  = pos.y + TH + 20 > window.innerHeight    ? pos.y - TH - 8 : pos.y + 20;

  return (
    <div
      ref={wrapperRef}
      className='dev-eyes-wrapper'
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}

      {visible && (
        <div className='dev-eyes-popup' style={{ left, top, width: TW, maxHeight: TH }}>
          <div className='dev-eyes-label'>{label}</div>
          <pre
            className='monokai-snippet'
            dangerouslySetInnerHTML={{ __html: highlight(code) }}
          />
        </div>
      )}
    </div>
  );
}
