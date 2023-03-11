import Link from 'next/link'
import React from 'react'
import { BiBed } from 'react-icons/bi'
const homeItems = [
    {
        image: 'https://res.cloudinary.com/dsuh9ww6d/image/upload/v1678421270/vu-anh-TiVPTYCG_3E-unsplash_a43glu.jpg',
        price: '$100K',
        location: 'Dhaka',
        type: 'apartment',
        size: '1 Acre'
    },


    {
        image: 'https://res.cloudinary.com/dsuh9ww6d/image/upload/v1678421270/vu-anh-TiVPTYCG_3E-unsplash_a43glu.jpg',
        price: '$100K',
        location: 'Dhaka',
        type: 'apartment',
        size: '1 Acre'
    },


    {
        image: 'https://res.cloudinary.com/dsuh9ww6d/image/upload/v1678421270/vu-anh-TiVPTYCG_3E-unsplash_a43glu.jpg',
        price: '$100K',
        location: 'Dhaka',
        type: 'apartment',
        size: '1 Acre'
    },
]

const Homes = () => {
    return (
        <div className='bg-gray-200 dark:bg-gray-400 max-h-auto px-10 py-20'>
            <div className='w-[50%] mx-auto text-center text-black dark:text-white  mb-5'>
                <h1 className='lg:text-5xl text-3xl font-semibold mb-3'>Special Homes</h1>
                <p className='lg:font-xl font-lg font-medium'>Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Deserunt, nobis incidunt sed officia modi
                    laudantium.</p>
            </div>

            <div className='flex items-center justify-between flex-wrap dark:text-black'>

                {
                    homeItems.map((item, index) => (
                        <div key={index} className='flex flex-col h-[400px] bg-gray-100
                        dark:bg-gray-200 mx-auto md:mx-0 mt-10 md:mt-0 shadow-md rounded-md overflow-hidden'  >
                            <img src={item.image} alt="" className='w-full h-[50%]' />

                            <div className='flex flex-col p-5 justify-between'>
                                <div className='flex justify-between items-center'>
                                    <h1 className='text-xl font-semibold'>{item.price}</h1>
                                    <h2 className='text-lg font-medium bg-white px-6 py-2 rounded-lg'>{item.type}</h2>
                                </div>
                                <div className='my-2 flex items-center justify-between'><h1 className='border-b-2 border-gray-500'>Location</h1>
                                    <h1 className='flex border-b-2 border-gray-500'><BiBed size={25} className='mx-2' />Rooms</h1>
                                </div>

                                <div className='mb-2 flex items-center justify-between text-lg'>
                                    <h1>{item.location}</h1>
                                    <h1>4</h1>
                                </div>
                                <div><button className='px-6 py-2 bg-indigo-700 text-white rounded-lg'>Show Details</button></div>
                            </div>

                        </div>
                    ))
                }
            </div>

            <div className='mx-auto text-center'>
                <button className='mt-10 bg-gray-900 px-6 py-2 text-white rounded-md'>
                    <Link href='/homes'>
                        View all homes
                    </Link>
                </button>
            </div>

        </div>
    )
}

export default Homes