import React from 'react';
import DevEyesTooltip from '../../components/DevEyesTooltip';

const CODE = `// Contact/Address.tsx — Contact Info Card
function Address() {
  return (
    <div className="bg-primary rounded-3xl flex flex-col
      space-y-8 p-10 text-white shadow-lg">
      <h2 className="text-3xl font-bold">Get In Touch</h2>
      <p className="text-white/80 leading-relaxed">
        PixelPusher Co. — We answer emails, return calls, and
        occasionally reply to Slack on weekends. You're welcome.
      </p>
      {contactItems.map(({ icon, label, value }) => (
        <div key={label} className="flex space-x-5 items-center">
          <div className="h-12 w-12 p-2 bg-white/10 rounded-xl">
            <i className={\`\${icon} text-3xl text-secondary\`} />
          </div>
          <div>
            <p className="font-semibold text-lg">{label}</p>
            <p className="text-white/80">{value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}`;

const contactItems = [
  { icon: 'ri-map-pin-line',    label: 'Visit',  value: '404 Devland Blvd, Webville, CA' },
  { icon: 'ri-mail-send-line',  label: 'Email',  value: 'hello@pixelpusher.co' },
  { icon: 'ri-phone-line',      label: 'Call',   value: '(555) DEV-0101' },
];

function Address() {
  return (
    <DevEyesTooltip label='Contact / Address Card' code={CODE}>
      <div className='bg-primary rounded-3xl flex flex-col space-y-8 p-10 text-white shadow-lg'>
        <h2 className='text-3xl font-bold'>Get In Touch</h2>
        <p className='text-white/80 leading-relaxed'>
          PixelPusher Co. — We answer emails, return calls, and occasionally reply to Slack on
          weekends. You're welcome.
        </p>
        {contactItems.map(({ icon, label, value }) => (
          <div key={label} className='flex space-x-5 items-center'>
            <div className='h-12 w-12 p-2 bg-white/10 rounded-xl flex items-center justify-center'>
              <i className={`${icon} text-2xl text-secondary`} />
            </div>
            <div>
              <p className='font-semibold text-lg'>{label}</p>
              <p className='text-white/80 text-sm'>{value}</p>
            </div>
          </div>
        ))}
      </div>
    </DevEyesTooltip>
  );
}

export default Address;
