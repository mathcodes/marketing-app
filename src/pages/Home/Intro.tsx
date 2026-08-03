import React from 'react';
import lottie from 'lottie-web';
import DevEyesTooltip from '../../components/DevEyesTooltip';

const CODE = `// Home/Intro.tsx — Hero Section
function Intro() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-1
      h-screen items-center sm:mt-20">
      <div className="flex flex-col space-y-8">
        <h1 className="text-7xl font-bold text-primary sm:text-5xl">
          PIXELPUSHER
          <br />
          <b className="text-secondary">CO.</b>
        </h1>
        <p className="text-2xl text-gray-500 leading-relaxed">
          We make the internet look less terrible.
        </p>
        <button className="px-10 py-4 bg-secondary text-white
          text-lg max-w-max hover:bg-primary transition-colors">
          Let's Work Together →
        </button>
      </div>
      <div ref={containerRef} className="h-[500px] p-10" />
    </div>
  );
}`;

function Intro() {
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (!containerRef.current) return;
    const animation = lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'https://assets4.lottiefiles.com/packages/lf20_kEK6zMf9S6.json',
    });
    return () => animation.destroy();
  }, []);

  return (
    <DevEyesTooltip label='Home / Intro' code={CODE}>
      <div className='grid grid-cols-2 sm:grid-cols-1 h-screen items-center sm:mt-20'>
        <div className='flex flex-col space-y-8'>
          <h1 className='text-7xl font-bold text-primary sm:text-5xl leading-tight'>
            PIXELPUSHER
            <br />
            <b className='text-secondary'>CO.</b>
          </h1>
          <p className='text-2xl text-gray-500 leading-relaxed sm:text-lg'>
            We make the internet look&nbsp;
            <span className='text-primary font-semibold'>less terrible.</span>
          </p>
          <button className='px-10 py-4 bg-secondary text-white text-lg max-w-max hover:bg-primary transition-colors duration-200 rounded-sm'>
            Let's Work Together →
          </button>
        </div>
        <div ref={containerRef} className='h-[500px] p-10 sm:h-64 sm:p-4' />
      </div>
    </DevEyesTooltip>
  );
}

export default Intro;
