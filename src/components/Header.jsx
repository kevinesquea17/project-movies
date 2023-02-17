import React from 'react'

const Header = () => {
  return (
    <header className='absolute top-0 left-0 h-[70px] w-full bg-transparent sm:flex hidden items-center z-10'>
        <div className='w-[80%] flex justify-between items-center mx-auto'>
            <h2 className='text-3xl font-bold text-white'>Movies<span className='text-primary'>App</span></h2>
            <nav className='flex itesmc-center space-x-6 text-sm'>
                <a href="#" className='text-primary font-bold'>Home</a>
                <a href="#" className='text-white font-normal'>Categories</a>
                <a href="#" className='text-white font-normal'>Movies</a>
                <a href="#" className='text-white font-normal'>Series</a>
                <a href="#" className='text-white font-normal'>About</a>
            </nav>
        </div>
    </header>
  )
}

export default Header