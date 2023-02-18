import React from 'react'

const Recomendation = ({recomendation}) => {
  return (
    <img src={recomendation.image} alt="" className='w-44 h-28 object-cover'  />
  )
}

export default Recomendation