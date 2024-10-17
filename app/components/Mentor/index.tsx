"use client";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// CAROUSEL DATA
interface DataType {
  profession: string;
  name: string;
  imgSrc: string;
}

const postData: DataType[] = [
  {
    profession: "Président",
    name: "Jean-Noël ASSEMIEN",
    imgSrc: "/assets/equipe/e2.jpeg",
  },
  {
    profession: "Vice-Présidente",
    name: "Raphaëlla SADIA",
    imgSrc: "/assets/equipe/e5.jpeg",
  },
  {
    profession: "Trésorière",
    name: "Christivi MUSAWO",
    imgSrc: "/assets/equipe/e1.jpeg",
  },
  {
    profession: "Responsable des Relations Publiques",
    name: "Dominique MOUNZIEGOU",
    imgSrc: "/assets/equipe/e7.jpeg",
  },
  {
    profession: "Membre Service Communication",
    name: "Gracia HOUENOU",
    imgSrc: "/assets/equipe/e6.jpeg",
  },
  {
    profession: "Membre Service Communication",
    name: "Esther ASSEMIEN",
    imgSrc: "/assets/equipe/e4.jpeg",
  },
  {
    profession: "Membre Service Relations Publiques",
    name: "Ramatou COULIBALY",
    imgSrc: "/assets/equipe/e3.jpeg",
  },
];

export default function TeamCarousel() {
  return (
    <div className="py-10 sm:py-16 md:py-24 bg-paleblue" id="équipe">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-semibold text-center text-midnightblue sm:text-4xl md:text-5xl lg:text-start sm:mb-12">
          Découvrez notre équipe.
        </h2>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 30 },
            1024: { slidesPerView: 4, spaceBetween: 40 },
          }}
          className="mySwiper"
        >
          {postData.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="p-4 text-center transition-transform duration-300 ease-in-out transform bg-white rounded-lg shadow-md hover:scale-105">
                <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full">
                  <Image
                    src={item.imgSrc}
                    alt={`Photo de ${item.name}`}
                    fill
                    sizes="100%"
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-300 ease-in-out transform hover:scale-110"
                  />
                </div>
                <h3 className="mb-2 text-xl font-semibold sm:text-2xl text-lightblack">
                  {item.name}
                </h3>
                <h4 className="text-sm font-normal opacity-75 sm:text-base text-lightblack">
                  {item.profession}
                </h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
