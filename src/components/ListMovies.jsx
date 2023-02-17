import React, { useContext } from 'react'


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper';
import SwiperContext from '../context/SwiperContext';



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
                    {/* {movie.featured && <p className='absolute top-[-10px] left-[30%] text-white rounded p-1 px-2 bg-primary text-xs font-light z-50'>Featured</p>} */}
                    <div className='w-full relative'>
                        <img src={movie.image} alt={movie.name} className='w-full h-[240px] object-cover'/>
                        <div className='bg-transparent absolute top-0 left-0 z-10 w-full h-full hover:bg-primary hover:bg-opacity-40 transition duration-300 ease-out'></div>
                    </div>
                    <div className='flex flex-col mt-2'>
                        <p className='text-xs text-gray-400'>{movie.category}, {movie.year}</p>
                        <h5 className='font-bold text-white'>{movie.name}</h5>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default ListMovies