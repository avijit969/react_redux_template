import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../store/authSlice'
import { Link } from 'react-router-dom'

function Home() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(login({
            userData: {
                developerName: 'avi',
                techStack: ['react', 'vite', 'tailwind', 'redux_toolkit', 'redux_persist', 'magic ui', 'shadcn ui'],
            }
        }))
    }, [])
    const userData = useSelector((state) => state.auth.userData)
    return (
        <div className='bg-slate-200 h-screen'>
            <h1 className="text-2xl font-semibold text-center">react+vite , tailwind , redux_toolkit ,redux_persist , magic ui and shadcn ui project template</h1>
            <div className='mt-5 text-center'>
                <p className="text-2xl font-semibold">Hello {userData?.developerName} 👋,</p>
                <p className='text-xl'>You are using {userData?.techStack?.join(' , ')}</p>
                <Link to="/about" className='text-xl'>About this app</Link>
            </div>
        </div>
    )
}

export default Home