import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { IoCartOutline } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
import {toast } from 'react-toastify';
import { PORT } from '../App';



const UserCart = () => {
const [cart,setcart]=useState(null);
    const [price,setprice]=useState([])

const carthandel=async()=>{
  try {
    const res=await axios.get(`${PORT}/user/getcart`)
    res.data.cartproduct.length==0?"":setcart(res.data.cartproduct)

setprice(res.data.cartproduct.map((i)=>{return i.price}))

  } catch (error) {
      
  }}
useEffect(()=>{
  carthandel()
},[])


  return (
  <>
  {!cart && <div className='flex h-screen justify-center items-center'>
      <div className='relative'>
      <IoCartOutline className='text-[20rem]' /> 
      <span className='absolute text-4xl top-[6.5rem] left-[7.9rem]'>Empty!</span>
      </div>
  </div> }
 { cart &&  <div className='  h-screen m-2'> 
    <div className='flex justify-around'> <span className='bg-gray-400 text-red-700 text-xl py-2 px-4 rounded-2xl'>Items : {cart.length}</span> 
<span className='bg-red-400 text-green-700  py-2 px-4 rounded-2xl text-xl'>Total price : ₹
   {price.reduce((a,b)=>a+b)}/-
    </span>  
    </div>
   {cart.map((items,index)=><List items={items} index={index} key={items._id}/>)}
  </div>}
  </>
 
  )
}

const List=({items,index})=>{
const deletitem= async()=>{
  try {
     const result= await axios.delete(`${PORT}/user//deletcart/${items._id}`)
     if(result.data.success){
      toast.success(result.data.message)
     
     }
  } catch (error) {
    
  }
}

  return(
  <div className='w-[100%] bg-green-400 p-1 mt-4 rounded-lg flex justify-between items-center'>
 <div className='flex items-center'> <span className='text-2xl m-2'>({index+1})</span><img src={items.photo.url} alt=""  className='h-[5rem] rounded-[30%]'/>
 </div>
<span className='text-3xl sm:text-2xl'>{items.name}</span>
 <span className='text-3xl sm:text-2xl'> ₹{items.price}/-
 </span>
<MdDeleteForever  className='text-5xl text-red-800 cursor-pointer' onClick={deletitem}/>
  </div>
  )
}


export default UserCart