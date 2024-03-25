import React from 'react';

// import swiper react component
import {Swiper, SwiperSlide} from "swiper/react"

import "swiper/css";
import "swiper/css/pagination";

// import data
import {newInStore} from "../data"
import { Autoplay, Navigation, Pagination } from 'swiper';
import "swiper/css/navigation";
import "swiper/css/pagination";
import styled from 'styled-components';


const NewItemsSlider = () => {
  return <DIV><Swiper  modules={[Navigation, Pagination, Autoplay]} 
   grabCursor={true} breakpoints={{
    320:{
      slidesPerView: 2,
      spaceBetween: 18,
    },
    768:{
      slidesPerView: 3,
      spaceBetween: 20,
    },
  }}>
    {newInStore.products.map((product, index)=>{
return <SwiperSlide className='max-w-[256px]' key={index}>
  <div className='relative p-2 lg:h-[600px]'>
  
    <img src={product.image.type} className='lg:h-[100%] brightness-75 img'  alt='images'/>


    <div className='absolute text-white bottom-[20px] w-full text-center text-[18px] lg:text-2xl font-medium capitalize'>{product.name}</div>
  </div>

</SwiperSlide>
    })}
  </Swiper>
  </DIV>;
};

export default NewItemsSlider;

const DIV = styled.div`


`
