import React, { useState } from 'react'
import FrontPage from '../components/FrontPage'
import SectionGenre from '../components/SectionGenre'
import movies from '../datafake'
import GridMovies from '../components/GridMovies'
import Banner from '../components/Banner'
import Filter from '../components/Filter'
import Movie from '../components/Movie'
import {motion} from 'framer-motion'

const HomePage = () => {

  const [categoryActive, setCategoryActive] = useState('All');
  const [filtered, setFiltered] = useState([]);


  return (
    <>
        <FrontPage />
        <SectionGenre title='Action & Drama Movies' movies={movies.filter(movie => movie.category == 'Action')}/>
        <SectionGenre title='Funniest Comedy Movies' rowReverse={true} movies={movies.filter(movie => movie.category == 'Comedy')} />
        <Banner />
        <GridMovies />
        <section className='py-10 bg-[#111111]'>
          <div className='w-[80%] mx-auto flex flex-col'>
            <Filter categoryActive={categoryActive} setCategoryActive={setCategoryActive} setFiltered={setFiltered} filtered={movies}/>
            <motion.div layout className='grid sm:grid-cols-6 grid-cols-2 gap-6 mt-6'>
              {filtered.map(movie => (
                <Movie key={movie.id} movie={movie} />
              ))}
            </motion.div>
          </div>
        </section>
    </>
  )
}

export default HomePage