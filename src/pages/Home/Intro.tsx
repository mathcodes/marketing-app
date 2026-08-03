import React from 'react';
import lottie from 'lottie-web';
import DevEyesTooltip from '../../components/DevEyesTooltip';

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
    <DevEyesTooltip label='Home / Hero'>
      <section className='min-h-screen flex items-center'>
        <div className='container-app w-full grid grid-cols-2 md:grid-cols-1 gap-16 md:gap-8 items-center py-20 md:py-16'>
          <div>
            <p className='eyebrow mb-4'>Award-winning creative studio</p>
            <h1 className='display'>
              PixelPusher{' '}
              <span style={{ color: '#4eaeba' }}>Co.</span>
            </h1>
            <p className='body-lg mt-6 max-w-md'>
              We make the internet look less terrible. Bold ideas, measurable outcomes, zero compromise.
            </p>
            <div className='mt-8 flex items-center gap-4 sm:flex-col sm:items-start'>
              <button className='btn-primary'>
                Let's Work Together
              </button>
              <button className='btn-ghost'>
                See Our Work <i className='ri-arrow-right-line' />
              </button>
            </div>
          </div>
          <div ref={containerRef} className='h-96 md:h-72 sm:h-56' />
        </div>
      </section>
    </DevEyesTooltip>
  );
}

export default Intro;
