import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {toast } from 'react-toastify';

import axios from "axios"
import { PORT } from '../App';


const Userregister = () => {
    const [otp,setotp]=useState("")
    const [sendotp,setsendotp]=useState(false)
    const [verifyotp,setverifyotp]=useState(false)
  const [showpassword,setshowpassword]=useState(false);

const [name,setname]=useState('')
const [email,setemail]=useState('')
const [password,setpassword]=useState('');
const navigation =useNavigate()

const sendotpp=async(e)=>{
e.preventDefault()
    try {
       const response=await axios.post(`${PORT}/user/sentotp`,{email})
       if(response.data.success){
        toast.success(response.data.message)
        setsendotp(response.data.success)
       }
        else{
        toast.error(response.data.message)
        }
    } catch (error) {
        
    }
}

const verifyotpp=async(e)=>{
    e.preventDefault()
try {
    const response=await axios.post(`${PORT}/user/checkotp`,{otp,email})
    if(response.data.success){
        toast.success(response.data.message)
        setverifyotp(response.data.success)
       }
        else{
        toast.error(response.data.message)
        }
} catch (error) {
    
}

}
const registerhandel=async(e)=>{
    e.preventDefault();
    try {
        if(name && email && password){
            const res =await axios.post(`${PORT}/user/register`,{name,email,password})
            if(res.data.success){
                toast.success('Register Successfull')

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
        
 <form className='shadow-2xl p-4 bg-white sm:w-[100%] sm:h-[100%] sm:pt-[10rem] min-h-[80%]' onSubmit={registerhandel}>
       <h2 className='text-center text-3xl text-blue-500 sm:m-4'>❰T❱ ❰I❱ ❰P❱ ❰T❱ ❰O❱ ❰P❱</h2>

      {!verifyotp && <><div className='m-2 text-2xl'>
            <label htmlFor="email" className='block'>Email:</label>
            <input type="text" placeholder='Enter Email ..' id='email' className='border-2 border-black rounded-[10px] px-2 m-1 pr-6'  value={email} onChange={(i)=>setemail(i.target.value)}/>
        </div>
        {!sendotp && <button className='bg-blue-700 w-[100%] text-center text-white rounded-md' onClick={sendotpp}>Send otp</button>}

       {sendotp && <> <div className='m-2 text-2xl'>
            <label htmlFor="otp" className='block'>OTP:</label>
            <input type="text" placeholder='OTP ..' id='otp' className='border-2 border-black rounded-[10px] px-2 m-1'  value={otp} onChange={(i)=>setotp(i.target.value)}/>
        </div>
        <button className='bg-blue-700 w-[100%] text-center text-white rounded-md' onClick={verifyotpp}>Verify otp</button> </>}
         </> }

  {verifyotp &&   <>  <div className='m-2 text-2xl'>
            <label htmlFor="email" className='block'>Email:</label>
            <input type="text" placeholder='Enter Email ..' id='email' className='border-2 border-black rounded-[10px] px-2 m-1 pr-6'  value={email} onChange={(i)=>setemail(i.target.value)} readOnly/>
        </div>

     <div className='m-2 text-2xl'>
            <label htmlFor="name" className='block'>Name:</label>
            <input type="text" placeholder='Enter Full Name ...' id='name' className='border-2 border-black rounded-[10px] px-2 m-1'  value={name} onChange={(i)=>setname(i.target.value)}/>
        </div>
       
        <div  className='m-2 text-2xl relative'>
            <label htmlFor="password" className='block'>Password:</label>
            <input type={`${showpassword?"text":"password"}`} placeholder='Enter Password..' id='password'  className='border-2 border-black rounded-[10px] px-2 m-1' value={password} onChange={(i)=>setpassword(i.target.value)}/>
            <i className={`fa-solid ${showpassword?"fa-eye":"fa-eye-slash"} absolute right-1 bottom-3 text-[1.3rem] cursor-pointer`} onClick={()=>setshowpassword(!showpassword)}></i>
        </div>
        <div className='ml-7'><button className='w-[70%] m-4 text-white bg-blue-700 text-xl p-1 rounded-[10px]' type='submit'>Login</button></div>
        <div className='flex justify-between text-blue-700 sm:text-[1.2rem]'> <Link to='/login'>Allready Have a Account?</Link>
        
        </div>
</>}
    </form> 
    </div>
  )
}

export default Userregister

