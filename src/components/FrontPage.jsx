import React from 'react'
import Button from './Button'

import {BsFillPlayFill} from 'react-icons/bs'
import Header from './Header'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/effect-fade";
import { Navigation, Autoplay, EffectFade } from 'swiper';
import { frontPages } from '../datafake';

const FrontPage = () => {
  return (
    <section className='h-screen w-full relative flex items-center'>
        {/* <Header /> */}
        <Swiper
            slidesPerView={1}
            loop={true}
            effect={"fade"}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                waitForTransition: true
            }}
            className='w-full h-full'
            modules={[Autoplay, EffectFade]}
        >
            {frontPages.map(front => (
                <SwiperSlide key={front.id} className='h-full w-full flex items-center'>
                    <img src={front.image} alt="front-page" className='absolute top-0 left-0 w-full h-full object-cover' />
                    <div className='absolute top-0 left-0 w-full h-full bg-[#111111] bg-opacity-50'></div>
                    <div className='sm:w-[80%] w-[90%] mx-auto relative flex justify-between'>
                        <div className='flex flex-col sm:w-[50%] w-full'>
                            <h2 className='sm:text-6xl text-5xl font-bold text-white'>{front.name}</h2>
                            <p className='max-w-[80%] text-white font-light sm:text-lg text-base mt-4'>{front.description}</p>
                            <div className='flex space-x-6 items-center mt-10'>
                                <Button title='Watch now' isPrimary={true} />
                                <Button title='+Playlist' />
                            </div>
                        </div>
                        <div className='sm:flex justify-center sm:w-[50%] hidden'>
                            <div className='w-32 h-32 rounded-full border border-white sm:flex hidden justify-center items-center'>
                                <BsFillPlayFill className='text-[#2582A9] text-7xl'/>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </section>
  )
}

export default FrontPage