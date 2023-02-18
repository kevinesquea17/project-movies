import React from 'react'
import Front3 from '../assets/front3.jpg'
import Button from './Button'
import ListRecomendation from './ListRecomendation'

const Banner = () => {
  return (
    <section className='w-full h-screen relative flex items-center'>
        <img src={Front3} alt="front-3" className='absolute top-0 left-0 w-full h-full object-cover' />
        <div className='flex justify-between items-center gap-8 sm:w-[80%] w-[90%] mx-auto relative'>
            <div className='flex flex-col items-center sm:w-[50%] w-full'>
                <h2 className='font-bold text-7xl text-white text-center max-w-[60%] leading-tight'>American Made</h2>
                <div className='flex items-center space-x-6 divide-x font-light text-white text-base mt-4'>
                    <p className=''>2017</p>
                    <p className='pl-4'>Comedy</p>
                    <p className='pl-4'>11hr 55 mins</p>
                </div>
                <div className='flex items-center space-x-6 mt-10'>
                    <Button title='Watch Now' isPrimary={true} />
                    <Button title='+Playlist' />
                </div>
            </div>
            <div className='w-[50%] sm:flex flex-col hidden'>
                <h4 className='font-light text-2xl text-white mb-4'>Todays Recomendations</h4>
                <ListRecomendation />
            </div>
        </div>
    </section>
  )
}

export default Banner