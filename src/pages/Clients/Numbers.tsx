import React from 'react';
import DevEyesTooltip from '../../components/DevEyesTooltip';

const CODE = `// Clients/Numbers.tsx — Stats row
<section style={{ background: '#1e1e1e' }}>
  <div className="container-app py-16">
    <p className="eyebrow mb-10" style={{ color: '#4eaeba' }}>
      Numbers don't lie (we checked)
    </p>
    <div className="grid grid-cols-4 md:grid-cols-2 gap-8">
      {stats.map(({ value, label }) => (
        <div key={label} className="flex flex-col gap-1">
          <span className="display text-white">{value}</span>
          <span className="eyebrow" style={{ color: '#4eaeba' }}>
            {label}
          </span>
        </div>
      ))}
    </div>
  </div>
</section>`;

const stats = [
  { value: '3,023', label: 'Happy Clients'     },
  { value: '412',   label: 'Projects Shipped'  },
  { value: '82',    label: 'Global Locations'  },
  { value: '0',     label: 'Regrets'           },
];

function Numbers() {
  return (
    <DevEyesTooltip label='Clients / Stats' code={CODE}>
      <section style={{ background: '#1e1e1e' }}>
        <div className='container-app py-16 md:py-12'>
          <p className='eyebrow mb-10 md:mb-8' style={{ color: '#4eaeba' }}>
            Numbers don't lie (we checked)
          </p>
          <div className='grid grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-8 sm:gap-6'>
            {stats.map(({ value, label }) => (
              <div key={label} className='flex flex-col gap-1'>
                <span className='display text-white'>{value}</span>
                <span className='eyebrow' style={{ color: '#4eaeba' }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </DevEyesTooltip>
  );
}

export default Numbers;
