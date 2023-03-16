import { createContext, useReducer, useEffect } from 'react'
import reducers from './Reducers'
import { getData } from '../utils/fetchData'


export const DataContext = createContext()


export const DataProvider = ({ children }) => {
    const initialState = {
        notify: {}, auth: {}, users: [], houses: []
    }

    const [state, dispatch] = useReducer(reducers, initialState)
    const { cart, auth } = state

    useEffect(() => {
        const firstLogin = localStorage.getItem("firstLogin");
        if (firstLogin) {
            getData('auth/accessToken').then(res => {
                if (res.err) return localStorage.removeItem("firstLogin")
                dispatch({
                    type: "AUTH",
                    payload: {
                        token: res.access_token,
                        user: res.user
                    }
                })
            })
        }

        getData('houses').then(res => {
            if (res.err) return dispatch({ type: 'NOTIFY', payload: { error: res.err } })

            dispatch({
                type: "ADD_HOUSES",
                payload: res.houses
            })
        })

    }, [])





    useEffect(() => {
        if (auth.token) {


            if (auth.user.role === 'admin') {
                getData('user', auth.token)
                    .then(res => {
                        if (res.err) return dispatch({ type: 'NOTIFY', payload: { error: res.err } })

                        dispatch({ type: 'ADD_USERS', payload: res.users })
                    })
            }
        } else {

            dispatch({ type: 'ADD_HOUSES', payload: [] })
        }
    }, [auth.token])

    return (
        <DataContext.Provider value={{ state, dispatch }}>
            {children}
        </DataContext.Provider>
    )
}