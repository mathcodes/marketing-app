import React from 'react';
import DevEyesTooltip from '../../components/DevEyesTooltip';

const CODE = `// Clients/Numbers.tsx — Stats Bar
function Numbers() {
  return (
    <div className="px-52 sm:px-5 mt-16">
      <p className="text-xl text-gray-500 my-5 font-medium">
        Numbers don't lie (we checked) ↓
      </p>
      <div className="bg-secondary flex justify-between p-8
        rounded-2xl md:flex-col md:space-y-8">
        {stats.map(({ value, label }) => (
          <div key={label} className="flex flex-col space-y-1">
            <span className="text-4xl font-bold text-white">
              {value}
            </span>
            <span className="text-primary text-xl font-medium">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}`;

const stats = [
  { value: '3,023', label: 'Happy Clients' },
  { value: '412',   label: 'Projects Shipped' },
  { value: '82',    label: 'Global Locations' },
  { value: '0',     label: 'Regrets' },
];

function Numbers() {
  return (
    <DevEyesTooltip label='Clients / Stats Bar' code={CODE}>
      <div className='px-52 sm:px-5 mt-16'>
        <p className='text-xl text-gray-500 my-5 font-medium'>
          Numbers don't lie (we checked) ↓
        </p>
        <div className='bg-secondary flex space-x-10 md:space-x-0 p-8 justify-between rounded-2xl md:flex-col md:items-start md:space-y-8'>
          {stats.map(({ value, label }) => (
            <div key={label} className='flex flex-col space-y-1'>
              <span className='lg:text-3xl text-4xl font-bold text-white'>{value}</span>
              <span className='text-primary text-xl font-medium'>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </DevEyesTooltip>
  );
}

export default Numbers;
