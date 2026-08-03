import React from 'react';
import DevEyesTooltip from '../../components/DevEyesTooltip';

const CODE = `// Contact/ContactForm.tsx
<form onSubmit={handleSubmit} className="flex flex-col gap-5">
  <div className="grid grid-cols-2 sm:grid-cols-1 gap-4">
    <input name="firstname" type="text"
      placeholder="First name" className="input-field" />
    <input name="lastname" type="text"
      placeholder="Last name" className="input-field" />
  </div>
  <div className="grid grid-cols-2 sm:grid-cols-1 gap-4">
    <input name="email" type="email"
      placeholder="Email address" className="input-field" />
    <input name="phone" type="tel"
      placeholder="Phone (optional)" className="input-field" />
  </div>
  <textarea name="message" rows={5}
    placeholder="Tell us about your project..."
    className="input-field resize-none" />
  <button type="submit" className="btn-primary w-full justify-center">
    Send Message <i className="ri-send-plane-line" />
  </button>
</form>`;

function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <DevEyesTooltip label='Contact / Message Form' code={CODE}>
      <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
        <div className='grid grid-cols-2 sm:grid-cols-1 gap-4'>
          <input
            id='firstname'
            name='firstname'
            type='text'
            placeholder='First name'
            className='input-field'
          />
          <input
            id='lastname'
            name='lastname'
            type='text'
            placeholder='Last name'
            className='input-field'
          />
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-1 gap-4'>
          <input
            id='email'
            name='email'
            type='email'
            placeholder='Email address'
            className='input-field'
          />
          <input
            id='phoneNum'
            name='phoneNum'
            type='tel'
            placeholder='Phone (optional)'
            className='input-field'
          />
        </div>
        <textarea
          id='message'
          name='message'
          rows={5}
          placeholder='Tell us about your project...'
          className='input-field resize-none'
        />
        <button type='submit' className='btn-primary w-full justify-center'>
          Send Message <i className='ri-send-plane-line' />
        </button>
      </form>
    </DevEyesTooltip>
  );
}

export default ContactForm;
