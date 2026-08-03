import React from 'react';
import DevEyesTooltip from '../../components/DevEyesTooltip';

const CARD_CODE = `// Service Card
<article className="card p-6 flex flex-col gap-4">
  <div className="h-11 w-11 rounded-lg bg-primary/10
    flex items-center justify-center">
    <img src={item.icon} alt={item.title}
      className="h-6 w-6 object-contain" />
  </div>
  <h3 className="heading-3">{item.title}</h3>
  <p className="body">{item.description}</p>
</article>`;

const items = [
  {
    title: 'App Alchemy',
    icon: 'images/arrows.png',
    description: 'We turn napkin sketches and vague requirements into production-ready applications. Side effects include impressed stakeholders and actual shipped features.',
  },
  {
    title: 'Brand Sorcery',
    icon: 'images/people.png',
    description: 'Your brand is the vibe, the fonts, the inexplicable reason people trust you. We craft it from scratch or rescue it from design purgatory.',
  },
  {
    title: 'Growth Hacking™',
    icon: 'images/digitalmarketing.png',
    description: 'Data-driven campaigns that convert. We skip the buzzword bingo and focus on the metrics that pay the bills.',
  },
  {
    title: 'Visual Wizardry',
    icon: 'images/store.png',
    description: 'From UI mockups to motion graphics — every pixel placed with purpose. Every design decision is defensible.',
  },
];

const Services: React.FC = () => (
  <section className='section'>
    <div className='container-app'>
      <DevEyesTooltip label='About / Services Header' code={`<div className="mb-12">
  <p className="eyebrow mb-3">What we offer</p>
  <h2 className="heading-1">Services</h2>
</div>`}>
        <div className='mb-12 md:mb-8'>
          <p className='eyebrow mb-3'>What we offer</p>
          <h2 className='heading-1'>Services</h2>
        </div>
      </DevEyesTooltip>

      <div className='grid grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6'>
        {items.map((item) => (
          <DevEyesTooltip key={item.title} label='Service Card' code={CARD_CODE}>
            <article className='card p-6 flex flex-col gap-4'>
              <div
                className='h-11 w-11 rounded-lg flex items-center justify-center flex-shrink-0'
                style={{ background: 'rgba(78,174,186,0.1)' }}
              >
                <img src={item.icon} alt={item.title} className='h-6 w-6 object-contain' />
              </div>
              <h3 className='heading-3'>{item.title}</h3>
              <p className='body'>{item.description}</p>
            </article>
          </DevEyesTooltip>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
