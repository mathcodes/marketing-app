import React from 'react';
import DevEyesTooltip from '../../components/DevEyesTooltip';

const tags = ['Full-Stack', 'Pixel Whisperer', 'Bug Slayer', 'Coffee Dependent'];

const Intro: React.FC = () => (
  <DevEyesTooltip label='About / Hero'>
    <section className='relative min-h-screen flex items-center overflow-hidden'>
      <div className='about-intro' />
      <div className='container-app relative z-10 py-24 md:py-20'>
        <div className='max-w-2xl'>
          <p className='eyebrow mb-4' style={{ color: '#a8dfe5' }}>About the studio</p>
          <h1 className='display text-white mb-4'>Zara Devsworth</h1>
          <div style={{ width: 48, height: 3, background: '#4eaeba', borderRadius: 2 }} />
          <p className='body-lg mt-6' style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.7 }}>
            Full-stack developer & creative director building things that matter — and look
            good doing it. Based wherever the wifi is fastest.
          </p>
          <div className='mt-6 flex gap-2 flex-wrap'>
            {tags.map((tag) => (
              <span
                key={tag}
                className='text-xs font-semibold px-3 py-1 rounded-full'
                style={{ background: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.9)', border: '1px solid rgba(255,255,255,0.2)' }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  </DevEyesTooltip>
);

export default Intro;
