import React from 'react'
import realEstate from '../assets/realestate.jpg'

import Portfolio from '../assets/Portfolio.png'
import Admin from '../assets/Admin.png'
import Calci from '../assets/Calculator.png'
import Filterapp from '../assets/filterproject.png'
import Todo from '../assets/Todo.png'
import Thinkfit from '../assets/ThinkFit.png'
import pagenot from '../assets/page-not-found.png'
import Privypage from '../assets/privy-page.png'





const Work = () => {
    return (
        <div name='work' className='w-full lg:h-full md:h-screen  text-gray-300 bg-[#0a192f] pl-4 '>
            <div className='max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full  p-4 '>
                <div className='pb-6 mt-20'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Work</p>
                    <p className='py-4'>Check out some of my recent work</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3   w-full   gap-4 '>
                    {/* Grid item */}
                    <div style={{ backgroundImage: `url(${Portfolio})` }} className=' contents-div shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto '>
                        {/* hover effects */}
                        <div className='opacity-0 group-hover:opacity-100 '>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Portfolio
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' >Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url(${Privypage})` }} className=' contents-div shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto '>
                        {/* hover effects */}
                        <div className='opacity-0 group-hover:opacity-100 '>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Balance Nutrition Web
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://balancenutrition.in/active_privy_platinum_plan">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' >Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url(${Thinkfit})` }} className=' contents-div shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto '>
                        {/* hover effects */}
                        <div className='opacity-0 group-hover:opacity-100 '>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Think Fit
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://thinkfit.netlify.app/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/ShriramBarai46/ThinkFit">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' >Code</button>
                                </a>
                            </div>
                        </div>
                    </div>


                    <div style={{ backgroundImage: `url(${pagenot})` }} className=' contents-div shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto '>
                        {/* hover effects */}
                        <div className='opacity-0 group-hover:opacity-100 '>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Error Page
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://404eror.netlify.app/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/ShriramBarai46/404-Page">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' >Code</button>
                                </a>
                            </div>
                        </div>
                    </div>


                    <div style={{ backgroundImage: `url(${Todo})` }} className=' contents-div shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto '>
                        {/* hover effects */}
                        <div className='opacity-0 group-hover:opacity-100 '>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                To do List
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://shrirambaraitodolist.netlify.app/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' >Code</button>
                                </a>
                            </div>
                        </div>
                    </div>



                    <div style={{ backgroundImage: `url(${Admin})` }} className=' contents-div shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto '>
                        {/* hover effects */}
                        <div className='opacity-0 group-hover:opacity-100 '>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Admin Dashboard
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://admindashboardshriram.netlify.app/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/ShriramBarai46/Admin-Dashboard">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' >Code</button>
                                </a>
                            </div>
                        </div>
                    </div>


                    <div style={{ backgroundImage: `url(${Calci})` }} className=' contents-div shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto '>
                        {/* hover effects */}
                        <div className='opacity-0 group-hover:opacity-100 '>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Calculator
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://htmlcssjs-calculator.netlify.app/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' >Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url(${Filterapp})` }} className=' contents-div shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto '>
                        {/* hover effects */}
                        <div className='opacity-0 group-hover:opacity-100 '>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Filter App
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://shrirambaraifilterapp.netlify.app/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/ShriramBarai46/filterApp">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' >Code</button>
                                </a>
                            </div>
                        </div>
                    </div>





                </div>

            </div>
        </div>
    )
}

export default Work
