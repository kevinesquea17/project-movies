import React from 'react'
import FrontPage from '../components/FrontPage'
import SectionGenre from '../components/SectionGenre'

const HomePage = () => {
  return (
    <>
        <FrontPage />
        <SectionGenre title='Action & Drama Movies'/>
        <SectionGenre title='Funniest Comedy Movies' rowReverse={true} />
    </>
  )
}

export default HomePage