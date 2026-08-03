import React, { useState } from 'react';
import Numbers from './Numbers';
import DevEyesTooltip from '../../components/DevEyesTooltip';

const CARD_CODE = `// Clients/ClientsList.tsx — Client Card
{visibleClients.map((item) => (
  <div key={item.id} className="bg-white shadow-sm p-6 border
    rounded-xl flex flex-col space-y-4 h-[380px]">
    <div className="flex items-center space-x-4">
      <img src={item.logo} alt={item.name}
        className="h-10 w-10 object-contain" />
      <h2 className="text-primary font-bold text-lg">{item.name}</h2>
    </div>
    <p className="text-gray-500 text-sm leading-relaxed overflow-y-auto">
      {item.description}
    </p>
  </div>
))}`;

const clients = [
  {
    id: 0,
    name: 'PixelBarn Studios',
    logo: 'https://www.jonchristie.net/favicon.png',
    url: '#',
    description: 'A creative agency that exclusively designs logos that look like friendly dragons. Their brand guidelines are a masterpiece of controlled chaos. We doubled their conversion rate by making the dragons 12% friendlier.',
  },
  {
    id: 1,
    name: 'Caffeine Labs Inc.',
    logo: 'https://www.microsoft.com/favicon.ico',
    url: '#',
    description: 'They run on cold brew and shipped 43 features before you finished your morning coffee. We built their product page, which now converts at a rate that makes their investors cry happy tears.',
  },
  {
    id: 2,
    name: 'Rogue Pixel Media',
    logo: 'https://www.google.com/favicon.ico',
    url: '#',
    description: 'A scrappy team of designers who refuse to use Comic Sans under any circumstances. We applaud their resolve. We helped them build a brand that\'s as sharp as their no-bad-fonts policy.',
  },
  {
    id: 3,
    name: 'MegaMeme Corp',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/330px-Cisco_logo_blue_2016.svg.png',
    url: '#',
    description: 'Cornered the market on mid-tier memes since 2019. We helped them go premium. Their engagement metrics are unhinged in the best possible way. The memes remain mid-tier by choice — it\'s the brand.',
  },
  {
    id: 4,
    name: 'Code Monkeys LLC',
    logo: 'https://1000logos.net/wp-content/uploads/2021/06/Zoom-Logo-2014-500x281.png',
    url: '#',
    description: 'They ship fast, break things, and deny everything. We love them. We built their docs site and a landing page that finally explains what they actually do. (Nobody was sure before.)',
  },
  {
    id: 5,
    name: 'Ghost Button Ltd.',
    logo: 'https://www.slack.com/favicon.ico',
    url: '#',
    description: 'Transparent in their designs, mysterious in their business model. They\'ve been "disrupting" something for 4 years and we fully support the journey. Beautiful UI, questionable revenue model.',
  },
  {
    id: 6,
    name: 'Div Tag Solutions',
    logo: 'https://www.skype.com/favicon.ico',
    url: '#',
    description: 'They\'ll wrap your problems in a div until they feel better. Sound familiar? We built their entire web presence and gave them a slogan that\'s both a joke and 100% their philosophy.',
  },
  {
    id: 7,
    name: 'Cascading Styles Inc.',
    logo: 'https://www.google.com/favicon.ico',
    url: '#',
    description: 'They\'ve never had a CSS conflict. (This is a lie.) We fixed approximately 847 specificity wars for them and emerged victorious. Their site now loads in under 1 second. Victory.',
  },
  {
    id: 8,
    name: 'Git Commit & Dip',
    logo: 'https://www.gotomeeting.com/favicon.ico',
    url: '#',
    description: 'In and out. No scope creep. They swear. Their average project lifespan is 6 weeks and their client NPS is a 9.4. We did the SEO campaign that put them on the map. Worth it.',
  },
  {
    id: 9,
    name: 'Async Await Agency',
    logo: 'https://www.bluejeans.com/favicon.ico',
    url: '#',
    description: 'They\'ll get back to you. Eventually. Their non-blocking approach to client work is either genius or chaos — the results suggest genius. We built the dashboard that tracks their "eventually" timelines.',
  },
  {
    id: 10,
    name: 'NullPointer Creative',
    logo: 'https://www.google.com/favicon.ico',
    url: '#',
    description: 'Named after their most common bug, which they now embrace as a personality trait. We helped them rebrand from \'scary agency\' to \'endearingly broken\' and traffic went up 300%.',
  },
  {
    id: 11,
    name: 'Merge Conflict Co.',
    logo: 'https://www.gotomeeting.com/favicon.ico',
    url: '#',
    description: 'Two co-founders, one git repo, zero conflicts on paper. We built their project management suite and their about page — which carefully omits the Great Rebasing Incident of 2022.',
  },
];

const PAGE_SIZE = 3;

function ClientsList() {
  const [page, setPage] = useState(0);
  const maxPage = Math.floor((clients.length - 1) / PAGE_SIZE);
  const visibleClients = clients.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  return (
    <div className='py-12'>
      <div className='bg-primary h-44 rounded-b-full md:rounded-b-2xl' />

      <div className='flex justify-center mt-16 px-5 items-center space-x-6 overflow-x-hidden'>
        <button
          onClick={() => setPage(p => Math.max(0, p - 1))}
          disabled={page === 0}
          className='text-4xl text-gray-400 disabled:opacity-20 hover:text-primary transition-colors cursor-pointer sm:hidden'
        >
          <i className='ri-arrow-left-s-line' />
        </button>

        <div className='grid grid-cols-3 gap-8 lg:grid-cols-1 flex-1 max-w-5xl'>
          {visibleClients.map((item) => (
            <DevEyesTooltip key={item.id} label='Client Card' code={CARD_CODE}>
              <div className='bg-white shadow-sm p-6 border rounded-xl flex flex-col space-y-4 h-[380px] hover:shadow-md transition-shadow duration-200'>
                <div className='flex items-center space-x-4'>
                  <img src={item.logo} alt={item.name} className='h-10 w-10 object-contain flex-shrink-0' />
                  <h2 className='text-primary font-bold text-lg leading-tight'>{item.name}</h2>
                </div>
                <p className='text-gray-500 text-sm leading-relaxed overflow-y-auto flex-1'>{item.description}</p>
              </div>
            </DevEyesTooltip>
          ))}
        </div>

        <button
          onClick={() => setPage(p => Math.min(maxPage, p + 1))}
          disabled={page >= maxPage}
          className='text-4xl text-gray-400 disabled:opacity-20 hover:text-primary transition-colors cursor-pointer sm:hidden'
        >
          <i className='ri-arrow-right-s-line' />
        </button>
      </div>

      {/* Pagination dots */}
      <div className='flex justify-center mt-8 space-x-2'>
        {Array.from({ length: maxPage + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            className={`rounded-full transition-all duration-200 cursor-pointer ${
              page === i
                ? 'bg-secondary h-3 w-3 border-2 border-secondary'
                : 'bg-gray-200 h-2.5 w-2.5 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      <Numbers />
    </div>
  );
}

export default ClientsList;
