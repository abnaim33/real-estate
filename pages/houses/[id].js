import Head from 'next/head'
import { useContext, useState, useEffect } from 'react'
import { DataContext } from '../../store/GlobalState'
import { updateItem } from '../../store/Actions'
import { useRouter } from 'next/router'


const EditHouse = () => {
    const router = useRouter()
    const { id } = router.query

    const { state, dispatch } = useContext(DataContext)
    const { auth, houses } = state

    const [EditHouse, setEditHouse] = useState([])

    useEffect(() => {
        houses.forEach(house => {
            if (house._id === id) {
                setEditHouse(house)

            }
        })
    }, [houses, id])



    const handleSubmit = async () => {


        dispatch({ type: 'NOTIFY', payload: { loading: true } })
        const res = await fetch(`https://real-estate-p5w6yfmf2-abnaim33.vercel.app/api/houses/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(EditHouse)
        })

        const data = await res.json()
        if (data.err) return dispatch({ type: 'NOTIFY', payload: { error: res.err } })
        console.log(data)
        dispatch(updateItem(houses, EditHouse._id, {
            ...EditHouse,
        }, 'ADD_HOUSES'))



        return dispatch({ type: 'NOTIFY', payload: { success: data.msg } })

        // putData(`houses/${id}`, auth.token)
        //     .then(res => {
        //         if (res.err) return dispatch({ type: 'NOTIFY', payload: { error: res.err } })
        //         console.log(res)
        //         dispatch(updateItem(houses, EditHouse._id, {
        //             ...EditHouse,
        //         }, 'ADD_HOUSES'))

        //         return dispatch({ type: 'NOTIFY', payload: { success: res.msg } })
        //     })


    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setEditHouse({ ...EditHouse, [name]: value })
    }

    return (
        <div className="px-10 mt-5">
            <Head>
                <title>Edit House</title>
            </Head>



            <div>
                <button className="bg-black dark:bg-white px-6 py-2 font-semibold dark:text-black text-white rounded-sm"
                    onClick={() => router.back()}>
                    Go Back
                </button>
            </div>

            {
                auth.user?.role === 'admin' ?

                    <div className="md:w-[50%] w-full mx-auto my-4">
                        <h2 className="text-uppercase text-secondary">Edit House</h2>

                        <div className="flex items-center w-full justify-evenly">
                            <label htmlFor="title" className="d-block">Title :</label>
                            <input type="text" id="title" name="title" defaultValue={EditHouse.title}
                                onChange={handleChange} className='w-auto px-2 py-1' />
                        </div>

                        <div className="flex items-center w-full justify-evenly">
                            <label htmlFor="price" className="d-block">Price : </label>
                            <input type="text" id="price" name="price" defaultValue={EditHouse.price}
                                onChange={handleChange} className='w-auto px-2 py-1 my-2' />
                        </div>



                        <div className="flex items-center w-full justify-evenly">
                            <label htmlFor="description" className="d-block">Description : </label>
                            <input type="text" id="description" name="description" className='w-auto px-2 py-1'
                                defaultValue={EditHouse.description} onChange={handleChange} />
                        </div>
                        <div className="flex items-center w-full justify-evenly">
                            <label htmlFor="location" className="d-block">Location : </label>
                            <input type="text" id="location" name="location" className='w-auto px-2 py-1 my-2'
                                defaultValue={EditHouse.location} onChange={handleChange} />
                        </div>
                        <div className="flex items-center w-full justify-evenly">
                            <label htmlFor="type" className="d-block">Type : </label>
                            <input type="text" id="type" name="type" defaultValue={EditHouse.type}
                                onChange={handleChange} className='w-auto px-2 py-1' />
                        </div>
                        <div className="flex items-center w-full justify-evenly">
                            <label htmlFor="images" className="d-block">Image  </label>
                            <input type="text" id="images" name="images" defaultValue={EditHouse.images}
                                onChange={handleChange} className='w-full px-2 py-1 my-2 h-auto' />
                        </div>
                        <div className="flex items-center w-full justify-evenly">
                            <label htmlFor="rooms" className="d-block">Rooms : </label>
                            <input type="number" id="rooms" name="rooms" defaultValue={EditHouse.rooms}
                                onChange={handleChange} className='w-auto px-2 py-1' />
                        </div>
                        <div className="file_img w-[200px] my-1 ">

                            <img src={EditHouse.images}
                                alt="" className="w-full rounded" />

                        </div>

                        <button className="bg-black dark:bg-white px-6 py-2 font-semibold dark:text-black text-white rounded-sm" onClick={handleSubmit}>Update</button>

                    </div>
                    :
                    <div className='flex flex-col md:flex-row items-center justify-between w-full mt-5 '>

                        <div className="w-full md:w-2/4 rounded-md overflow-hidden">
                            <img src={EditHouse.images} alt="" />

                        </div>
                        <div className="w-full md:w-1/3">
                            <h1 className='text-4xl font-semibold'>Name: {EditHouse.title}</h1>
                            <div className='flex justify-between items-center text-xl font-medium my-3'>
                                <h1>Price: ${EditHouse.price}K</h1>
                                <h1>Location: {EditHouse.location}</h1>
                            </div>


                            <p className='text-lg font-semibold text-gray-800 dark:text-gray-300'>Description: <br />{EditHouse.description}</p>

                            <div className='flex justify-between items-center my-3 md:my-5 text-xl font-semibold'>
                                <h1>Type:  {EditHouse.type}</h1>
                                <h1>Rooms: {EditHouse.rooms}</h1>
                            </div>

                            <p className='bg-gray-300 font-semibold text-blue-600 py-4 pl-5'>You have to contact us for more details</p>

                        </div>

                    </div>


            }

        </div>
    )
}

export default EditHouse