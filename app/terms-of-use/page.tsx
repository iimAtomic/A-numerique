import React from 'react';

const TermsOfUse: React.FC = () => {
  return (
    <div className="pt-20 md:pt-24 lg:pt-28"> {/* Ajout de padding-top pour éviter le chevauchement */}
      <div className="container max-w-4xl px-4 py-8 mx-auto">
        <h1 className="mb-6 text-2xl font-bold sm:text-3xl md:text-4xl">Conditions d&apos;utilisation</h1>
        <p className="mb-6 text-sm text-gray-600">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
        
        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold sm:text-2xl">1. Acceptation des conditions</h2>
          <p className="mb-4 text-base text-gray-700">En utilisant le site web et les services d&apos;A-Numérique, vous acceptez d&apos;être lié par ces conditions d&apos;utilisation. Si vous n&apos;acceptez pas ces conditions, veuillez ne pas utiliser notre site ou nos services.</p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold sm:text-2xl">2. Modification des conditions</h2>
          <p className="mb-4 text-base text-gray-700">A-Numérique se réserve le droit de modifier ces conditions à tout moment. Les modifications entrent en vigueur dès leur publication sur le site. Il est de votre responsabilité de consulter régulièrement ces conditions.</p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold sm:text-2xl">3. Utilisation du site</h2>
          <p className="mb-4 text-base text-gray-700">Vous vous engagez à utiliser le site et les services d&apos;A-Numérique de manière légale et conformément à ces conditions. Toute utilisation abusive ou frauduleuse est strictement interdite.</p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold sm:text-2xl">4. Propriété intellectuelle</h2>
          <p className="mb-4 text-base text-gray-700">Tout le contenu présent sur le site d&apos;A-Numérique est protégé par les lois sur la propriété intellectuelle. Vous n&apos;êtes pas autorisé à reproduire, distribuer ou utiliser ce contenu sans autorisation explicite.</p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold sm:text-2xl">5. Limitation de responsabilité</h2>
          <p className="mb-4 text-base text-gray-700">A-Numérique ne peut être tenu responsable des dommages directs ou indirects résultant de l&apos;utilisation ou de l&apos;impossibilité d&apos;utiliser ses services.</p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold sm:text-2xl">6. Loi applicable</h2>
          <p className="mb-4 text-base text-gray-700">Ces conditions sont régies par les lois françaises. Tout litige relatif à ces conditions sera soumis à la juridiction exclusive des tribunaux français.</p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfUse;
