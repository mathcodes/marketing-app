import React from 'react';
import DevEyesTooltip from '../../components/DevEyesTooltip';

const contactItems = [
  { icon: 'ri-map-pin-line',   label: 'Visit',  value: '404 Devland Blvd, Webville, CA' },
  { icon: 'ri-mail-send-line', label: 'Email',  value: 'hello@pixelpusher.co'           },
  { icon: 'ri-phone-line',     label: 'Call',   value: '(555) DEV-0101'                 },
];

function Address() {
  return (
    <DevEyesTooltip label='Contact / Address Card'>
      <div
        className='rounded-2xl p-8 flex flex-col gap-8'
        style={{ background: '#0f2f33' }}
      >
        <div>
          <h2 className='heading-2 text-white mb-2'>Contact Info</h2>
          <p className='body' style={{ color: 'rgba(255,255,255,0.65)' }}>
            PixelPusher Co. — We answer emails, return calls, and occasionally reply to Slack on weekends.
          </p>
        </div>
        {contactItems.map(({ icon, label, value }) => (
          <div key={label} className='flex items-start gap-4'>
            <div
              className='h-10 w-10 rounded-lg flex items-center justify-center flex-shrink-0'
              style={{ background: 'rgba(255,255,255,0.1)' }}
            >
              <i className={`${icon} text-xl`} style={{ color: '#4eaeba' }} />
            </div>
            <div>
              <p className='text-white font-semibold text-sm mb-0.5'>{label}</p>
              <p className='body text-sm' style={{ color: 'rgba(255,255,255,0.65)' }}>{value}</p>
            </div>
          </div>
        ))}
      </div>
    </DevEyesTooltip>
  );
}

export default Address;
