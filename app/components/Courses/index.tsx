"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css'; // Styles de base
import 'swiper/css/navigation'; // Styles pour la navigation
import 'swiper/css/pagination'; // Styles pour la pagination
// Importation des modules de fonctionnalités
import { Navigation, Pagination } from 'swiper/modules';
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";
import { Button, Flex, useColorModeValue } from '@chakra-ui/react'
import { useState } from 'react'

const Home = () => {}
  function randomColor() {
    return Math.floor(Math.random() * 5)
  }
  
  const colorList: string[] = ['#E53E3E', '#38A169', '#00B5D8', '#44337A', '#ED64A6']


  

// CAROUSEL DATA
interface DataType {
  heading: string;
  heading2: string;
  imgSrc: string;
  name: string;
  content : string;
  content2 : string;
  content3 : string;
  students: number;
  classes: number;
  price: number;
  rating: number;
}

const postData: DataType[] = [
  {
    heading: "ALPHABÉTISATION",
    heading2: "javascript",
    name: "Colt Stelle",
    content: " Cours de français pour analphabètes",
    content2 :" Cours d'Anglais pour analphabètes ",
    content3 : "Cours de français, anglais et allemand pour les professionnels",
    imgSrc: "/assets/courses/courseone.png",
    students: 150,
    classes: 12,
    price: 20,
    rating: 4.7,
  },
  {
    heading: "NUMÉRIQUE",
    heading2: "with React programme",
    name: "Colt Stelle",
    content:"Réseau et Systèmes",
    content2 :"Data",
    content3 : "Développement informatique",
    imgSrc: "/assets/courses/coursethree.png",
    students: 130,
    classes: 12,
    price: 20,
    rating: 4.7,
  },
  {
    heading: "Graphisme",
    heading2: "with Figma",
    name: "Colt Stelle",
    content:"Montage vidéo",
    content2 :"Montage photo",
    content3 : "Creation artistique",
    imgSrc: "/assets/courses/coursetwo.png",
    students: 120,
    classes: 12,
    price: 20,
    rating: 4.7,
  },
  {
    heading: "Entrepreneuriat",
    heading2: "Webflow this Week!",
    name: "Colt Stelle",
    content:"Prise de parole en public",
    content2 :"Marketing et Vente",
    content3 : "Leadership/Management",
    imgSrc: "/assets/courses/Entreprenariat-regles-dor-pour-reussir.jpg",
    students: 150,
    classes: 12,
    price: 20,
    rating: 4.7,
  },
  {
    heading: "Soutien",
    heading2: "Webflow this Week!",
    name: "Colt Stelle",
    content : "Soutien scolaire en  mathématiques",
    content2 :"Soutien scolaire en physique-chimie",
    content3 : "Écrire un livre/poème/slam",
    imgSrc: "/assets/courses/coursetwo.png",
    students: 150,
    classes: 12,
    price: 20,
    rating: 4.7,
  },
];

const MultiCours: React.FC = () => {
    const handleClick = () => {
      window.location.href = 'https://forms.gle/dUD42YSUrjZcjXV88'; 
    }

    const [colorCode, setColorCode] = useState(colorList[randomColor()])


  const handleButtonClick = () => {
    setColorCode(colorList[randomColor()]);
    handleClick();
  };

  return (
    <div id="courses">
      <div className="mx-auto max-w-7xl sm:py-8 px-4 lg:px-8">
        <div className="sm:flex justify-between items-center">
          <h3 className="text-midnightblue text-4xl lg:text-55xl font-semibold mb-5 sm:mb-0">
            Cours Populaires
          </h3>
          {/* <Link href="/" className="text-Blueviolet text-lg font-medium space-links" onClick={handleClick}>
            Voir plus&nbsp;&gt;&nbsp;
          </Link> */}
        </div>

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={2}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          breakpoints={{
            1200: {
              slidesPerView: 3,
              slidesPerGroup: 1,
            },
            600: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            500: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            400: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            300: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            200: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            100: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
          }}
        >
          {postData.map((items, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white m-3 px-3 pt-3 pb-12 my-20 shadow-courses rounded-2xl" onClick={handleClick}>
                <div className="relative rounded-3xl" onClick={handleClick}>
                  <Image
                    src={items.imgSrc}
                    alt="course image"
                    width={389}
                    height={262}
                    className="m-auto clipPath"
                  />
                  <div className="absolute right-5 -bottom-2 bg-ultramarine rounded-full p-6">
                    <h3 className="text-white uppercase text-center text-sm font-medium">
                      best <br /> seller
                    </h3>
                  </div>
                </div>

                <div className="px-3">
                  <h4 className="text-2xl font-bold pt-6 text-black">{items.heading}</h4>
                  {/* <h4 className="text-2xl font-bold pt-1 text-black">{items.heading2}</h4> */}
                  <div>
                    <h3 className="text-base font-normal pt-6 opacity-75">1- {items.content}</h3>
                    <h3 className="text-base font-normal pt-6 opacity-75">2- {items.content2}</h3>
                    <h3 className="text-base font-normal pt-6 opacity-75">3- {items.content3}</h3>
                  </div>

                  <div className="flex justify-center items-center py-6">
                    <div className="flex gap-4">

                      {/* <h3 className="text-red text-22xl font-medium">{items.rating}</h3> */}
                      {/* <div className="flex">
                        {[...Array(5)].map((_, index) => (
                          <StarIcon key={index} className="h-5 w-5 text-gold" />
                        ))}
                        </div> */
                      }

                    </div>
                    <div>
                      <h3 className="text-3xl font-medium">GRATUIT</h3>
                    </div>
                  </div>

                  <hr style={{ color: "#C4C4C4" }} />

                  <div className="flex justify-center pt-6">
                    <div className="flex gap-2">
                      <Button
                        px={8}
                        bg={'#0D4CAC'}
                        color={'white'}
                        rounded={'md'}
                        _hover={{
                          boxShadow: 'lg',
                        }}
                        onClick={handleButtonClick}
                        >
                         <Image
                        src="/assets/courses/users.svg"
                        alt="students"
                        width={24}
                        height={24}
                        className="inline-block m-auto"
                        />
                        Participer
                      </Button>
                      {/* <button className="text-base font-medium text-black opacity-75 " onClick={handleClick}>
                        Participer
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MultiCours;
