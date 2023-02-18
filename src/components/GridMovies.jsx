import React from 'react'
import movies from '../datafake'
import Movie from './Movie'
import TitleMovieGrid from './TitleMovieGrid'

const GridMovies = () => {
  return (
    <section className='py-10 bg-[#131722]'>
        <div className='sm:w-[80%] w-[80%] mx-auto grid sm:grid-cols-6 grid-cols-2 gap-6'>
            <div className='col-span-2'>
                <TitleMovieGrid title='Popular Movies to Watch Now'/>
            </div>
            {movies.slice(0, 10).map(movie => (
                <Movie key={movie.id} movie={movie}/>
            ))}
        </div>
    </section>
  )
}

export default GridMovies