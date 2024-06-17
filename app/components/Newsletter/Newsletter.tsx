// Newsletter.tsx
import React from 'react';
import Image from 'next/image';
import NewsletterForm from './NewsletterForm';

const Newsletter = () => {
  return (
    <>
      {/* <div className="mx-auto max-w-2xl md:max-w-7xl sm:rounded-3xl testimonialbg"> */}
      <div className="mx-auto max-w-2xl md:max-w-7xl sm:rounded-3xl">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 md:grid-cols-12 xl:gap-x-8">
          <div className="col-span-12 bg-imagee">
            <div className="mb-10 mt-24 lg:mx-64 lg:my-24">
              <h3 className="text-4xl md:text-55xl text-center font-semibold text-white mb-3">Newsletter.</h3>
              <h3 className="text-base font-normal opacity-75 text-white text-center mb-8">
              Abonnez-vous à notre newsletter pour bénéficier de réductions,<br /> des promotions et bien d'autres encore.
              </h3>
              <NewsletterForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
