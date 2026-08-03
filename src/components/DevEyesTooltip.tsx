import React, { useState, useRef, useCallback } from 'react';
import { useDevEyes } from '../context/DevEyesContext';

interface DevEyesTooltipProps {
  code: string;
  label: string;
  children: React.ReactNode;
}

function syntaxHighlight(code: string): string {
  // 1. Escape HTML
  let h = code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  // 2. JSX/HTML comments {/* ... */} and // line comments
  h = h.replace(/(\{\/\*[\s\S]*?\*\/\}|\/\/[^\n]*)/g,
    '<span class="tok-comment">$1</span>');

  // 3. String literals (double and single quoted)
  h = h.replace(/("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/g,
    '<span class="tok-str">$1</span>');

  // 4. JSX component tags (uppercase first letter, after &lt;)
  h = h.replace(/(&lt;\/?[A-Z][a-zA-Z0-9]*)/g,
    '<span class="tok-component">$1</span>');

  // 5. HTML/JSX element tags (lowercase, after &lt;)
  h = h.replace(/(&lt;\/?[a-z][a-z0-9-]*)/g,
    '<span class="tok-tag">$1</span>');

  // 6. JSX attribute names (word before =)
  h = h.replace(/\b([a-zA-Z][a-zA-Z0-9]*)(?==)/g,
    '<span class="tok-attr">$1</span>');

  // 7. JS/TS keywords
  h = h.replace(
    /\b(import|export|default|from|return|const|let|var|function|class|interface|type|if|else|true|false|null|undefined|async|await|new|typeof|keyof)\b/g,
    '<span class="tok-kw">$1</span>',
  );

  // 8. Numbers
  h = h.replace(/\b(\d+)\b/g, '<span class="tok-num">$1</span>');

  return h;
}

export default function DevEyesTooltip({ code, label, children }: DevEyesTooltipProps) {
  const { devEyes } = useDevEyes();
  const [visible, setVisible] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const highlighted = React.useMemo(() => syntaxHighlight(code), [code]);

  const handleMouseEnter = useCallback((e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    timerRef.current = setTimeout(() => {
      setPos({ x: clientX, y: clientY });
      setVisible(true);
    }, 280);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    setPos({ x: e.clientX, y: e.clientY });
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setVisible(false);
  }, []);

  if (!devEyes) return <>{children}</>;

  const TW = 460;
  const TH = 340;
  const left = Math.min(pos.x + 18, window.innerWidth - TW - 12);
  const top = pos.y + TH + 18 > window.innerHeight ? pos.y - TH - 8 : pos.y + 18;

  return (
    <div
      className="dev-eyes-wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}

      {visible && (
        <div
          className="dev-eyes-popup"
          style={{ left, top, width: TW, maxHeight: TH }}
        >
          <div className="dev-eyes-label">{label}</div>
          <pre
            className="monokai-snippet"
            dangerouslySetInnerHTML={{ __html: highlighted }}
          />
        </div>
      )}
    </div>
  );
}
