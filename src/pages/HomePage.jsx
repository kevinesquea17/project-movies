import React from 'react'
import FrontPage from '../components/FrontPage'
import SectionGenre from '../components/SectionGenre'

const HomePage = () => {
  return (
    <>
        <FrontPage />
        <SectionGenre background='#131722' title='Action & Drama Movies'/>
        <SectionGenre background='#111111' title='Funniest Comedy Movies' rowReverse={true} />
    </>
  )
}

export default HomePage