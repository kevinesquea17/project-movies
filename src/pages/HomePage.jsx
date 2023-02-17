import React from 'react'
import FrontPage from '../components/FrontPage'
import SectionGenre from '../components/SectionGenre'
import movies from '../datafake'

const HomePage = () => {
  return (
    <>
        <FrontPage />
        <SectionGenre title='Action & Drama Movies' movies={movies.filter(movie => movie.category == 'Action')}/>
        <SectionGenre title='Funniest Comedy Movies' rowReverse={true} movies={movies.filter(movie => movie.category == 'Comedy')} />
    </>
  )
}

export default HomePage