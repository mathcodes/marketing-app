import React, { useState } from 'react';
import Numbers from './Numbers';
import DevEyesTooltip from '../../components/DevEyesTooltip';

const clients = [
  { id: 0,  name: 'PixelBarn Studios',   logo: 'https://www.jonchristie.net/favicon.png',         description: 'A creative agency that exclusively designs logos that look like friendly dragons. We doubled their conversion rate by making the dragons 12% friendlier.' },
  { id: 1,  name: 'Caffeine Labs Inc.',   logo: 'https://www.microsoft.com/favicon.ico',            description: 'They run on cold brew and shipped 43 features before you finished your morning coffee. We built their product page — it now converts at a rate that makes investors cry.' },
  { id: 2,  name: 'Rogue Pixel Media',   logo: 'https://www.google.com/favicon.ico',               description: 'A scrappy team of designers who refuse to use Comic Sans under any circumstances. We helped them build a brand as sharp as their no-bad-fonts policy.' },
  { id: 3,  name: 'MegaMeme Corp',        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/330px-Cisco_logo_blue_2016.svg.png', description: 'Cornered the market on mid-tier memes since 2019. We helped them go premium. Engagement metrics are unhinged in the best possible way.' },
  { id: 4,  name: 'Code Monkeys LLC',    logo: 'https://1000logos.net/wp-content/uploads/2021/06/Zoom-Logo-2014-500x281.png', description: 'They ship fast, break things, and deny everything. We built their docs site and a landing page that finally explains what they actually do.' },
  { id: 5,  name: 'Ghost Button Ltd.',   logo: 'https://www.slack.com/favicon.ico',                description: 'Transparent in their designs, mysterious in their business model. Beautiful UI, questionable revenue model. We\'re rooting for them.' },
  { id: 6,  name: 'Div Tag Solutions',   logo: 'https://www.skype.com/favicon.ico',                description: 'They\'ll wrap your problems in a div until they feel better. We built their entire web presence and gave them a slogan that\'s both a joke and 100% their philosophy.' },
  { id: 7,  name: 'Cascading Styles Inc.', logo: 'https://www.google.com/favicon.ico',             description: 'They\'ve never had a CSS conflict. (This is a lie.) We fixed 847 specificity wars for them. Their site now loads in under 1 second. Victory.' },
  { id: 8,  name: 'Git Commit & Dip',    logo: 'https://www.gotomeeting.com/favicon.ico',          description: 'In and out. No scope creep. Average project lifespan is 6 weeks and their client NPS is a 9.4. We did the SEO campaign that put them on the map.' },
  { id: 9,  name: 'Async Await Agency',  logo: 'https://www.bluejeans.com/favicon.ico',            description: 'They\'ll get back to you. Eventually. Their non-blocking approach to client work is either genius or chaos — the results suggest genius.' },
  { id: 10, name: 'NullPointer Creative', logo: 'https://www.google.com/favicon.ico',              description: 'Named after their most common bug, which they now embrace as a personality trait. We helped them rebrand and traffic went up 300%.' },
  { id: 11, name: 'Merge Conflict Co.',  logo: 'https://www.gotomeeting.com/favicon.ico',          description: 'Two co-founders, one git repo, zero conflicts on paper. We built their project management suite and their about page — which carefully omits the Great Rebasing Incident of 2022.' },
];

const PAGE_SIZE = 3;

function ClientsList() {
  const [page, setPage] = useState(0);
  const maxPage = Math.floor((clients.length - 1) / PAGE_SIZE);
  const visible = clients.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  return (
    <div>
      <section className='section'>
        <div className='container-app'>
          {/* Section header */}
          <div className='mb-10 md:mb-8 flex items-end justify-between sm:flex-col sm:items-start sm:gap-4'>
            <div>
              <p className='eyebrow mb-3'>Happy partners</p>
              <h2 className='heading-1'>Our Clients</h2>
            </div>
            {/* Pagination arrows */}
            <div className='flex items-center gap-2'>
              <button
                onClick={() => setPage(p => Math.max(0, p - 1))}
                disabled={page === 0}
                className='h-9 w-9 rounded-lg border flex items-center justify-center transition-colors'
                style={{ borderColor: page === 0 ? '#e5e7eb' : '#4eaeba', color: page === 0 ? '#d1d5db' : '#4eaeba', cursor: page === 0 ? 'default' : 'pointer' }}
              >
                <i className='ri-arrow-left-s-line text-lg' />
              </button>
              <span className='text-sm text-gray-400 px-2'>{page + 1} / {maxPage + 1}</span>
              <button
                onClick={() => setPage(p => Math.min(maxPage, p + 1))}
                disabled={page >= maxPage}
                className='h-9 w-9 rounded-lg border flex items-center justify-center transition-colors'
                style={{ borderColor: page >= maxPage ? '#e5e7eb' : '#4eaeba', color: page >= maxPage ? '#d1d5db' : '#4eaeba', cursor: page >= maxPage ? 'default' : 'pointer' }}
              >
                <i className='ri-arrow-right-s-line text-lg' />
              </button>
            </div>
          </div>

          {/* Client cards */}
          <div className='grid grid-cols-3 lg:grid-cols-1 gap-6'>
            {visible.map((item) => (
              <DevEyesTooltip key={item.id} label='Client Card'>
                <article className='card p-6 flex flex-col gap-4'>
                  <div className='flex items-center gap-3'>
                    <div
                      className='h-9 w-9 rounded-lg flex items-center justify-center flex-shrink-0'
                      style={{ background: '#f9fafb', border: '1px solid #f3f4f6' }}
                    >
                      <img src={item.logo} alt={item.name} className='h-5 w-5 object-contain' />
                    </div>
                    <h3 className='heading-3'>{item.name}</h3>
                  </div>
                  <p className='body flex-1'>{item.description}</p>
                </article>
              </DevEyesTooltip>
            ))}
          </div>

          {/* Dot indicators */}
          <div className='flex justify-center mt-8 gap-2'>
            {Array.from({ length: maxPage + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                style={{
                  width: i === page ? 20 : 8,
                  height: 8,
                  borderRadius: 4,
                  background: i === page ? '#4eaeba' : '#e5e7eb',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              />
            ))}
          </div>
        </div>
      </section>

      <Numbers />
    </div>
  );
}

export default ClientsList;
