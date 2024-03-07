import React, { useState }  from 'react'
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import {toast } from 'react-toastify';
import { PORT } from '../App';


const Userlogin = () => {
  const navigation =useNavigate()
  const [email,setemail]=useState('');
  const [password,setpassword]=useState('');

const submithandel=async(e)=>{
  e.preventDefault()
  try {
    if(email && password){ 
    const res= await axios.post(`${PORT}/user/login`,{email,password})
      
       if(res.data.success){
   toast.success('Login Success')

   navigation("/")
       }
      }
  } catch (error) {
    toast.error('enter valid data')
    
  }
}

    return (
    <div className='flex justify-center h-[100vh] items-center bg-gray-300 shadow-black sm:items-start sm:justify-normal'>
<form className='shadow-2xl p-4 bg-white sm:w-[100%] sm:h-[100%] sm:pt-[10rem]' onSubmit={submithandel}>
   <h2 className='text-center text-3xl text-blue-500 sm:m-4'>❰T❱ ❰I❱ ❰P❱ ❰T❱ ❰O❱ ❰P❱</h2>
    <div className='m-2 text-2xl'>
        <label htmlFor="email" className='block'>Email:</label>
        <input type="text" placeholder='Enter Email ..' id='email' className='border-2 border-black rounded-[10px] px-2 m-1'  value={email} onChange={(i)=>setemail(i.target.value)}/>
    </div>
    <div  className='m-2 text-2xl'>
        <label htmlFor="password" className='block'>Password:</label>
        <input type="text" placeholder='Enter Password..' id='password'  className='border-2 border-black rounded-[10px] px-2 m-1' value={password} onChange={(i)=>setpassword(i.target.value)}/>
    </div>
    <div className='ml-7'><button className='w-[70%] m-4 text-white bg-blue-700 text-xl p-1 rounded-[10px]' type='submit'>Login</button></div>
    <div className='flex justify-between text-blue-700 sm:text-[1.2rem]'><Link>Forgot Password?</Link> <Link to='/user/register'>Don't Have a Account?</Link></div>
</form>


    </div>
  )
}

export default Userlogin