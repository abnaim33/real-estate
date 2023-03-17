// https://real-estate-abnaim33.vercel.app/

export const getData = async (url, token) => {
    const res = await fetch(`https://real-estate-abnaim33.vercel.app/api/${url}`, {
        method: 'GET',
        headers: {
            'Authorization': token
        }
    })

    const data = res.json()
    return data
}

export const postData = async (url, post, token) => {
    console.log(post, 'from post data')
    const res = await fetch(`https://real-estate-abnaim33.vercel.app/api/${url}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify(post)
    })

    const data = await res.json()
    return data
}



export const putData = async (url, post, token) => {
    const res = await fetch(`https://real-estate-abnaim33.vercel.app/api/${url}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify(post)
    })

    const data = await res.json()
    return data
}

export const patchData = async (url, post, token) => {
    const res = await fetch(`https://real-estate-abnaim33.vercel.app/api/${url}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify(post)
    })
    console.log(post, token, 'from fetch data')
    const data = await res.json()
    return data
}


export const deleteData = async (url, token) => {
    const res = await fetch(`https://real-estate-abnaim33.vercel.app/api/${url}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    })

    const data = await res.json()
    return data
}