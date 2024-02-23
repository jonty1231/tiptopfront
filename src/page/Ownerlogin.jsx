import React, {  useState } from 'react'
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import {toast } from 'react-toastify';

const Ownerlogin = () => {
const [showpassword,setshowpassword]=useState(true)
const [email,setemail]=useState('');
const [password,setpassword]=useState('')
const navgate=useNavigate();

  const loginhandel=async(e)=>{
    e.preventDefault();
    try {
      const user=await axios.post(' http://localhost:8080/owner',{email,password})
     
      if(user.data.success){
        toast.success('Login Success')
      
       
    navgate('/owner/offical')
      }
    
    } catch (error) {
      toast.error('enter valid data')
    
    }
  }

  return (
   <>
    <div className='bluree bg-blue-500 w-[100vw] h-[100vh] flex justify-center items-center sm:bg-black text-white'>
   <form action="" className=' w-[30%] h-[50%] text-center sm:w-[100%] bg-black' onSubmit={loginhandel}>
<h2 className='tracking-[1rem] text-4xl googlefont'>TIPTOP</h2>
<div className='mt-6'>
 <div className='text-left ml-8 '>
    <label htmlFor="email" className='block text-2xl'>Enter Email :</label>
    <input type="text" name="" id="email" className='border-black border-2 rounded-[10px] w-[70%] text-black' placeholder='Email...' 
    value={email} onChange={(i)=>setemail(i.target.value)}/>
 </div>
 <div className='text-left ml-8 mt-2 relative'>
    <label htmlFor="password" className='block text-2xl'>Enter Password :</label>
    <input type={`${showpassword?"password":"text"}`} name="" id="password" className='border-black border-2 rounded-[10px] w-[70%]   text-black'
     placeholder='Password...' value={password} onChange={(i)=>setpassword(i.target.value)} />
    <i className={`fa-sharp fa-solid ${showpassword?"fa-eye-slash":"fa-eye"}  text-black absolute bottom-[6px] right-[7.3rem] `} 
    onClick={()=>setshowpassword(!showpassword)}></i>
 </div>
 <button className='text-2xl bg-blue-700 text-white px-2 py-1 rounded-[10px] mt-3' type='submit'>Login</button>
 </div>
   </form>



    </div> 
    </>
  )
}

export default Ownerlogin