import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className="bg-[#1f1f1f] w-full h-screen">
        <div className='max-w-[1000px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-pink-600'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Riya Bhagwat</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b4]'>I'm a full Stack Developer. Curious to learn more development technologies.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>
                I'm a full-Stack developer currently I'm focused on building responsive full-stack web application.
            </p>
            <div>
                <button className='text-white group hover:bg-pink-600 border-pink-600 border-2 px-6 py-3 my-2 flex item-center justify-center'>
                    View work
                    <span className='group-hover:rotate-90 duration-300 mt-1'>
                    <HiArrowNarrowRight className='ml-3' />
                    </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home