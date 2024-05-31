"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { StarIcon } from '@heroicons/react/24/solid';
import Image from "next/image";
import { Flex, Box } from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper/modules';



const postData= [
    {
        name: "Robert Fox",
        profession: 'CEO, Parkview Int.Ltd',
        comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
        imgSrc: '/assets/testimonial/user.svg',
    },
    {
        name: "Leslie Alexander",
        profession: 'CEO, Parkview Int.Ltd',
        comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
        imgSrc: '/assets/mentor/user2.png',
    },
    {
        name: "Cody Fisher",
        profession: 'CEO, Parkview Int.Ltd',
        comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
        imgSrc: '/assets/mentor/user3.png',
    },
    {
        name: "Robert Fox",
        profession: 'CEO, Parkview Int.Ltd',
        comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
        imgSrc: '/assets/mentor/user1.png',
    },
    {
        name: "Leslie Alexander",
        profession: 'CEO, Parkview Int.Ltd',
        comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
        imgSrc: '/assets/mentor/user2.png',
    },
    {
        name: "Cody Fisher",
        profession: 'CEO, Parkview Int.Ltd',
        comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
        imgSrc: '/assets/mentor/user3.png',
    },
];

const MultipleItems = () => {
  return (
    <div className="pt-40 pb-10 sm:pb-32 lg:py-32" id="testimonial">
      <div className='mx-auto max-w-7xl sm:py-4 lg:px-8'>
        <h2 className="text-midnightblue text-4xl md:text-5xl text-center md:text-center font-semibold mb-8">TEMOIGNAGES</h2>
        {/* <Swiper
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            1200: { slidesPerView: 3 },
            800: { slidesPerView: 2 },
            600: { slidesPerView: 1 },
           
          }}
        >
          {postData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className={`bg-white m-4 p-5 my-20 relative ${index % 2 ? 'middleDiv' : 'testimonial-shadow'}`}>
                <div className="absolute top-[-45px]">
                  <Image src={item.imgSrc} alt={item.name} width={100} height={100} className="inline-block" />
                </div>
                <h4 className='text-base font-normal text-darkgray my-4'>{item.comment}</h4>
                <hr style={{ color: "#D7D5D5" }} />
                <div className="flex justify-between">
                  <div>
                    <h3 className='text-lg font-medium text-darkbrown pt-4 pb-2'>{item.name}</h3>
                    <h3 className='text-sm font-normal text-lightgray pb-2'>{item.profession}</h3>
                  </div>
                  <div className="flex">
                    <StarIcon width={20} className="text-gold" />
                    <StarIcon width={20} className="text-gold" />
                    <StarIcon width={20} className="text-gold" />
                    <StarIcon width={20} className="text-gold" />
                    <StarIcon width={20} className="text-lightgray" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper> */}
      </div>

      <Flex
        flex={1}
        justify={'center'}
        align={'center'}
        position={'relative'}
        w={'full'}
      >
       <Box
            position={'relative'}
            height={'300px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'500'}
            overflow={'hidden'}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/WCdc6BHmRlM?si=fOWdLRNIfPPo9th1" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowFullScreen></iframe>
          </Box>
      </Flex>
    </div>
  );
};

export default MultipleItems;
