import React from 'react';
import DevEyesTooltip from '../../components/DevEyesTooltip';

const CARD_CODE = `// About/Services.tsx — Service Card
{items.map((item) => (
  <div className="p-6 bg-white border shadow-sm flex flex-col
    space-y-4 items-center hover:shadow-lg hover:-translate-y-1
    transition-all duration-300">
    <img src={item.icon} className="h-16 w-16 object-contain" />
    <h2 className="text-xl font-semibold text-secondary">
      {item.title}
    </h2>
    <p className="text-gray-500 text-sm text-center leading-relaxed">
      {item.description}
    </p>
  </div>
))}`;

const items = [
  {
    title: 'App Alchemy',
    icon: 'images/arrows.png',
    description: 'We turn vague feature requests and napkin sketches into production-ready apps. Warning: side effects include impressed stakeholders.',
  },
  {
    title: 'Brand Sorcery',
    icon: 'images/people.png',
    description: 'Your brand is more than a logo — it\'s the vibe, the fonts, the inexplicable reason people trust you. We craft that from scratch or rescue it from design purgatory.',
  },
  {
    title: 'Growth Hacking™',
    icon: 'images/digitalmarketing.png',
    description: 'Data-driven campaigns that actually convert. We skip the buzzword bingo and focus on the metrics that pay the bills. You\'re welcome.',
  },
  {
    title: 'Visual Wizardry',
    icon: 'images/store.png',
    description: 'From UI mockups to motion graphics, we make pixels look intentional. Every design decision is defensible. Every pixel is placed on purpose.',
  },
];

const Services: React.FC = () => (
  <div className='z-20 sm:mt-10'>
    <DevEyesTooltip label='About / Services Heading' code={`<h1 className="text-secondary text-8xl text-center z-20 font-bold sm:text-5xl">
  Services
</h1>
<div className="h-96 w-full bg-primary mt-12" />`}>
      <div>
        <h1 className='text-secondary text-8xl text-center z-20 font-bold sm:text-5xl'>Services</h1>
        <div className='h-96 w-full bg-primary mt-12' />
      </div>
    </DevEyesTooltip>

    <div className='grid grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8 mx-32 sm:mx-0 -mt-48 sm:w-full sm:px-5'>
      {items.map((item) => (
        <DevEyesTooltip key={item.title} label='Service Card' code={CARD_CODE}>
          <div className='p-6 bg-white border shadow-sm flex flex-col space-y-4 items-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300'>
            <img src={item.icon} alt={item.title} className='h-16 w-16 object-contain' />
            <h2 className='text-xl font-semibold text-secondary text-center'>{item.title}</h2>
            <p className='text-gray-500 text-sm text-center leading-relaxed'>{item.description}</p>
          </div>
        </DevEyesTooltip>
      ))}
    </div>
  </div>
);

export default Services;
