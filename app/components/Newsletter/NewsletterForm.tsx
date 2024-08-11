"use client";
import React, { useState } from 'react';

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
      <div className="relative text-white focus-within:text-white flex flex-row-reverse rounded-full pt-5 lg:pt-0">
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          className="py-6 lg:py-8 text-sm md:text-lg w-full mx-3 text-black rounded-full pl-8 focus:outline-none focus:text-black" 
          placeholder="Entrez votre adresse email" 
          autoComplete="off" 
          required 
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-6 pt-5 lg:pt-0">
          <button type="submit" className="p-3 lg:p-5 focus:outline-none focus:shadow-outline bg-ultramarine hover:bg-midnightblue duration-150 ease-in-out rounded-full">
            <img src={'/assets/newsletter/send.svg'} alt="send-icon" width={30} height={30} />
          </button>
        </div>
      </div>
      {status && <p>{status}</p>}
    </form>
  );
};

export default NewsletterForm;
