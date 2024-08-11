"use client";
import React, { useState, FormEvent, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { LockClosedIcon } from '@heroicons/react/20/solid';
import { Radio, RadioGroup, Stack } from '@chakra-ui/react';

const Register = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [value, setValue] = useState('1');
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = {
      email,
      subject: `Sujet sélectionné: ${value}`,
      message,
    };

    try {
      const response = await fetch('/api/sendMail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Email envoyé avec succès!');
        setEmail('');
        setMessage('');
        setValue('1');
      } else {
        throw new Error('Une erreur est survenue lors de l\'envoi de l\'email');
      }
    } catch (error) {
      if (error instanceof Error) {
        setStatus(`Erreur : ${error.message}`);
      } else {
        setStatus('Une erreur inconnue est survenue');
      }
    }
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:pr-0">
        <div className='lg:block'>
          <button className="text-Blueviolet text-lg font-medium ml-3 py-2 px-6 transition duration-150 ease-in-out rounded-full bg-semiblueviolet hover:text-white hover:bg-Blueviolet" style={{margin:30}} onClick={openModal}>
            Rejoignez Nous!
          </button>
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <div className="w-full max-w-md space-y-8">
                      <div>
                        <img
                          className="mx-auto h-12 w-auto"
                          src="/assets/logo/logoAnum2.png"
                          alt="Your Company"
                        />
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                          Rejoignez Nous!
                        </h2>
                      </div>
                      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="-space-y-px rounded-md shadow-sm">
                          <div>
                            <label htmlFor="email-address" className="sr-only">
                              Adresse email
                            </label>
                            <input
                              id="email-address"
                              name="email"
                              type="email"
                              autoComplete="email"
                              required
                              className="relative block w-full appearance-none rounded-none rounded-t-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                              placeholder="Entrez votre adresse email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                          <div style={{ marginTop: 15 }}>
                            <RadioGroup onChange={setValue} value={value}>
                              <Stack direction='row'>
                                <Radio value='1'>Devenir Mentor</Radio>
                                <Radio value='2'>Devenir Bénévole</Radio>
                                <Radio value='3'>Bénéficier de notre aide</Radio>
                                <Radio value='4'>Autres</Radio>
                              </Stack>
                            </RadioGroup>
                          </div>
                          <div style={{ marginTop: 15 }}>
                            <label htmlFor="message" className="sr-only">
                              Message
                            </label>
                            <textarea
                              rows={4}
                              id="message"
                              name="message"
                              autoComplete=""
                              required
                              className="relative block w-full appearance-none rounded-none rounded-t-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                              placeholder="Entrez votre message"
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}
                            />
                          </div>
                        </div>
                        <div>
                          <button
                            type="submit"
                            className="group relative flex w-full justify-center rounded-md border border-transparent bg-Blueviolet py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          >
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                              <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                            </span>
                            Envoyer
                          </button>
                        </div>
                      </form>
                      {status && <p className="text-center text-red-500">{status}</p>}
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-blue-900"
                      onClick={closeModal}
                    >
                      Merci!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Register;
