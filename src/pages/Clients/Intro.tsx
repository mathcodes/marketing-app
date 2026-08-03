import React from 'react';
import lottie from 'lottie-web';
import DevEyesTooltip from '../../components/DevEyesTooltip';

const CODE = `// Clients/Intro.tsx — Hero
<section className="relative min-h-screen flex items-center overflow-hidden"
  style={{ background: '#0f2f33' }}>
  <div className="container-app w-full grid grid-cols-2
    md:grid-cols-1 gap-16 items-center py-20">
    <div>
      <p className="eyebrow mb-4" style={{ color: '#a8dfe5' }}>
        Our clients
      </p>
      <h1 className="display text-white mb-6">
        Up to date.<br />Client obsessed.
      </h1>
      <p className="body-lg" style={{ color: 'rgba(255,255,255,0.7)' }}>
        We don't ghost clients. We don't miss deadlines.
        We answer Slack at unreasonable hours.
      </p>
    </div>
    <div ref={containerRef} className="h-96 md:h-72 sm:h-52" />
  </div>
</section>`;

function Intro(): React.ReactElement {
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (!containerRef.current) return;
    const animation = lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'https://assets2.lottiefiles.com/packages/lf20_zk4EpiO6Hv.json',
    });
    return () => animation.destroy();
  }, []);

  return (
    <DevEyesTooltip label='Clients / Hero' code={CODE}>
      <section className='relative min-h-screen flex items-center overflow-hidden' style={{ background: '#0f2f33' }}>
        <div className='container-app w-full grid grid-cols-2 md:grid-cols-1 gap-16 md:gap-10 items-center py-20 md:py-16'>
          <div>
            <p className='eyebrow mb-4' style={{ color: '#a8dfe5' }}>Our clients</p>
            <h1 className='display text-white mb-6'>
              Up to date.<br />Client obsessed.
            </h1>
            <p className='body-lg' style={{ color: 'rgba(255,255,255,0.7)' }}>
              We don't ghost clients. We don't miss deadlines. We answer Slack at unreasonable hours.
              It's a whole thing.
            </p>
          </div>
          <div ref={containerRef} className='h-96 md:h-72 sm:h-52 md:order-first' />
        </div>
      </section>
    </DevEyesTooltip>
  );
}

export default Intro;
