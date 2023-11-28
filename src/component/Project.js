import React from 'react'
import team from '../assets/userapp.png'
import ecommerce from '../assets/ecommerce.png'
import Chatting from '../assets/chatting.jpg'
import PortFolio from '../assets/portfolio.PNG'
import todo from '../assets/todo.png'

const Project = () => {
    const handlecloth = () => {
        window.open('https://github.com/riya-bhagwat/ECOMMERCE_STORE', '_blank'); 
      };
    const handleteam = () => {
        window.open('https://github.com/riya-bhagwat/make-team', '_blank'); 
      };
    const handlechat = () => {
        window.open('https://github.com/riya-bhagwat/Chatting_application-', '_blank'); 
      };
    const handletodo = () => {
        window.open('https://github.com/riya-bhagwat/Todo-list', '_blank'); 
      };
    const handleportfolio = () => {
        window.open('https://github.com/riya-bhagwat/Portfolio', '_blank'); 
      };
    return (
        <div name='project' className='bg-[#1f1f1f] w-full md:h-screen text-gray-300'>
            <div className='mx-auto flex flex-col justify-center max-w-[1000px] h-full'>
                <div>
                    <p className='border-b-4 border-pink-600 inline fond-bold text-4xl'>Projects</p>
                    <p className='py-3'>There are some Project I have worked</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 py-4 text-center'>
                    <div onClick={handlecloth} style={{ backgroundImage: `url(${ecommerce})` }} className='content-div bg-cover shadow-lg shadow-[#040c16] flex justify-center group items-center mx-auto rounded-md  container'>
                        {/* hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl text-white font-bold tracking-wider'>
                                Ecommerce Store
                            </span>
                        </div>
                    </div>
                    <div onClick={handleteam} style={{ backgroundImage: `url(${team})` }} className='content-div bg-cover shadow-lg shadow-[#040c16] flex justify-center group items-center mx-auto rounded-md  container'>
                        {/* hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl text-white font-bold tracking-wider'>
                            Team Builder App
                            </span>
                        </div>
                    </div>

                    <div onClick={handlechat} style={{ backgroundImage: `url(${Chatting})` }} className='content-div bg-cover shadow-lg shadow-[#040c16] flex justify-center group items-center mx-auto rounded-md  container'>
                        {/* hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl text-white font-bold tracking-wider'>
                                Chatting Application
                            </span>
                        </div>
                    </div>
                    <div onClick={handleportfolio} style={{ backgroundImage: `url(${PortFolio})` }} className='content-div bg-cover shadow-lg shadow-[#040c16] flex justify-center group items-center mx-auto rounded-md  container'>
                        {/* hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl text-white font-bold tracking-wider'>
                                My PortFolio
                            </span>
                        </div>
                    </div>
                    <div onClick={handletodo} style={{ backgroundImage: `url(${todo})` }} className='content-div bg-cover shadow-lg shadow-[#040c16] flex justify-center group items-center mx-auto rounded-md  container'>
                        {/* hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl text-white font-bold tracking-wider'>
                                To Do List
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Project