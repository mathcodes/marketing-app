import React from 'react';
import Modal from '../../components/Modal';
import DevEyesTooltip from '../../components/DevEyesTooltip';

const SECTION_CODE = `// Home/MarketingStrategies.tsx — Strategy Cards
{strategies.map((item) => (
  <div className="border border-primary p-6 flex flex-col
    space-y-6 rounded-xl hover:shadow-lg transition-shadow">
    <h2 className="text-center -mt-9 bg-white border border-primary
      text-sm font-semibold rounded-lg text-secondary py-2 mx-8">
      {item.title}
    </h2>
    <img src={item.image} alt={item.title}
      className="m-auto h-20 w-20 object-contain" />
    <Modal title={item.title} image={item.image}
      descr={item.description} />
  </div>
))}`;

const strategies = [
  {
    title: 'CONTENT SORCERY',
    description:
      'We summon words from the void, arrange them into compelling stories, and watch your audience lean forward. Our content wizards refuse to write anything that could put a caffeinated raccoon to sleep.',
    image: 'images/marketing1.png',
  },
  {
    title: 'INBOUND ALCHEMY',
    description:
      'Turning strangers into leads, leads into fans, and fans into evangelists who will passionately explain your value prop at dinner parties. Nobody asked them to. They just can\'t help it.',
    image: 'https://www.hubspot.com/hubfs/International%20Web/Brand-refresh-2022/EN/Flywheel-Graphic-EN.svg',
  },
  {
    title: 'SOCIAL WIZARDRY',
    description:
      'We post, we engage, we make your brand feel like that cool friend everyone wants to tag. Algorithms fear us. Engagement rates love us. Your competitors will definitely screenshot our work.',
    image: 'images/hexmarketing.png',
  },
  {
    title: 'SEO VOODOO',
    description:
      'We whisper sacred incantations to search engines until your site climbs to page one. Keyword stuffing? Never heard of it. We do the real dark arts — technical audits, schema markup, and actual content strategy.',
    image: 'images/seoM.jpg',
  },
];

function MarketingStrategies() {
  return (
    <div className='mt-10'>
      <DevEyesTooltip label='Home / Section Header' code={`<h2 className="text-3xl font-semibold text-primary">
  Ready to stop being forgettable?
</h2>
<h1 className="text-7xl font-bold text-primary mt-6 sm:text-5xl">
  The <b className="text-secondary">PIXEL</b> power is real.
</h1>`}>
        <div>
          <h2 className='text-3xl font-semibold text-primary sm:mt-10'>
            Ready to stop being forgettable?
          </h2>
          <h1 className='text-7xl font-bold text-primary mt-6 sm:text-5xl leading-tight'>
            The <b className='text-secondary'>PIXEL</b> power is real.
          </h1>
          <p className='text-gray-500 text-lg mt-6 leading-relaxed max-w-2xl'>
            We've got four flavors of marketing magic — pick your potion, or let us mix all of them into
            something that actually moves the needle. No fluff. No vibes-only decks. Just results.
          </p>
        </div>
      </DevEyesTooltip>

      <div className='grid grid-cols-2 gap-10 mt-12 sm:grid-cols-1'>
        {strategies.map((item) => (
          <DevEyesTooltip key={item.title} label='Strategy Card' code={SECTION_CODE}>
            <div className='border border-primary p-6 flex flex-col space-y-6 rounded-xl hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-1'>
              <h2 className='text-center -mt-9 bg-white border border-primary text-sm font-semibold rounded-lg text-secondary py-2 mx-8'>
                {item.title}
              </h2>
              <img src={item.image} alt={item.title} className='m-auto h-20 w-20 object-contain' />
              <Modal title={item.title} image={item.image} descr={item.description} />
            </div>
          </DevEyesTooltip>
        ))}
      </div>
    </div>
  );
}

export default MarketingStrategies;
