import React from 'react'
import {motion} from 'framer-motion'

const Movie = ({movie}) => {
  return (
    <motion.div layout animate={{opacity: 1}} initial={{opacity: 0}} exit={{opacity: 0}} className='flex flex-col'>
        <div className='w-full relative'>
            <img src={movie.image} alt={movie.name} className='w-full h-[240px] object-cover'/>
            <div className='bg-transparent absolute top-0 left-0 z-10 w-full h-full hover:bg-primary hover:bg-opacity-40 transition duration-300 ease-out'></div>
        </div>
        <div className='flex flex-col mt-2'>
            <p className='text-xs text-gray-400'>{movie.category}, {movie.year}</p>
            <h5 className='font-bold text-white'>{movie.name}</h5>
        </div>
    </motion.div>
  )
}

export default Movie