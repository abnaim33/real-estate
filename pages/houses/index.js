
import React, { useContext } from 'react'
// import { DataContext } from '../store/GlobalState'
import { BiBed } from 'react-icons/bi'
import Link from 'next/link'
import { DataContext } from '../../store/GlobalState'
const Houses = () => {

    const { state, dispatch } = useContext(DataContext)
    const { auth, houses } = state


    return (
        <div>
            <div className='flex items-center justify-between flex-wrap dark:text-black px-10 mt-5'>

                {
                    houses.map((item, index) => (
                        <div key={index} className='flex flex-col h-[400px] bg-gray-100
        dark:bg-gray-200 mx-auto md:mx-0 mt-10 md:mt-0 shadow-md rounded-md overflow-hidden'  >
                            <img src={item.images} alt="" className='w-full h-[50%]' />

                            <div className='flex flex-col p-5 justify-between'>
                                <div className='flex justify-between items-center'>
                                    <h1 className='text-xl font-semibold'>price: ${item.price}K</h1>
                                    <h2 className='text-lg font-medium bg-white px-6 py-2 rounded-lg'>{item.type}</h2>
                                </div>
                                <div className='my-2 flex items-center justify-between'><h1 className='border-b-2 border-gray-500'>Location</h1>
                                    <h1 className='flex border-b-2 border-gray-500'><BiBed size={25} className='mx-2' />Rooms</h1>
                                </div>

                                <div className='mb-4 flex items-center justify-between text-base'>
                                    <h1>{item.location}</h1>
                                    <h1>{item.rooms}</h1>
                                </div>
                                <div>
                                    <Link href={`/houses/${item._id}`}
                                        className='px-6 py-2 bg-indigo-700 text-white rounded-lg'>


                                        {
                                            auth.user?.role === 'admin' ? 'Edit House' : 'Show Details'
                                        }

                                    </Link>
                                </div>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Houses