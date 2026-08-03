import React from 'react';
import lottie from 'lottie-web';
import DevEyesTooltip from '../../components/DevEyesTooltip';

function WhyMarketing() {
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (!containerRef.current) return;
    const animation = lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'https://assets9.lottiefiles.com/packages/lf20_9V2NFMRbO8.json',
    });
    return () => animation.destroy();
  }, []);

  return (
    <DevEyesTooltip label='Home / Why Section'>
      <section className='section' style={{ background: '#f9fafb', borderTop: '1px solid #f3f4f6' }}>
        <div className='container-app'>
          <div className='grid grid-cols-2 md:grid-cols-1 gap-16 md:gap-10 items-center'>
            {/* Animation */}
            <div ref={containerRef} className='h-80 md:h-60 sm:h-48 md:order-last' />
            {/* Copy */}
            <div>
              <p className='eyebrow mb-3'>The case for pixel power</p>
              <h2 className='heading-1 mb-6'>Why PixelPusher?</h2>
              <p className='body-lg mb-5'>
                Because "vibes" isn't a marketing strategy. Data-backed campaigns, pixel-perfect
                creative, and strategies that don't require crossing your fingers.
              </p>
              <p className='body'>
                From the first touchpoint to the final conversion, we obsess over the details so
                your audience notices the results. Bold ideas. Measurable outcomes. Zero Lorem Ipsum
                — well, almost zero. We're still working on the last 0.3%.
              </p>
              <button className='btn-primary mt-8'>
                Start a Project <i className='ri-arrow-right-line' />
              </button>
            </div>
          </div>
        </div>
      </section>
    </DevEyesTooltip>
  );
}

export default WhyMarketing;
