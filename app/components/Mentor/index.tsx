"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";
import { FcNext } from "react-icons/fc";
import { FcPrevious} from "react-icons/fc";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Styles de base
import 'swiper/css/navigation'; // Styles pour la navigation
import 'swiper/css/pagination'; // Styles pour la pagination
// Importation des modules de fonctionnalités
import { Navigation, Pagination } from 'swiper/modules';


// CAROUSEL DATA

interface DataType {
    profession: string;
    name: string;
    imgSrc: string;
}

const postData: DataType[] = [
    {
        profession: 'Président A-Numérique',
        name: 'Jean-Noël ASSEMIEN',
        imgSrc: '/assets/equipe/e2.jpeg',
    },
    {
        profession: ' Vice-Présidente A-Numérique, Manager des Organisations|',
        name: 'Raphaëlla SADIA',
        imgSrc: '/assets/equipe/e5.jpeg',
    },
    {
        profession: 'Employée de banque , Trésorière A-Numérique',
        name: 'Christivi MUSAWO',
        imgSrc: '/assets/equipe/e1.jpeg',
    },
    {
        profession: 'Ingénieur Maintenance, Responsable des Relations Publiques à A-Numérique',
        name: 'Dominique MOUNZIEGOU',
        imgSrc: '/assets/equipe/e7.jpeg',
    },
    {
        profession: ' Styliste Modéliste, membre Service Communication',
        name: 'Gracia HOUENOU',
        imgSrc: '/assets/equipe/e6.jpeg',
    },
    {
        profession: ' Cheffe de projet éditorial web, Membre Service Communication',
        name: 'Esther ASSEMIEN',
        imgSrc: '/assets/equipe/e4.jpeg',
    },
    {
        profession: ' Stagiaire à la délégation du Burkina Faso auprès de L-UNESCO, Membre Service Relations Publiques',
        name: 'Ramatou COULIBALY',
        imgSrc: '/assets/equipe/e3.jpeg',
    },
]


export default function TeamCarousel() {
    return (
      <div className="py-10 sm:py-24 bg-paleblue" id="équipe">
        <div className='mx-auto max-w-2xl lg:max-w-7xl sm:px-4 lg:px-8'>
          <h2 className="text-midnightblue text-4xl md:text-5xl text-center md:text-start font-semibold mb-8">Découvrez notre équipe.</h2>
          <Swiper
            modules={[Navigation, Pagination]} // Utilisez les modules ici
            spaceBetween={30}
            slidesPerView={1}
            navigation // active le module Navigation
            pagination={{ clickable: true }} // active le module Pagination
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              938: { slidesPerView: 3, spaceBetween: 20 },
              1024: { slidesPerView: 4, spaceBetween: 40 },
            }}
          >
            {postData.map((item, i) => (
              <SwiperSlide key={i}>
                <div className='text-center-mentor' >
                  <Image 
                    className="img-mentor"
                    src={item.imgSrc}
                    alt="user-image"
                    width={200}
                    height={200}
                     />
                  <h3 className='text-2xl font-semibold text-lightblack mt-4'>{item.name}</h3>
                  <h4 className='text-lg font-normal text-lightblack opacity-75 mt-2'>{item.profession}</h4>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    );
  }