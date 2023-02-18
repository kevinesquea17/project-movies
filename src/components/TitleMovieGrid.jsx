import React from 'react'

const TitleMovieGrid = ({title}) => {
  return (
    <>
        <div className='w-10 h-[1px] bg-gray-600'></div>
        <h3 className='text-4xl text-white font-semibold mt-8 max-w-[80%]'>{title}</h3>
        <p className='text-gray-600 font-normal text-lg mt-6'>Most watched movies by days</p>
        <div className='w-[90%] h-[1px] bg-gray-600 mt-10'></div>
        <button className='text-sm border-none outline-none w-fit uppercase text-gray-600 tracking-widest mt-4'>View All</button>
    </>
  )
}

export default TitleMovieGrid