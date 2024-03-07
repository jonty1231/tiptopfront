import { NavLink } from "react-router-dom";
import { GiArmoredPants } from "react-icons/gi";
import { GiConverseShoe } from "react-icons/gi";
import { IoMdHome } from "react-icons/io";
import { useEffect, useState } from "react";
import axios from "axios";
import { IoMdLogIn } from "react-icons/io";
import { TiShoppingCart } from "react-icons/ti";
import { PORT } from "../App";


export const Header=()=>{
   const[user,setuser]=useState(false)
   const varifyuser=async()=>{
      const res=await axios.get(`${PORT}/user/logedin`,{
         withCredentials:true
      })
       setuser(res.data.success)}
       
       const logouthandel=async()=>{
try {
    await axios.get(`${PORT}/user/logoutuser`)
    location.reload()
} catch (error) {
   
}
       }
     
   useEffect(()=>{
      varifyuser()
   },[])
 const fss=" text-4xl fa-sharp fa-solid fa-flip  "


  return( <div className="blure w-screen">
 <div className="w-[100vw] text-center h-[10vh]  justify-around    pt-3 flex">  
<span className={`${fss} fa-t text-red-700 googlefont`}></span>
<span className={`${fss} fa-i text-blue-700 googlefont`}></span>
<span className={`${fss} fa-p text-green-700 googlefont`}></span>
<span className={`${fss} fa-t text-pink-700 googlefont `}></span>
<span className={`${fss} fa-o text-orange-700 googlefont`}></span>
<span className={`${fss} fa-p text-yellow-700 googlefont  `}></span>
</div>


<div  className=" w-[100vw]  text-3xl  flex py-2 sm:block sm:text-[1rem] lg:flex-row-reverse  ">
<div className="mt-1  relative sm:w-[100vw] lg:mr-4 flex"> <input type="text" placeholder="search...." id="search"
 className="rounded-[20px] sm:w-[100%] p-1"  /> 
 {user && <button className='p-1 bg-black text-white rounded-[20px] flex sm:rounded-[5px] ' onClick={logouthandel}> Logout<IoMdHome className="m-1 sm:mt-[0.8rem] sm:m-[0px] " /></button>}
 <label htmlFor="search" className={`fa-solid fa-magnifying-glass absolute top-2 ${user?'right-[9rem] sm:right-[5.3rem] sm:top-3 ':'right-3 '}`}></label>

  </div>
     
     
     <div className=" flex justify-around sm:mt-2 w-[80vw] sm:w-[100vw]">
     <NavLink to='/'  style={({ isActive })=>({background: isActive ? 'white' : 'black',color:isActive?'black':'white'})} 
     className='p-1   rounded-[20px] flex sm:rounded-[5px]  '>Home <IoMdHome className="m-1 sm:mt-[0.8rem] sm:m-[0px] " /></NavLink>



    <NavLink to='/top'  style={({ isActive })=>({background: isActive ? 'white' : 'black',color:isActive?'black':'white'})} 
    className='p-1 pt-2  rounded-[20px]' >Top <i className="fa-solid   fa-sharp   fa-shirt"></i></NavLink>
   
   
    <NavLink to='/lower' style={({ isActive })=>({background: isActive ? 'white' : 'black',color:isActive?'black':'white'})} 
    className='p-1  rounded-[20px] flex ' > Lower <GiArmoredPants className="m-1 sm:mt-[0.8rem] sm:m-[0px] " /></NavLink>
  
    <NavLink to='/shoes' style={({ isActive })=>({background: isActive ? 'white' : 'black',color:isActive?'black':'white'})}
     className='p-1  rounded-[20px] flex ' >Shoes <GiConverseShoe className="m-1 sm:mt-[0.8rem] sm:m-[0px] " /></NavLink>

    {!user && <NavLink to='/login' className='p-1 bg-black text-white rounded-[20px] flex  ' >Login <IoMdLogIn className="m-1 sm:mt-[0.8rem] sm:m-[0px] " /></NavLink>}
     {user &&   <NavLink to='/user/cart'  className='p-1 bg-black text-white rounded-[20px] flex  ' >Cart <TiShoppingCart className="m-1 sm:mt-[0.8rem] sm:m-[0px] " /></NavLink>}
     </div>
     
  
  
  
  </div>


</div>
)
}
