import React from 'react'
import { IconBase, IconContext } from 'react-icons/lib'
import { RiMoneyDollarCircleFill } from 'react-icons/ri'
const serviceItems = [
    {
        title: 'Low price',
        icon: RiMoneyDollarCircleFill,
        description: 'Loremlkjsflskdf lfaksmfslfkjdlfdkfdfkj ldfmalfjlskfjldmlkcj akfjldfd ld'
    },
    {
        title: 'Low price',
        icon: RiMoneyDollarCircleFill,
        description: 'Loremlkjsflskdf lfaksmfslfkjdlfdkfdfkj ldfmalfjlskfjldmlkcj akfjldfd ld'
    },
    {
        title: 'Low price',
        icon: RiMoneyDollarCircleFill,
        description: 'Loremlkjsflskdf lfaksmfslfkjdlfdkfdfkj ldfmalfjlskfjldmlkcj akfjldfd ld'
    },
]
const Services = () => {
    return (
        <div className='bg-gray-200 dark:bg-gray-400 max-h-auto px-10 py-20'>
            <div className='md:w-[50%] w-[80%] mx-auto text-center text-black dark:text-white  mb-10'>
                <h1 className='md:text-5xl text-4xl font-semibold mb-3'>Our Services</h1>
                <p className='font-xl font-medium'>Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Deserunt, nobis incidunt sed officia modi
                    laudantium.</p>
            </div>
            <div className='flex items-center justify-between flex-wrap'>

                <div className='md:w-1/4 w-full text-center bg-white px-4 py-6 rounded-lg mb-10 md:mb-0'>

                    <RiMoneyDollarCircleFill size={60} color="white"
                        className='mx-auto p-3 bg-teal-500 rounded-full' />


                    <h1 className='md:text-3xl text-2xl font-bold my-4 text-gray-700'>Low Prices</h1>

                    <p className='text-base font-medium text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Maiores doloremque labore aperiam magni odit aspernatur.</p>
                </div>

                <div className='md:w-1/4 w-full text-center bg-white px-4 py-6 rounded-lg mb-10 md:mb-0'>

                    <RiMoneyDollarCircleFill size={60} color="white"
                        className='mx-auto p-3 bg-purple-500 rounded-full' />


                    <h1 className='md:text-3xl text-2xl font-bold my-4 text-gray-700'>Low Prices</h1>

                    <p className='text-base font-medium text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Maiores doloremque labore aperiam magni odit aspernatur.</p>
                </div>

                <div className='md:w-1/4 w-full text-center bg-white px-4 py-6 rounded-lg mb-10 md:mb-0'>

                    <RiMoneyDollarCircleFill size={60} color="white"
                        className='mx-auto p-3 bg-blue-500 rounded-full' />


                    <h1 className='md:text-3xl text-2xl font-bold my-4 text-gray-700'>Low Prices</h1>

                    <p className='text-base font-medium text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Maiores doloremque labore aperiam magni odit aspernatur.</p>
                </div>
            </div>
        </div>
    )
}

export default Services