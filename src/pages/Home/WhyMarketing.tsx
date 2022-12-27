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
      path: 'https://assets2.lottiefiles.com/packages/lf20_zk4EpiO6Hv.json',
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
      <div className="h-[500px]">
        {/* <lottie-player
          src="https://assets2.lottiefiles.com/private_files/lf30_GjhcdO.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player> */}
      </div>
      <p className="text-gray-600 text-md mt-10">
        Do you know what your customers want? Do you think your customers trust
        your products? When was the last time you saw a customer tweeting about
        your product or service? Was it a complaint or compliment?
      </p>
      <h1 className="text-primary text-4xl font-semibold mt-10">
        The answers to all these questions lie in marketing.
      </h1>
      <p className="text-gray-600 text-md mt-10">
        How you market your business determines if the enterprise will be
        successful or not. Marketing is a tool used to create and maintain
        demand, relevance, reputation, competition and more. Without it, your
        business is likely to close down due to lack of sales.
      </p>
    </div>
  );
}

export default WhyMarketing;
