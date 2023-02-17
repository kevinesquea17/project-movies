import React from 'react'
import ListMovies from './ListMovies'
import TitleGenre from './TitleGenre'
import { SwiperProvider } from '../context/SwiperContext'

const dates = [ 
    'Today', 'This week', 'Last 30 days'
]

const SectionGenre = ({title, rowReverse, movies}) => {

    return (
        <section className={`${rowReverse ? 'bg-[#0F131D]' : 'bg-[#131722]'} py-10`}>
            <div className='sm:w-[80%] w-[90%] mx-auto'>
                <div className={`${rowReverse ? 'sm:left-[30%]' : ''} w-[70%] relative flex items-center space-x-4`}>
                    {dates.map((date, index) => (
                        <div key={index} className='flex items-center space-x-2'>
                            <p className={`${date == 'Today' ? 'text-primary font-bold' : 'text-gray-400'} text-xs`}>{date}</p>
                            {date != 'Last 30 days' && <p className='text-gray-400 text-xs'>/</p>}
                        </div>
                    ))}
                </div>
                <SwiperProvider>
                    <div className={`${rowReverse ? 'sm:flex-row-reverse' : 'sm:flex-row'} flex justify-between mt-8 gap-6 flex-col-reverse`}>
                        <div className='sm:w-[70%] w-full'>
                            <ListMovies movies={movies}/>
                        </div>
                        <div className='sm:w-[30%] w-full flex flex-col'>
                            <TitleGenre title={title}/>
                        </div>
                    </div>
                </SwiperProvider>
            </div>
        </section>
    )
}

export default SectionGenre