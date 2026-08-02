import React from 'react';
import DevEyesTooltip from '../../components/DevEyesTooltip';

const CARD_CODE = `// About/Credentials.tsx — Why Choose Us Card
{items.map((item) => (
  <div className="p-6 bg-white border shadow-sm flex flex-col
    space-y-4 items-center hover:shadow-lg hover:-translate-y-1
    transition-all duration-300">
    <img src={item.image} alt={item.title}
      className="h-16 w-16 object-contain" />
    <h2 className="text-xl font-bold text-secondary text-center">
      {item.title}
    </h2>
    <p className="text-gray-500 text-sm text-center leading-relaxed">
      {item.description}
    </p>
  </div>
))}`;

const items = [
  {
    title: 'Fueled by Cold Brew',
    image: 'images/deadline.jpg',
    description: 'Our team operates at peak performance between 9am and 9pm, fueled entirely by cold brew and the existential dread of unmet deadlines. We deliver — always.',
  },
  {
    title: 'Ships On Time™',
    image: 'images/presentation.png',
    description: 'We don\'t just promise timelines, we keep them. Radical concept, we know. Our project management is so tight it has its own GitHub repo.',
  },
  {
    title: '99.9% Bug-Free*',
    image: 'images/marketing1.png',
    description: '*The 0.1% are features in disguise. We ship clean, tested, and production-ready code that won\'t haunt your 2am on-call rotation. Pinky promise.',
  },
];

const Credentials: React.FC = () => (
  <div className='mx-32 sm:mx-3 mt-20 border shadow-sm rounded-xl overflow-hidden'>
    <DevEyesTooltip label='About / Why Choose Us Header' code={`<div className="bg-primary h-72 w-full flex justify-center items-center">
  <h1 className="text-7xl font-bold text-white sm:text-4xl">
    Why Choose Us
  </h1>
</div>`}>
      <div className='bg-primary h-72 w-full flex justify-center items-center'>
        <h1 className='text-7xl font-bold text-white sm:text-4xl'>Why Choose Us</h1>
      </div>
    </DevEyesTooltip>

    <div className='grid grid-cols-3 p-6 gap-8 sm:grid-cols-1'>
      {items.map((item) => (
        <DevEyesTooltip key={item.title} label='Credentials Card' code={CARD_CODE}>
          <div className='p-6 bg-white border shadow-sm flex flex-col space-y-4 items-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300'>
            <img src={item.image} alt={item.title} className='h-16 w-16 object-contain' />
            <h2 className='text-xl font-bold text-secondary text-center'>{item.title}</h2>
            <p className='text-gray-500 text-sm text-center leading-relaxed'>{item.description}</p>
          </div>
        </DevEyesTooltip>
      ))}
    </div>
  </div>
);

export default Credentials;
