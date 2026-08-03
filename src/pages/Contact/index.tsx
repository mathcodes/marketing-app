import React from 'react';
import Layout from '../../components/Layout';
import Address from './Address';
import ContactForm from './ContactForm';

function Contact() {
  return (
    <Layout>
      <div className='grid grid-cols-2 px-32 gap-16 mt-24 sm:grid-cols-1 sm:p-5 md:px-8'>
        <Address />
        <ContactForm />
      </div>
      <div className='flex justify-center mt-20 text-center pb-12'>
        <p className='text-gray-400 text-sm'>
          Designed &amp; built by{' '}
          <a
            href='https://jonchristie.net'
            target='_blank'
            rel='noreferrer'
            className='text-primary hover:underline'
          >
            Jon Christie
          </a>
        </p>
      </div>
    </Layout>
  );
}

export default Contact;