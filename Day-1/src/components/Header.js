import {LOGO_URL} from './../utils/constants'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../utils/userContext'
import { useSelector } from 'react-redux'
import React from 'react'

const Header = () => {
    const [btnName,setBtnName] = useState('Login')
    const data = useContext(UserContext)

    // subscribing to store using a selector
    const cartItems = useSelector(
        (store)=>store.cart.items
    )

    return (
        <div className='flex justify-between align-middle bg-amber-200 shadow-lg mb-2 sm:bg-red-200'>
            <div className='logo-container'>
                <img className='w-32' src={LOGO_URL}></img>
            </div>
            <div className='flex items-center'>
                <ul className='flex p-4 m-4'>
                    <li className='px-3 hover:font-bold'>
                    <Link to="./">Home</Link>
                    </li>
                    <li className='px-3 hover:font-bold'>
                        <Link to="./contact">Contact Us</Link>
                    </li>
                    <li className='px-3 hover:font-bold'>
                        <Link to="./about">About Us</Link>
                    </li>

                    <li className='px-3 hover:font-bold font-bold '>
                        <Link to="./cart">Cart - ({cartItems.length})</Link>
                    </li>
                    <button className='login-btn px-3 hover:font-bold' onClick={()=>{btnName==='Login'? setBtnName('Logout') : setBtnName('Login')}}
                    >{btnName}
                    </button>
                    <li className='px-3 hover:font-bold'>{data.loggedInUser}</li>

                </ul>
            </div>
        </div>
    )
}

export default Header