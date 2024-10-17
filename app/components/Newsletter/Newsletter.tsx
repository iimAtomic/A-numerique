// Newsletter.tsx
import Link from "next/link";
import React from "react";
import NewsletterForm from "./NewsletterForm";

const Newsletter: React.FC = () => {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-imagee rounded-t-3xl">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
            Newsletter
          </h2>
          <p className="mt-4 text-sm text-white/80 sm:text-base md:text-lg">
            Abonnez-vous à notre newsletter pour bénéficier de réductions, des
            promotions et bien d&apos;autres encore.
          </p>
        </div>

        <div className="max-w-md mx-auto mt-6 sm:mt-8 md:mt-10 lg:mt-12">
          <NewsletterForm />
        </div>

        <div className="mt-6 text-center sm:mt-8">
          <p className="text-xs text-white/60 sm:text-sm">
            En vous inscrivant, vous acceptez nos{" "}
            <Link href="/terms-of-use" className="underline hover:text-white">
              conditions d&apos;utilisation
            </Link>{" "}
            et notre{" "}
            <Link href="/privacy-policy" className="underline hover:text-white">
              politique de confidentialité
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
