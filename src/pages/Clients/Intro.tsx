import * as React from 'react';
import lottie from 'lottie-web';

function Intro(): React.ReactElement {
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (!containerRef.current) {
      return;
    } 
    const animation = lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'https://assets2.lottiefiles.com/packages/lf20_zk4EpiO6Hv.json',
    });
    return () => {
      animation.destroy();
    };
  }, []);

  return (
    <div className='min-h-screen bg-primary grid grid-cols-2 items-center sm:grid-cols-1 p-10'>
      <div ref={containerRef} className='h-[500px]'>
      </div>

      <div>
        <h1 className='text-8xl font-semibold text-white sm:text-4xl'>
          Up to<b className='text-secondary'> date</b> and client{' '}
          <b className='text-green-500'>focused</b>
        </h1>
      </div>
    </div>
  );
}

export default Intro;

