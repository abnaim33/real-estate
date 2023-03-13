import Head from 'next/head'
import { useContext, useState, useEffect } from 'react'
import { DataContext } from '../../store/GlobalState'
import { updateItem } from '../../store/Actions'

import { useRouter } from 'next/router'
import { patchData, putData } from '../../utils/fetchData'


const EditHouse = () => {
    const router = useRouter()
    const { id } = router.query

    const { state, dispatch } = useContext(DataContext)
    const { auth, houses } = state

    const [EditHouse, setEditHouse] = useState([])
    const [checkAdmin, setCheckAdmin] = useState(false)
    const [num, setNum] = useState(0)
    useEffect(() => {
        houses.forEach(house => {
            if (house._id === id) {
                setEditHouse(house)

            }
        })
    }, [houses, id])

    console.log(EditHouse)

    const handleSubmit = async () => {


        dispatch({ type: 'NOTIFY', payload: { loading: true } })
        const res = await fetch(`http://localhost:3000/api/houses/${id}`, {
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
        <div className="edit_user  mt-20 md:mt-36">
            <Head>
                <title>Edit House</title>
            </Head>



            <div>
                <button className="btn btn-dark" onClick={() => router.back()}>
                    <i className="fas fa-long-arrow-alt-left" aria-hidden></i> Go Back
                </button>
            </div>

            <div className="col-md-4 mx-auto my-4">
                <h2 className="text-uppercase text-secondary">Edit User</h2>

                <div className="form-group">
                    <label htmlFor="title" className="d-block">Title </label>
                    <input type="text" id="title" name="title" defaultValue={EditHouse.title} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="price" className="d-block">Price </label>
                    <input type="text" id="price" name="price" defaultValue={EditHouse.price} onChange={handleChange} />
                </div>

                {/* price projonto hoice .descripoiton theke shuru hobe */}

                <div className="form-group">
                    <label htmlFor="description" className="d-block">Description </label>
                    <input type="text" id="description" name="description" defaultValue={EditHouse.description} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="location" className="d-block">Location </label>
                    <input type="text" id="location" name="location" defaultValue={EditHouse.location} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="type" className="d-block">Type </label>
                    <input type="text" id="type" name="type" defaultValue={EditHouse.type} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="images" className="d-block">Image </label>
                    <input type="text" id="images" name="images" defaultValue={EditHouse.images} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="rooms" className="d-block">Room </label>
                    <input type="number" id="rooms" name="rooms" defaultValue={EditHouse.rooms} onChange={handleChange} />
                </div>


                <button className="btn btn-dark" onClick={handleSubmit}>Update</button>

            </div>

        </div>
    )
}

export default EditHouse