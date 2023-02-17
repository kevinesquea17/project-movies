import React, { useContext } from 'react'
import movies from '../datafake';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper';
import SwiperContext from '../context/SwiperContext';



const ListMovies = () => {

    const {swiperRef} = useContext(SwiperContext)
        
    return (
        <Swiper
            modules={[Navigation]}
            onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
            }}
            spaceBetween={10}
            slidesPerView={'auto'}
        >
            {movies.map(movie => (
                <SwiperSlide key={movie.id} className='flex flex-col w-[164px]'>
                    <img src={movie.image} alt={movie.name} className='w-full h-[240px] object-cover'/>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default ListMovies