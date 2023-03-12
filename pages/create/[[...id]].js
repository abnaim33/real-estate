import Head from 'next/head'
import { useState, useContext, useEffect } from 'react'
import { DataContext } from '../../store/GlobalState'
import { postData, getData, putData } from '../../utils/fetchData'
import { useRouter } from 'next/router'

const ProductsManager = () => {
    const initialState = {
        title: '',
        price: 0,
        description: '',
        location: '',
        type: 'apartment',
        images: '',
        rooms: 0
    }
    const [product, setProduct] = useState(initialState)
    const { title, price, description, location, type, images, rooms } = product

    const [imagesUrl, setImagesUrl] = useState('')

    const { state, dispatch } = useContext(DataContext)
    const { categories, auth, houses } = state
    console.log(houses)
    const router = useRouter()
    const { id } = router.query
    const [onEdit, setOnEdit] = useState(false)

    useEffect(() => {
        if (id) {
            setOnEdit(true)
            getData(`product/${id}`).then(res => {
                console.log(res, 'from create page')
                setProduct(res.product)
                setImagesUrl(res.product.images)
                // setProduct({ ...product, images: res.product.images })
            })
        } else {
            setOnEdit(false)
            setProduct(initialState)
            setImagesUrl([])
        }
    }, [id])

    const handleChangeInput = e => {
        const { name, value } = e.target
        setProduct({ ...product, [name]: value })
        // dispatch({ type: 'NOTIFY', payload: {} })
    }

    // const handleUploadInput = e => {
    //     dispatch({ type: 'NOTIFY', payload: {} })
    //     let newImages = []
    //     let num = 0
    //     let err = ''
    //     const files = [...e.target.files]

    //     if (files.length === 0)
    //         return dispatch({ type: 'NOTIFY', payload: { error: 'Files does not exist.' } })

    //     files.forEach(file => {


    //         if (file.type !== 'image/jpeg' && file.type !== 'image/png')
    //             return err = 'Image format is incorrect.'

    //         num += 1;
    //         if (num <= 5) newImages.push(file)
    //         return newImages;
    //     })

    //     if (err) dispatch({ type: 'NOTIFY', payload: { error: err } })

    //     const imgCount = images.length
    //     if (imgCount + newImages.length > 5)
    //         return dispatch({ type: 'NOTIFY', payload: { error: 'Select up to 5 images.' } })
    //     setImagesUrl([...imagesUrl, ...newImages])
    //     console.log('new image', newImages)
    // }



    const handleSubmit = async (e) => {
        e.preventDefault()
        if (auth.user.role !== 'admin')
            return dispatch({ type: 'NOTIFY', payload: { error: 'Authentication is not valid.' } })

        if (!title || !price || !location || !description || !type || !rooms || images.length === 0)
            return dispatch({ type: 'NOTIFY', payload: { error: 'Please add all the fields.' } })


        dispatch({ type: 'NOTIFY', payload: { loading: true } })
        // let media = []
        // const imgNewURL = imagesUrl.filter(img => !img.url)
        // const imgOldURL = imagesUrl.filter(img => img.url)

        // if (imgNewURL.length > 0) media = await imageUpload(imgNewURL)

        let res;
        if (onEdit) {
            res = await putData(`houses/${id}`, product, auth.token)
            if (res.err) return dispatch({ type: 'NOTIFY', payload: { error: res.err } })
        } else {
            res = await postData('houses', product, auth.token)
            if (res.err) return dispatch({ type: 'NOTIFY', payload: { error: res.err } })
        }

        return dispatch({ type: 'NOTIFY', payload: { success: res.msg } })

    }

    return (
        <div className="products_manager mt-20 md:mt-36 px-10">
            <Head>
                <title>Products Manager</title>
            </Head>
            <form className="row" onSubmit={handleSubmit}>
                <div className="col-md-6">

                    <input type="text" name="title" value={title}
                        placeholder="Title" className="d-block my-4 w-100 p-2"
                        onChange={handleChangeInput} />

                    <div className="row">
                        <div className="col-sm-6">
                            <label htmlFor="price">Price</label>
                            <input type="number" name="price" value={price}
                                placeholder="Price" className="d-block w-100 p-2"
                                onChange={handleChangeInput} />
                        </div>

                        <div className="col-sm-6">
                            <label htmlFor="rooms">Rooms</label>
                            <input type="number" name="rooms" value={rooms}
                                placeholder="Rooms" className="d-block w-100 p-2"
                                onChange={handleChangeInput} />
                        </div>
                    </div>

                    <textarea name="description" id="description" cols="30" rows="4"
                        placeholder="Description" onChange={handleChangeInput}
                        className="d-block my-4 w-100 p-2" value={description} />

                    <textarea name="location" id="location" cols="30" rows="6"
                        placeholder="location" onChange={handleChangeInput}
                        className="d-block my-4 w-100 p-2" value={location} />

                    <div className="input-group-prepend px-0 my-2">
                        <select name="type" id="type" value={type}
                            onChange={handleChangeInput} className="custom-select text-capitalize">
                            <option value="all">All Products</option>
                            {/* {
                                categories.map(item => (
                                    <option key={item._id} value={item._id}>
                                        {item.name}
                                    </option>
                                ))
                            } */}
                        </select>
                    </div>

                    <button type="submit" className="btn btn-info my-2 px-4">
                        {onEdit ? 'Update' : 'Create'}
                    </button>

                </div>

                <div className="col-md-6 my-4">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <button className="input-group-text">Upload</button>
                        </div>
                        <div className="custom-file border rounded">
                            <input type="text" className="custom-file-input"
                                name="images" value={images}
                                onChange={handleChangeInput} multiple />
                        </div>

                    </div>

                    <div className="flex img-up mx-0  min-w-[100px] min-h-[100px]">
                        {/* {
                            images.map((img, index) => (
                                <div key={index} className="file_img w-[200px] my-1 ">
                           
                                    <img src={img.url}
                                        alt="" className="w-full rounded" />
                                    <span onClick={() => deleteImage(index)}>X</span>
                                </div>
                            ))
                        } */}
                    </div>


                </div>


            </form>


        </div>
    )
}

export default ProductsManager