import React, { useContext, useEffect, useState } from 'react'
import "react-toastify/ReactToastify.min.css";
import { ToastContainer, toast } from 'react-toastify';
import valid from '../utils/valid';
import { DataContext } from '../store/GlobalState';
import { postData } from '../utils/fetchData';
import Cookie from 'js-cookie'
import { useRouter } from 'next/router'
import Link from 'next/link';

const Signin = () => {
    const router = useRouter()
    const [values, setValues] = useState({
        name: '',
        email: '',
        pass: '',
        confirm_pass: ''
    })

    const { state, dispatch } = useContext(DataContext)

    const { auth } = state
    const [signIn, setSignIn] = useState(true)

    const handleSubmit = async () => {


        if (signIn) {
            const errMsg = valid(values.name, values.email, values.pass, values.confirm_pass)

            if (errMsg) return toast(errMsg, {
                type: "error"
            })
            toast("Loading", {
                type: 'info'
            })


            const res = await postData('auth/register', values)
            console.log(res, 'from signsin')
            if (res.err) return toast(res.err, {
                type: 'error'
            })



            dispatch({
                type: 'AUTH', payload: {
                    token: res.access_token,
                    user: res.user
                }
            })

            Cookie.set('refreshtoken', res.refresh_token, {
                path: 'api/auth/accessToken',
                expires: 7
            })

            localStorage.setItem('firstLogin', true)

        } else {

            toast("Loading", {
                type: "info"
            });

            const res = await postData('auth/login', values)
            console.log(res)
            // if (res.err) return dispatch({ type: 'NOTIFY', payload: { error: res.err } })
            // dispatch({ type: 'NOTIFY', payload: { success: res.msg } })

            if (res.err) return toast(res.err, {
                type: "error"
            });

            toast("Login Success", {
                type: "success"
            });

            dispatch({
                type: 'AUTH', payload: {
                    token: res.access_token,
                    user: res.user
                }
            })

            Cookie.set('refreshtoken', res.refresh_token, {
                path: 'api/auth/accessToken',
                expires: 7
            })

            localStorage.setItem('firstLogin', true)

        }

    }
    useEffect(() => {
        if (Object.keys(auth).length !== 0) router.push("/")
    }, [auth, router])
    return (
        <>

            <ToastContainer />

            <div className="flex items-center min-h-screen p-10  bg-gray-100 lg:justify-center">
                <div
                    className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md"
                >
                    <div
                        className="p-4 py-6 md:py-20 text-white bg-indigo-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly"
                    >
                        <div className="my-3 text-4xl font-bold tracking-wider text-center">
                            <Link href="/">Happy Estate</Link>
                        </div>
                        <p className="mt-6 font-normal text-center text-gray-300 md:mt-0">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos sunt facilis corporis laboriosam nesciunt quibusdam,
                            officiis fugit
                        </p>
                        <p className="flex flex-col items-center justify-center mt-10 text-center">
                            {signIn ? <>  <span>Already have an account?</span>
                                <a href="#" className="underline" onClick={() => setSignIn(false)}>Login!</a></> :
                                <>
                                    <span>{`Don't`} have an account?</span>
                                    <a href="#" className="underline" onClick={() => setSignIn(true)}>Get Started!</a></>

                            }
                        </p>
                        <p className="mt-6 text-sm text-center text-gray-300">
                            Read our <a href="#" className="underline">terms</a> and <a href="#" className="underline">conditions</a>
                        </p>
                    </div>
                    <div className="p-5 md:py-16 bg-white md:flex-1">
                        <h3 className="my-4 text-2xl font-semibold text-gray-700">
                            {signIn ? 'Register' : 'Login'}</h3>
                        <form action="#" className="flex flex-col space-y-5"
                        >
                            {
                                signIn && <div className="flex flex-col space-y-1">
                                    <label htmlFor="email" className="text-sm font-semibold text-gray-500">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        autoFocus
                                        className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-indigo-200"
                                        onChange={(event) =>
                                            setValues((prev) => ({ ...prev, name: event.target.value }))
                                        }
                                    />
                                </div>
                            }


                            <div className="flex flex-col space-y-1">
                                <label htmlFor="email" className="text-sm font-semibold text-gray-500">Email address</label>
                                <input
                                    type="email"
                                    id="email"
                                    autoFocus
                                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-indigo-200"
                                    onChange={(event) =>
                                        setValues((prev) => ({ ...prev, email: event.target.value }))
                                    }
                                />
                            </div>
                            <div className="flex flex-col space-y-1">
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="text-sm font-semibold text-gray-500">Password</label>
                                    {!signIn &&
                                        <a href="#" className="text-sm text-indigo-600 hover:underline focus:text-indigo-800">Forgot Password?</a>

                                    }
                                </div>
                                <input
                                    type="password"
                                    id="password"
                                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-indigo-200"
                                    onChange={(event) =>
                                        setValues((prev) => ({ ...prev, pass: event.target.value }))
                                    } />
                            </div>

                            {
                                signIn && <div className="flex flex-col space-y-1">
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="confirmPassword" className="text-sm font-semibold text-gray-500">Confirm Password</label>
                                        {/* <a href="#" className="text-sm text-indigo-600 hover:underline focus:text-indigo-800">Forgot Password?</a> */}
                                    </div>
                                    <input
                                        type="password"
                                        id="confirmPassword"
                                        className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-indigo-200"
                                        onChange={(event) =>
                                            setValues((prev) => ({ ...prev, confirm_pass: event.target.value }))
                                        } />
                                </div>
                            }


                            <div>
                                <button
                                    type="submit"
                                    className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-indigo-500 rounded-md shadow hover:bg-indigo-600 focus:outline-none focus:ring-indigo-200 focus:ring-4"
                                    onClick={() => handleSubmit()}
                                >
                                    {signIn ? "SignIn" : "Log in"}
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div></>
    )
}

export default Signin