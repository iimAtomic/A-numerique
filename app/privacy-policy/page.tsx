import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-20 md:pt-24 lg:pt-28">
      <div className="container max-w-4xl px-4 py-8 mx-auto">
        <h1 className="mb-6 text-2xl font-bold sm:text-3xl md:text-4xl">
          Politique de confidentialité
        </h1>
        <p className="mb-6 text-sm text-gray-600">
          Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
        </p>

        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold sm:text-2xl">
            1. Collecte des informations
          </h2>
          <p className="mb-4 text-base text-gray-700">
            A-Numérique collecte des informations lorsque vous vous inscrivez
            sur notre site, vous connectez à votre compte, participez à un cours
            ou remplissez un formulaire. Les informations collectées incluent
            votre nom, votre adresse e-mail et vos coordonnées.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold sm:text-2xl">
            2. Utilisation des informations
          </h2>
          <p className="mb-4 text-base text-gray-700">
            Les informations que nous collectons sont utilisées pour
            personnaliser votre expérience, améliorer notre site web, améliorer
            le service client et vous contacter au sujet de nos services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold sm:text-2xl">
            3. Protection des informations
          </h2>
          <p className="mb-4 text-base text-gray-700">
            Nous mettons en œuvre une variété de mesures de sécurité pour
            préserver la sécurité de vos informations personnelles. Nous
            utilisons un cryptage à la pointe de la technologie pour protéger
            les informations sensibles transmises en ligne.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold sm:text-2xl">
            4. Divulgation à des tiers
          </h2>
          <p className="mb-4 text-base text-gray-700">
            Nous ne vendons, n&apos;échangeons et ne transférons pas vos
            informations personnelles identifiables à des tiers. Cela
            n&apos;inclut pas les tiers de confiance qui nous aident à exploiter
            notre site web ou à mener nos affaires, tant que ces parties
            conviennent de garder ces informations confidentielles.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold sm:text-2xl">
            5. Consentement
          </h2>
          <p className="mb-4 text-base text-gray-700">
            En utilisant notre site, vous consentez à notre politique de
            confidentialité.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold sm:text-2xl">
            6. Modifications de la politique de confidentialité
          </h2>
          <p className="mb-4 text-base text-gray-700">
            Si nous décidons de changer notre politique de confidentialité, nous
            publierons ces changements sur cette page.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
