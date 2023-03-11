import React from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'
const About = () => {
    return (
        <div className='h-full w-full py-20 bg-gray-100 dark:bg-[#121212] flex flex-col md:flex-row
         items-center justify-between md:px-20 px-10 my-10 md:my-0'>
            <div className='rounded-md overflow-hidden md:w-1/3 w-full'>
                <img src="https://res.cloudinary.com/dsuh9ww6d/image/upload/v1678421270/vu-anh-TiVPTYCG_3E-unsplash_a43glu.jpg" className='w-full' alt="" />
            </div>
            <div className='md:w-2/4 w-full flex flex-col mt-10 md:mt-0'>
                <div>

                    <h1 className='text-3xl font-medium'>We are the best and most trusted <br /> <span className='text-indigo-700'>Real Estate Agency </span></h1>

                    <h4 className='text-lg font-medium text-gray-600 dark:text-gray-300'>Lorem ipsum dolor sit amet.</h4>
                </div>


                <div className='mt-4 font-medium text-gray-700  dark:text-gray-300'>

                    <h2 className='text-xl flex items-center'>
                        <AiFillCheckCircle size={35} className='text-teal-700 mr-3' />
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, dignissimos?</h2>
                    <h2 className='text-xl flex items-center'><AiFillCheckCircle size={35} className='text-purple-700 mr-3' />Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, dignissimos?</h2>
                    <h2 className='text-xl flex items-center'><AiFillCheckCircle size={35} className='text-blue-700 mr-3' />Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, dignissimos?</h2>
                </div>


            </div>
        </div>
    )
}

export default About