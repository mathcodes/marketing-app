import React from 'react';
import DevEyesTooltip from '../../components/DevEyesTooltip';

const CODE = `// About/Intro.tsx — Hero Banner
const Intro: React.FC = () => (
  <>
    <div className="about-intro h-screen sm:hidden" />
    <div className="grid grid-cols-2 sm:grid-cols-1 items-center
      min-h-screen sm:bg-secondary sm:p-10">
      <div className="z-10 flex justify-center">
        {/* Profile image placeholder */}
      </div>
      <div className="z-10 max-w-max flex flex-col space-y-5 sm:-mt-20">
        <h1 className="text-8xl font-bold text-white sm:text-5xl">
          ZARA DEVSWORTH
        </h1>
        <hr className="border-primary/50" />
        <p className="text-xl keywords">
          FULL-STACK | PIXEL WHISPERER | BUG SLAYER
        </p>
      </div>
    </div>
  </>
);`;

const Intro: React.FC = () => (
  <DevEyesTooltip label='About / Hero' code={CODE}>
    <>
      <div className='about-intro h-screen sm:hidden' />
      <div className='grid grid-cols-2 sm:grid-cols-1 items-center min-h-screen sm:bg-secondary sm:p-10'>
        <div className='z-10 flex justify-center'>
          {/* Profile image goes here */}
        </div>
        <div className='z-10 max-w-max flex flex-col space-y-5 sm:-mt-20'>
          <h1 className='text-8xl font-bold text-white sm:text-5xl'>ZARA DEVSWORTH</h1>
          <hr className='border-primary/50' />
          <p className='text-xl keywords tracking-widest'>
            FULL-STACK | PIXEL WHISPERER | BUG SLAYER
          </p>
        </div>
      </div>
    </>
  </DevEyesTooltip>
);

export default Intro;