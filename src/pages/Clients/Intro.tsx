import React from 'react';
import lottie from 'lottie-web';
import DevEyesTooltip from '../../components/DevEyesTooltip';

const CODE = `// Clients/Intro.tsx — Hero Banner
function Intro(): React.ReactElement {
  return (
    <div className="min-h-screen bg-primary grid grid-cols-2
      items-center sm:grid-cols-1 p-10">
      <div ref={containerRef} className="h-[500px]" />
      <div>
        <h1 className="text-8xl font-bold text-white sm:text-4xl">
          Up to <b className="text-secondary">date</b>
          {' '}and client{' '}
          <b className="text-secondary">obsessed.</b>
        </h1>
      </div>
    </div>
  );
}`;

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
    <DevEyesTooltip label='Clients / Intro Hero' code={CODE}>
      <div className='min-h-screen bg-primary grid grid-cols-2 items-center sm:grid-cols-1 p-10'>
        <div ref={containerRef} className='h-[500px] sm:h-64' />
        <div>
          <h1 className='text-8xl font-bold text-white sm:text-4xl leading-tight'>
            Up to <b className='text-secondary'>date</b> and client{' '}
            <b className='text-secondary'>obsessed.</b>
          </h1>
          <p className='text-white/80 text-lg mt-6 leading-relaxed max-w-md'>
            We don't ghost clients. We don't miss deadlines. We answer Slack at unreasonable hours.
            It's a whole thing.
          </p>
        </div>
      </div>
    </DevEyesTooltip>
  );
}

export default Intro;
