import React, { useContext } from 'react'


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper';
import SwiperContext from '../context/SwiperContext';
import Movie from './Movie';



const ListMovies = ({movies}) => {

    const {swiperRef} = useContext(SwiperContext)
        
    return (
        <Swiper
            modules={[Navigation]}
            onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
            }}
            spaceBetween={10}
            slidesPerView={'auto'}
            className='relative'
        >
            {movies.map(movie => (
                <SwiperSlide key={movie.id} className='flex flex-col w-[164px] relative h-auto'>
                    <Movie movie={movie} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default ListMovies