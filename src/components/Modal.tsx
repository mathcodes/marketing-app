import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

type ModalProps = {
  title: string;
  image: string;
  descr: string;
};

export default function Modal({ title, image, descr }: ModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className='text-sm font-semibold text-primary border border-primary px-5 py-2 rounded hover:bg-primary hover:text-white transition-colors duration-200 max-w-max'
      >
        Learn More →
      </button>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as='div' className='relative z-50' onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-200'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-150'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black/60 transition-opacity' />
          </Transition.Child>

          <div className='fixed inset-0 z-10 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-200'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-150'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='relative w-full max-w-sm rounded-2xl bg-white p-8 shadow-2xl'>
                  <div className='flex flex-col items-center text-center space-y-4'>
                    <div className='h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center'>
                      <img src={image} alt={title} className='h-10 w-10 object-contain' />
                    </div>
                    <Dialog.Title as='h3' className='text-xl font-semibold text-secondary'>
                      {title}
                    </Dialog.Title>
                    <p className='text-gray-500 text-sm leading-relaxed'>{descr}</p>
                  </div>
                  <button
                    onClick={() => setOpen(false)}
                    className='mt-7 w-full py-3 rounded-xl bg-secondary text-white font-semibold hover:bg-primary transition-colors duration-200'
                  >
                    Got it
                  </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
