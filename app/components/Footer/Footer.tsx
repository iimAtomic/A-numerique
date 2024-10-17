import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="text-white bg-midnightblue">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 text-center md:text-left md:grid-cols-4">
          <div className="flex flex-col items-center mb-8 md:items-start md:mb-0">
            <Link href="/">
              <Image
                src="/assets/logo/logoAnum2.png"
                alt="A-Numérique Logo"
                width={150}
                height={50}
                className="mb-4"
              />
            </Link>
            <p className="text-sm">
              Construisons ensemble une société numériquement et socialement
              inclusive.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Liens Rapides</h3>
            <ul className="space-y-2">
              {[
                { name: "Accueil", href: "/" },
                { name: "Qui sommes-nous ?", href: "/#nous" },
                { name: "Cours", href: "/#courses" },
                { name: "Notre équipe", href: "/#équipe" },
                { name: "Témoignages", href: "/#testimonial" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-[#418D3E]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contactez-nous</h3>
            <p className="mb-2 text-sm">Email: contact@anumerique.com</p>
            <p className="mb-2 text-sm">Téléphone: +33 6 44 91 54 46</p>
            <p className="text-sm">
              Adresse: 123 Rue de l&apos;Innovation, 75000 Paris
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Suivez-nous</h3>
            <div className="flex justify-center space-x-4 md:justify-start">
              {[
                { icon: FaFacebook, href: "https://www.facebook.com/anumerique" },
                { icon: FaTwitter, href: "https://twitter.com/anumerique" },
                { icon: FaInstagram, href: "https://www.instagram.com/anumerique" },
                { icon: FaLinkedin, href: "https://www.linkedin.com/company/anumerique" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition-colors hover:text-[#418D3E]"
                >
                  <item.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-8 mt-8 text-center border-t border-gray-700">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} A-Numérique. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
