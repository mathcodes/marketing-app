import React from 'react';
import { JSX } from '@babel/types';

interface IntroProps {
  // Declare any props that the component will receive here
}

const Intro: React.FC<IntroProps> = (props: IntroProps) => {
  return (
    <>
      <div className='about-intro h-screen sm:hidden'>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-1 items-center min-h-screen sm:bg-secondary sm:p-10">
        <div className='z-10 flex justify-center'>
          {/* <img src={__} alt="" className='h-[500px] w-[500px]'/> */}
        </div>
        <div className='z-10 max-w-max flex flex-col space-y-5 sm:-mt-20'>
          <h1 className='text-8xl font-semibold text-white sm:text-5xl'>YOUR NAME HERE</h1>
          <hr />
          <h1 className='text-xl keywords'>KEYWORD1 | KEYWORD2 | KEYWORD3</h1>
        </div>
      </div>
    </>
  );
}

export default Intro;