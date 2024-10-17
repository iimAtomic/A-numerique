"use client";

import { useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";

const Banner = () => {
  const imageSize = useBreakpointValue({ base: 300, md: 500, lg: 1000 });
  const headingSize = useBreakpointValue({ base: "3xl", md: "4xl", lg: "5xl" });
  const subheadingSize = useBreakpointValue({ base: "md", md: "lg", lg: "xl" });

  return (
    <div id="home-section" className="bg-lightkblue">
      <div className="px-4 pt-10 pb-12 mx-auto max-w-7xl sm:pt-20 sm:pb-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col justify-center col-span-1 space-y-6 lg:col-span-6 lg:space-y-8">
            <div className="flex justify-center gap-2 lg:justify-start">
              <Image
                src="/assets/banner/check.svg"
                alt="check-image"
                width={20}
                height={20}
              />
              <h3 className="text-sm font-semibold text-kellygreen">
                Soyez les premiers à nous suivre
              </h3>
            </div>
            <h1
              className={`text-midnightblue text-${headingSize} font-semibold text-center lg:text-start leading-tight`}
            >
              Développez vos compétences.
            </h1>
            <h3
              className={`text-charcoal text-${subheadingSize} font-normal text-center lg:text-start opacity-75`}
            >
              Notre réseau de mentor est là pour vous assister.
            </h3>

            <div className="relative flex flex-col items-center space-y-4 text-white focus-within:text-white sm:flex-row sm:space-y-0 sm:space-x-4">
              <input
                type="email"
                name="q"
                className="w-full px-6 py-4 text-lg text-black rounded-full opacity-75 focus:outline-none focus:ring-2 focus:ring-ultramarine focus:border-transparent"
                placeholder="Rechercher une information..."
                autoComplete="off"
              />
              <button
                type="submit"
                className="w-full px-6 py-4 font-medium text-white transition duration-300 ease-in-out rounded-full sm:w-auto bg-ultramarine hover:bg-[#418D3E] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ultramarine"
              >
                Rechercher
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-4 pt-6 lg:justify-between">
              {["Flexibilité", "Apprentissage", "Communauté"].map(
                (item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Image
                      src="/assets/banner/check-circle.svg"
                      alt="check-image"
                      width={24}
                      height={24}
                    />
                    <p className="text-sm font-medium text-black sm:text-base">
                      {item}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="flex items-center justify-center col-span-1 mt-8 lg:col-span-6 lg:mt-0">
            <Image
              src="/assets/banner/mahila.png"
              alt="Banner illustration"
              width={imageSize}
              height={imageSize}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
