import React from 'react'
import { recomendations } from '../datafake'
import Recomendation from './Recomendation'

const ListRecomendation = () => {
  return (
    <div className='grid grid-cols-3 gap-2'>
        {recomendations.map(recomendation => (
            <Recomendation key={recomendation.id}  recomendation={recomendation}/>
        ))}
    </div>
  )
}

export default ListRecomendation