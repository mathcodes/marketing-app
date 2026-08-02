import React from 'react';
import DevEyesTooltip from '../../components/DevEyesTooltip';

const CODE = `// Contact/ContactForm.tsx — Message Form
function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up form submission
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-8">
      <h2 className="text-4xl font-bold text-primary">Send a Message</h2>
      <div className="flex space-x-6 lg:flex-col lg:space-y-6 lg:space-x-0">
        <input name="firstname" type="text"
          placeholder="First name" className="input-field" />
        <input name="lastname" type="text"
          placeholder="Last name" className="input-field" />
      </div>
      <input name="email" type="email"
        placeholder="Email address" className="input-field" />
      <textarea name="message" rows={5}
        placeholder="Tell us something interesting..."
        className="input-field resize-none" />
      <button type="submit"
        className="py-4 bg-secondary text-white font-semibold
          rounded-xl hover:bg-primary transition-colors duration-200">
        Launch Message →
      </button>
    </form>
  );
}`;

const inputClass = 'py-3 px-5 bg-gray-50 border border-gray-200 focus:outline-none focus:border-primary rounded-xl text-gray-700 w-full transition-colors duration-200';

function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <DevEyesTooltip label='Contact / Message Form' code={CODE}>
      <form onSubmit={handleSubmit} className='flex flex-col space-y-6'>
        <h2 className='text-4xl font-bold text-primary'>Send a Message</h2>
        <p className='text-gray-400 text-sm -mt-2'>
          We read every message. (Mostly. The really long ones get skimmed. Sorry.)
        </p>

        <div className='flex space-x-6 lg:flex-col lg:space-y-6 lg:space-x-0'>
          <input
            id='firstname'
            name='firstname'
            type='text'
            placeholder='First name'
            className={inputClass}
          />
          <input
            id='lastname'
            name='lastname'
            type='text'
            placeholder='Last name'
            className={inputClass}
          />
        </div>

        <div className='flex space-x-6 lg:flex-col lg:space-y-6 lg:space-x-0'>
          <input
            id='email'
            name='email'
            type='email'
            placeholder='Email address'
            className={inputClass}
          />
          <input
            id='phoneNum'
            name='phoneNum'
            type='tel'
            placeholder='Phone number'
            className={inputClass}
          />
        </div>

        <textarea
          id='message'
          name='message'
          rows={5}
          placeholder='Tell us something interesting...'
          className={`${inputClass} resize-none`}
        />

        <button
          type='submit'
          className='py-4 bg-secondary text-white font-semibold rounded-xl hover:bg-primary transition-colors duration-200 w-full'
        >
          Launch Message →
        </button>
      </form>
    </DevEyesTooltip>
  );
}

export default ContactForm;
