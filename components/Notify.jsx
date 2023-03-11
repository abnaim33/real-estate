import React, { useContext } from 'react'
import { toast } from 'react-toastify'
import { DataContext } from '../store/GlobalState'
// import Loading from './Loading'

const Notify = () => {

    const { state, dispatch } = useContext(DataContext)
    const { notify } = state

    return (
        <div>
            {notify.loading && <h1>Loading</h1>}
            {notify.error && toast(notify.error, {
                type: "error"
            })}
            {notify.success && toast(notify.success, {
                type: "success"
            })}
        </div>
    )
}

export default Notify