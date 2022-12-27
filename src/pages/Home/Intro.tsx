import React from "react";
import lottie from "lottie-web";
function Intro() {
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
      path:"https://assets4.lottiefiles.com/packages/lf20_kEK6zMf9S6.json"
    });
    return () => {
      animation.destroy();
    };
  }, []);
  return (
    <div className="grid grid-cols-2 sm:grid-cols-1 h-screen items-center sm:mt-20">
      <div className="flex flex-col space-y-10">
          <h1 className="text-7xl font-semibold text-primary sm:text-6xl">The Best <br /><b className="text-secondary">Marketing</b></h1>
          <h1 className="text-4xl font-semibold">Does't feel like marketing</h1>
          <button className='px-16 py-5 bg-secondary text-xl text-white max-w-max hover:bg-primary'>Get Started</button>
      </div>

      <div className='p-10'>
      {/* <lottie-player
          src="https://assets4.lottiefiles.com/packages/lf20_kEK6zMf9S6.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player> */}
              </div>
    </div>
  );
}




export default Intro;
