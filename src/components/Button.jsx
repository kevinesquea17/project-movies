import React from 'react'

const Button = ({title, isPrimary}) => {
  return (
    <button type='button' className={`${isPrimary ? 'bg-primary' : 'bg-transparent border border-white'} text-white text-xs uppercase font-bold py-4 px-8 rounded tracking-wider`}>
        {title}
    </button>
  )
}

export default Button