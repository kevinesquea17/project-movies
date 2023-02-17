import React, { useContext } from 'react'
import {MdOutlineKeyboardArrowLeft} from 'react-icons/md'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import SwiperContext from '../context/SwiperContext'

const Controls = () => {

    const {swiperRef} = useContext(SwiperContext)

    return (
        <div className='flex items-center space-x-4 mt-6'>
            <div 
                className='flex items-center justify-center h-10 w-10 rounded-full border border-gray-600'
                onClick={() => swiperRef.current?.slidePrev()}
            >
                <MdOutlineKeyboardArrowLeft className='text-gray-600 text-xl' />
            </div>
            <div 
                className='flex items-center justify-center h-10 w-10 rounded-full border border-gray-600'
                onClick={() => swiperRef.current?.slideNext()}
            >
                <MdOutlineKeyboardArrowRight className='text-gray-600 text-xl' />
            </div>
        </div>
    )
}

export default Controls