"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const res = await fetch('/api/sendMail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, subject: 'Newsletter Subscription', message: 'A new user has subscribed to the newsletter.' }),
    });

    const result = await res.json();

    if (result.success) {
      setStatus('Email envoyé avec succès !');
    } else {
      setStatus(`Erreur : ${result.error}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative flex flex-row-reverse pt-5 text-white rounded-full focus-within:text-white lg:pt-0">
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          className="w-full py-6 pl-8 mx-3 text-sm text-black rounded-full lg:py-8 md:text-lg focus:outline-none focus:text-black" 
          placeholder="Entrez votre adresse email" 
          autoComplete="off" 
          required 
        />
        <div className="absolute inset-y-0 right-0 flex items-center pt-5 pr-6 lg:pt-0">
          <button
            type="submit"
            className="p-3 duration-300 ease-in-out rounded-full lg:p-5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ultramarine bg-ultramarine hover:bg-[#418D3E] transition"
          >
            <Image src="/assets/newsletter/send.svg" alt="send-icon" width={30} height={30} />
          </button>
        </div>
      </div>
      {status && <p>{status}</p>}
    </form>
  );
};

export default NewsletterForm;
