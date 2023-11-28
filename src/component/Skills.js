import React from 'react'
import html5 from '../assets/html.png'
import css from '../assets/css.png'
import github from '../assets/github.png'
import javascript from '../assets/javascript.png'
import mongo from '../assets/mongo.png'
import react from '../assets/react.png'
import node from '../assets/node.png'
import cpp from '../assets/cpp.png'
import python from '../assets/python.png'






const Skills = () => {
  return (
    <div name='skills' className="bg-[#1f1f1f] w-full min-h-screen text-gray-300">
        <div className='flex flex-col max-w-[1000px] justify-center w-full mx-auto'>
            <div>
                <div className='border-b-4 inline border-pink-600 font-bold text-4xl'>Skills</div>
                <p className='py-4'>These are the technologies I've worked with</p>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-4 w-full py-8 gap-4 text-center'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto'src={html5} alt="html" />
                <p className='my-4'>HTML</p>
                </div>   
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto'src={css} alt="html" />
                <p className='my-4'>CSS</p>
                </div>   
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto'src={node} alt="html" />
                <p className='my-4'>NODE</p>
                </div>   
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto'src={mongo} alt="html" />
                <p className='my-4'>MONGODB</p>
                </div>   
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto'src={javascript} alt="html" />
                <p className='my-4'>JAVASCRIPT</p>
                </div>   
                
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto'src={github} alt="html" />
                <p className='my-4'>GITHUB</p>
                </div>   
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto'src={react} alt="html" />
                <p className='my-4'>REACT</p>
                </div>
                
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto'src={cpp} alt="html" />
                <p className='my-4'>C++</p>
                </div> 
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto'src={python} alt="html" />
                <p className='my-4'>PYTHON</p>
                </div>     
            </div>
        </div>
    </div>
  )
}

export default Skills