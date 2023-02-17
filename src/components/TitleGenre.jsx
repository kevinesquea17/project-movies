import React from 'react'
import Controls from './Controls'

const TitleGenre = ({title}) => {
  return (
    <>
        <div className='w-10 h-[1px] bg-gray-600 mt-1'></div>
        <h3 className='text-3xl text-white font-semibold mt-8'>{title}</h3>
        <Controls />
        <div className='w-[90%] h-[1px] bg-gray-600 mt-6'></div>
        <button className='border-none outline-none text-gray-600 uppercase -tracking-wide text-sm w-fit mt-5'>View All</button>
    </>
  )
}

export default TitleGenre