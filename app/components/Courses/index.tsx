"use client";

import { Button } from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Types
interface CourseData {
  heading: string;
  imgSrc: string;
  content: string[];
}

const courseData: CourseData[] = [
  {
    heading: "ALPHABÉTISATION",
    imgSrc: "/assets/courses/alphabetisation.jpg",
    content: [
      "Cours de français pour analphabètes",
      "Cours d'Anglais pour analphabètes",
      "Cours de français, anglais et allemand pour les professionnels",
    ],
  },
  {
    heading: "NUMÉRIQUE",
    imgSrc: "/assets/courses/numerique.jpg",
    content: ["Réseaux et Systèmes", "Data", "Développement informatique"],
  },
  {
    heading: "BUREAUTIQUE",
    imgSrc: "/assets/courses/bureautique.jpg",
    content: [
      "Microsoft Office (Word, Excel, PowerPoint)",
      "Google Workspace (Docs, Sheets, Slides)",
      "Gestion de projet et collaboration en ligne",
    ],
  },
  {
    heading: "ENTREPRENEURIAT",
    imgSrc: "/assets/courses/entrepreunariat.jpg",
    content: [
      "Création et gestion d'entreprise",
      "Marketing digital",
      "Comptabilité et finance pour entrepreneurs",
    ],
  },
  {
    heading: "DÉVELOPPEMENT PERSONNEL",
    imgSrc: "/assets/courses/dev-personnel.jpg",
    content: [
      "Gestion du temps et productivité",
      "Communication efficace",
      "Leadership et management",
    ],
  },
  {
    heading: "SOUTIENS SCOLAIRES",
    imgSrc: "/assets/courses/soutien-scolaire.jpg",
    content: [
      "Soutien scolaire en  mathématiques",
      "Soutien scolaire en physique",
      "Soutien scolaire en chimie",
    ],
  },
  {
    heading: "POESIES ET ECRITURES",
    imgSrc: "/assets/courses/poesie-ecriture.jpg",
    content: ["Écrire un livre", "Écrire des slams", "Écrire un poème"],
  },
];

const MultiCours: React.FC = () => {
  const [colorCode] = useState("#0D4CAC");

  const handleClick = () => {
    window.open("https://forms.gle/dUD42YSUrjZcjXV88", "_blank");
  };

  return (
    <section id="courses" className="py-12 bg-gray-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-semibold text-center text-midnightblue sm:text-4xl lg:text-5xl">
          Cours Populaires
        </h2>

        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          navigation
          modules={[Pagination, Navigation]}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {courseData.map((course, index) => (
            <SwiperSlide key={index}>
              <div className="h-full p-6 transition-transform duration-300 bg-white rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1">
                <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={course.imgSrc}
                    alt={`Image du cours ${course.heading}`}
                    fill
                    sizes="100%"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="absolute px-2 py-1 text-xs font-bold text-white rounded-full top-2 right-2 bg-ultramarine">
                    POPULAIRE
                  </div>
                </div>

                <h3 className="mb-4 text-xl font-bold text-gray-800">
                  {course.heading}
                </h3>
                <ul className="mb-6 space-y-2">
                  {course.content.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 text-green-500">•</span>
                      <span className="text-sm text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <p className="mb-4 text-2xl font-bold text-center text-green-600">
                    GRATUIT
                  </p>
                  <Button
                    width="full"
                    bg="#0D4CAC"
                    color="white"
                    _hover={{ bg: "#418D3E" }}
                    _active={{ bg: "#418D3E" }}
                    onClick={handleClick}
                  >
                    Participer
                  </Button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default MultiCours;
