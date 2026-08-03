import React from 'react';
import Layout from '../../components/Layout';
import Address from './Address';
import ContactForm from './ContactForm';

function Contact() {
  return (
    <Layout>
      <section className='section'>
        <div className='container-app'>
          {/* Section header */}
          <div className='mb-12 md:mb-8'>
            <p className='eyebrow mb-3'>Get in touch</p>
            <h1 className='heading-1'>Let's make something great.</h1>
            <p className='body-lg mt-4 max-w-lg'>
              We read every message. Mostly. The really long ones get skimmed — but we always reply.
            </p>
          </div>

          {/* 2-col layout: address + form */}
          <div className='grid grid-cols-2 md:grid-cols-1 gap-10'>
            <Address />
            <ContactForm />
          </div>
        </div>
      </section>

      <footer className='py-8 text-center' style={{ borderTop: '1px solid #f3f4f6' }}>
        <p className='body' style={{ fontSize: '0.8125rem' }}>
          Designed &amp; built by{' '}
          <a
            href='https://jonchristie.net'
            target='_blank'
            rel='noreferrer'
            className='font-medium'
            style={{ color: '#4eaeba' }}
          >
            Jon Christie
          </a>
        </p>
      </footer>
    </Layout>
  );
}

export default Contact;
