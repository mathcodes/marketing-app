import React from 'react';
import lottie from 'lottie-web';
import DevEyesTooltip from '../../components/DevEyesTooltip';

const CODE = `// Home/WhyMarketing.tsx — Why Section
function WhyMarketing() {
  return (
    <div className="mt-24">
      <h1 className="text-center text-8xl font-bold text-primary sm:text-5xl">
        Why <b className="text-secondary">Pixel Power</b>?
      </h1>
      <div ref={containerRef} className="h-[500px]" />
      <p className="text-gray-500 text-lg mt-8 leading-relaxed">
        Because vibes aren't a marketing strategy...
      </p>
    </div>
  );
}`;

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
    <DevEyesTooltip label='Home / Why Section' code={CODE}>
      <div className='mt-24'>
        <h1 className='text-center text-8xl font-bold text-primary sm:text-5xl leading-tight'>
          Why{' '}
          <b className='text-secondary'>Pixel Power</b>?
        </h1>
        <div ref={containerRef} className='h-[500px] sm:h-64' />
        <p className='text-gray-500 text-lg mt-8 leading-relaxed max-w-3xl mx-auto text-center'>
          Because "vibes" isn't a marketing strategy. Data-backed campaigns, pixel-perfect creative, and
          strategies that don't require crossing your fingers — that's the PixelPusher difference.
        </p>
        <h2 className='text-primary text-4xl font-bold mt-14 sm:text-2xl'>
          Every pixel placed with purpose.
        </h2>
        <p className='text-gray-500 text-lg mt-6 leading-relaxed max-w-2xl'>
          From the first touchpoint to the final conversion, we obsess over the details so your
          audience notices the results. Bold ideas, measurable outcomes, zero Lorem Ipsum.
          Well — almost zero. We're working on it.
        </p>
      </div>
    </DevEyesTooltip>
  );
}

export default WhyMarketing;
