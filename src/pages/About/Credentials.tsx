import React from 'react';
import DevEyesTooltip from '../../components/DevEyesTooltip';

const CARD_CODE = `// Credentials Card
<article className="card p-6 flex flex-col gap-4 text-center items-center">
  <div className="h-12 w-12 rounded-full bg-primary/10
    flex items-center justify-center">
    <img src={item.image} alt={item.title}
      className="h-7 w-7 object-contain" />
  </div>
  <h3 className="heading-3">{item.title}</h3>
  <p className="body">{item.description}</p>
</article>`;

const items = [
  {
    title: 'Fueled by Cold Brew',
    image: 'images/deadline.jpg',
    description: 'Peak performance between 9am and 9pm — fueled by cold brew and the quiet dread of unmet deadlines. We deliver. Always.',
  },
  {
    title: 'Ships On Time™',
    image: 'images/presentation.png',
    description: 'We don\'t just promise timelines, we keep them. Project management so tight it has its own GitHub repo.',
  },
  {
    title: '99.9% Bug-Free*',
    image: 'images/marketing1.png',
    description: '*The 0.1% are features in disguise. We ship clean, tested, production-ready code that won\'t haunt your 2am on-call rotation.',
  },
];

const Credentials: React.FC = () => (
  <section className='section' style={{ background: '#f9fafb', borderTop: '1px solid #f3f4f6' }}>
    <div className='container-app'>
      <DevEyesTooltip label='About / Why Choose Us' code={`<div className="mb-12 text-center">
  <p className="eyebrow mb-3">Why us</p>
  <h2 className="heading-1">Why Choose Us</h2>
</div>`}>
        <div className='mb-12 md:mb-8 text-center'>
          <p className='eyebrow mb-3'>Why us</p>
          <h2 className='heading-1'>Why Choose Us</h2>
        </div>
      </DevEyesTooltip>

      <div className='grid grid-cols-3 md:grid-cols-1 gap-6'>
        {items.map((item) => (
          <DevEyesTooltip key={item.title} label='Credentials Card' code={CARD_CODE}>
            <article className='card p-8 flex flex-col gap-4 text-center items-center'>
              <div
                className='h-12 w-12 rounded-full flex items-center justify-center'
                style={{ background: 'rgba(78,174,186,0.1)' }}
              >
                <img src={item.image} alt={item.title} className='h-7 w-7 object-contain' />
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

export default Credentials;
