import React from 'react';
import Modal from '../../components/Modal';
import DevEyesTooltip from '../../components/DevEyesTooltip';

const strategies = [
  {
    title: 'Content Sorcery',
    description:
      'We summon words from the void and arrange them into stories your audience actually finishes reading. No filler, no fluff — just content that converts.',
    image: 'images/marketing1.png',
  },
  {
    title: 'Inbound Alchemy',
    description:
      'Turning strangers into leads, leads into fans, and fans into evangelists. Nobody asked them to evangelize at dinner parties. They just can\'t help it.',
    image: 'https://www.hubspot.com/hubfs/International%20Web/Brand-refresh-2022/EN/Flywheel-Graphic-EN.svg',
  },
  {
    title: 'Social Wizardry',
    description:
      'We post, engage, and make your brand feel like the cool friend everyone tags. Algorithms fear us. Engagement rates love us.',
    image: 'images/hexmarketing.png',
  },
  {
    title: 'SEO Voodoo',
    description:
      'Sacred incantations whispered to search engines until your site climbs to page one. Technical audits, schema markup, and actual content strategy — not keyword stuffing.',
    image: 'images/seoM.jpg',
  },
];

function MarketingStrategies() {
  return (
    <section className='section' style={{ borderTop: '1px solid #f3f4f6' }}>
      <div className='container-app'>
        {/* Section header */}
        <DevEyesTooltip label='Home / Section Header'>
          <div className='mb-12 md:mb-8'>
            <p className='eyebrow mb-3'>What we do</p>
            <h2 className='heading-1 mb-4'>The pixel power is real.</h2>
            <p className='body-lg max-w-xl'>
              Four flavors of marketing magic — pick your potion, or let us mix all of them into
              something that actually moves the needle.
            </p>
          </div>
        </DevEyesTooltip>

        {/* Cards grid */}
        <div className='grid grid-cols-2 md:grid-cols-1 gap-6'>
          {strategies.map((item) => (
            <DevEyesTooltip key={item.title} label='Strategy Card'>
              <article className='card p-6 flex flex-col gap-5'>
                <div
                  className='h-12 w-12 rounded-lg flex items-center justify-center flex-shrink-0'
                  style={{ background: 'rgba(78,174,186,0.1)' }}
                >
                  <img src={item.image} alt={item.title} className='h-7 w-7 object-contain' />
                </div>
                <div className='flex-1'>
                  <h3 className='heading-3 mb-2'>{item.title}</h3>
                  <p className='body'>{item.description}</p>
                </div>
                <Modal title={item.title} image={item.image} descr={item.description} />
              </article>
            </DevEyesTooltip>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MarketingStrategies;
