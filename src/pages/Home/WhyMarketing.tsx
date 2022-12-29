import React from "react";
import lottie from 'lottie-web';

function WhyMarketing() {
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
      path: 'https://assets9.lottiefiles.com/packages/lf20_9V2NFMRbO8.json',
    });
    return () => {
      animation.destroy();
    };
  }, []);
  
  return (
    <div className="mt-20">
      <h1 className="text-center text-8xl font-semibold text-primary sm:text-5xl">
        Why <b className="text-secondary">Marketing</b> ?
      </h1>
      <div ref={containerRef} className='h-[500px]'></div>
      <p className="text-gray-600 text-md mt-10">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <h1 className="text-primary text-4xl font-semibold mt-10">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </h1>
      <p className="text-gray-600 text-md mt-10">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  );
}

export default WhyMarketing;
