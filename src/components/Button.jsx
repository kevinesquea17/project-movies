import React from 'react'

const Button = ({title, isPrimary}) => {
  return (
    <button type='button' className={`${isPrimary ? 'bg-primary' : 'bg-transparent border border-white'} text-white text-xs uppercase font-bold py-6 px-12 rounded tracking-wider`}>
        {title}
    </button>
  )
}

export default Button