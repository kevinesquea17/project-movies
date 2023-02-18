import React from 'react'
import FrontPage from '../components/FrontPage'
import SectionGenre from '../components/SectionGenre'
import movies from '../datafake'
import GridMovies from '../components/GridMovies'
import Banner from '../components/Banner'

const HomePage = () => {
  return (
    <>
        <FrontPage />
        <SectionGenre title='Action & Drama Movies' movies={movies.filter(movie => movie.category == 'Action')}/>
        <SectionGenre title='Funniest Comedy Movies' rowReverse={true} movies={movies.filter(movie => movie.category == 'Comedy')} />
        <Banner />
        <GridMovies />
    </>
  )
}

export default HomePage