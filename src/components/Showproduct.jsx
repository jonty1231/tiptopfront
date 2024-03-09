import React, { useEffect, useState,} from 'react'

import axios from "axios";
import { MdDeleteForever } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";
import {toast } from 'react-toastify';
import { PORT } from '../App';

const Showproduct = () => {
  
 const [productdata,setproductdata]=useState([]);
const showproduct=async()=>{
    const res=await axios.get(`${PORT}/getproduct`,{
        withCredentials:true
    })
   
  setproductdata(res.data)
}


    useEffect(()=>{
showproduct()
    },[])
  return (
    <div className='  grid grid-cols-8 gap-6 sm:grid-cols-2 justify-around m-4'>

        {productdata.map((i)=><List j={i} key={i._id}  />)}
    </div>
  )
}



const List=({j})=>{

  const deleteproduct=async(id)=>{

 try {
  const res=  await axios.delete(`${PORT}/getuser/${id}`)
    toast.success(res.data.message)
    
 } catch (error) {
  toast.error(error)
 }
     
 
 }
   
return(
   
        <div className='shadow-2xl h-[12rem] rounded-[10px] relative  bg-white' >
       <img src={j.photo.url} alt={j.name} className='w-[100%] h-[60%]'  />
       <div className='flex justify-between relative'>
       <div> <p className=''>{j.name}</p></div> 
      <div>
      <span  className=''>₹{j.price}.00</span>
         <s className='block absolute right-[1px]  '>₹{j.oldprice}</s>
        </div>
        </div>
        <MdDeleteForever className='absolute top-[1px] right-[1px] text-2xl text-red-600 cursor-pointer	'  onClick={()=>deleteproduct(j._id)} />
        <MdEditSquare  className='absolute top-[1px] left-[1px] text-2xl text-green-600'/>
        </div>
        
 
)
}



export default Showproduct