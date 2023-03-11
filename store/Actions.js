export const ACTIONS = {
    AUTH: 'AUTH',
    ADD_HOUSES: 'ADD_HOUSES',
    NOTIFY: 'NOTIFY',
    ADD_USERS: 'ADD_USERS',
}
export const deleteItem = (data, id, type) => {
    const newData = data.filter(item => item._id !== id)

    return ({ type, payload: newData })
}

export const updateItem = (data, id, post, type) => {
    const newData = data.map(item => (item._id === id ? post : item))
    return ({ type, payload: newData })
}



