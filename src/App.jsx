import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import { Home } from './page/Home'
import Top from './page/Top'
import Lower from './page/Lower'
import Shoes from './page/Shoes'
import Search from './page/Search'
import Ownerlogin from './page/Ownerlogin'
  

import './App.css'
import Offical from './page/Offical'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Userlogin from './page/Userlogin'
import Userregister from './page/Userregister'
import UserCart from './page/UserCart'
import Map from './page/Map'


export const PORT ='https://tiptopback-1.onrender.com' ;

const route=createBrowserRouter([
  {
    path:'/',
    element:<Home />,
    children:[
      {path:'/',
       element :<Search />

      },
      {path:'/top',
      element:<Top />
    },
    {
      path:'/lower',
      element :<Lower />
    },
    {
      path:'/shoes',
      element:<Shoes />
    },
    {
      path:"/user/cart",
      element: <UserCart />
    }
  ]},
    {
      path:'/owner',
      element:<Ownerlogin />
    },
        {
          path:'/owner/offical',
          element:<Offical />
        },
      
     {
      path:"/login",
      element: <Userlogin />
     },
     {
      path:'/user/register',
      element : <Userregister />
     },
     {
      path:"/location",
      element:<Map />
     }

   

])


function App() {
  

  return (<>
 
    <RouterProvider  router={route}/>
    <ToastContainer position="top-center"
    autoClose={1000}
    limit={2} 
    theme="dark"
 />

  </>
  )
}

export default App
