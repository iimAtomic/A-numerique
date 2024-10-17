"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

interface TestimonialData {
  name: string;
  profession: string;
  comment: string;
  imgSrc: string;
}

const testimonialData: TestimonialData[] = [
  {
    name: "Robert Fox",
    profession: "PDG, Parkview Int.Ltd",
    comment:
      "Il existe de nombreuses variantes de passages du Lorem Ipsum disponibles, mais la majorité a subi une altération sous une forme ou une autre, par l'humour injecté",
    imgSrc: "/assets/testimonial/user.svg",
  },
  {
    name: "Leslie Alexander",
    profession: "Designer, Studios Créatifs",
    comment:
      "Les cours proposés par cette plateforme m'ont énormément aidé à faire progresser ma carrière. Les instructeurs sont compétents et le contenu est à jour.",
    imgSrc: "/assets/testimonial/userone.png",
  },
  {
    name: "Cody Fisher",
    profession: "Ingénieur Logiciel, Innovations Technologiques",
    comment:
      "J'ai suivi plusieurs cours de programmation ici et je suis impressionné par la qualité de l'enseignement. Les projets pratiques m'ont vraiment aidé à consolider ma compréhension.",
    imgSrc: "/assets/testimonial/usertwo.png",
  },
  {
    name: "Robert Fox",
    profession: "Responsable Marketing, Marques Globales",
    comment:
      "Les cours de marketing digital ont été un tournant pour ma carrière. J'ai appris des stratégies que j'ai immédiatement appliquées à mon travail avec d'excellents résultats.",
    imgSrc: "/assets/testimonial/userthree.png",
  },
  {
    name: "Michael Lee",
    profession: "Entrepreneur, Ventures StartUp",
    comment:
      "En tant que créateur de ma propre entreprise, les cours d'entrepreneuriat ont fourni des insights précieux et des conseils pratiques. Fortement recommandé pour les aspirants entrepreneurs.",
    imgSrc: "/assets/testimonial/user.svg",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20" id="testimonial">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-semibold text-center text-midnightblue sm:text-4xl lg:text-5xl">
          TÉMOIGNAGES
        </h2>

        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {testimonialData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="h-full p-6 bg-white rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Image
                    src={item.imgSrc}
                    alt={item.name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-600">{item.profession}</p>
                  </div>
                </div>
                <p className="mb-4 text-base text-gray-700">{item.comment}</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`h-5 w-5 ${
                        i < 4 ? "text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-12 sm:mt-16">
          <h3 className="mb-6 text-2xl font-semibold text-center text-midnightblue sm:text-3xl">
            Découvrez notre vidéo de présentation
          </h3>
          <div className="relative w-full pt-[56.25%]">
            {" "}
            {/* 16:9 Aspect Ratio */}
            <iframe
              src="https://www.youtube.com/embed/WCdc6BHmRlM?si=fOWdLRNIfPPo9th1"
              title="Vidéo de présentation A-Numérique"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
