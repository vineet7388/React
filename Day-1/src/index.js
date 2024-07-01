import React,{lazy,Suspense, useEffect, useState} from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Body from './components/Body'
import About from './components/About'
import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom'
import Contact from './components/Contact'
import Error from './components/Error'
import UserContext from './utils/userContext'
import {Provider} from 'react-redux'
import appStore from './utils/appStore'
import Cart from './components/Cart'

const RestaurantMenu = lazy(()=>import('./components/RestaurantMenu'))

const AppLayout = () => {
    const [userName,setUserName] = useState("")
    //authentication
    useEffect(()=>{
        // call service to get user data
        const data = {
            name:"Vineet"
        }
        setUserName(data.name)
    },[])
    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
        <div className='app'>
            <Header/>
            <Outlet/>
        </div>
        </UserContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: < Body/>
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/cart',
                element:<Cart/>
            },
            {
                path: '/restaurant/:resId',
                element:(<Suspense><RestaurantMenu/></Suspense>)
            }
        ],
        errorElement: <Error />
    }
])


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)