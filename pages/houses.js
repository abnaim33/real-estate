
import React, { useContext } from 'react'
import { DataContext } from '../store/GlobalState'
import { BiBed } from 'react-icons/bi'
import Link from 'next/link'
const houses = () => {

    const { state, dispatch } = useContext(DataContext)
    const { auth, houses } = state
    console.log(houses)
    // if (auth.user?.role === 'admin') return null
    return (
        <div>
            <div className='flex items-center justify-between flex-wrap dark:text-black'>

                {
                    houses.map((item, index) => (
                        <div key={index} className='flex flex-col h-[400px] bg-gray-100
        dark:bg-gray-200 mx-auto md:mx-0 mt-10 md:mt-0 shadow-md rounded-md overflow-hidden'  >
                            <img src={item.images} alt="" className='w-full h-[50%]' />

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
        </div>
    )
}

export default houses