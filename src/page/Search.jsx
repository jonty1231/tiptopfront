import { BsOctagonFill } from "react-icons/bs";
import axios from 'axios';
import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import {toast } from 'react-toastify';
import { PORT } from "../App";



export default function Search(){
    const [product,setproduct]=useState([])

const homeproduct=async ()=>{
    const res= await axios.get(`${PORT}/product`,{
        withCredentials:true
    })
   
    setproduct(res.data.allproduct)

}

useEffect(()=>{
homeproduct();
},[])



    return(
        <div className='  grid grid-cols-8 gap-6 sm:grid-cols-2 justify-around m-4'>
         {product && product.map((i)=><List j={i} key={i._id}/> )}
        </div>
    )

}

const List=({j})=>{
    const navigator= useNavigate()
const [user,setuser]=useState(false)
    const varifyuser=async()=>{
        const res=await axios.get(`${PORT}/user/logedin`,{
           withCredentials:true
        })
         setuser(res.data.success)}
      useEffect(()=>{
        varifyuser()
      },[])  
      
      const addtocart=async(id)=>{
        const res=await axios.get(`${PORT}/user/addcart/${id}`) 
       toast.success(res.data.message)
    }
    
      const notuser=()=>{
        navigator("/login")
      }
    return(
       
            <div className='shadow-2xl h-[13rem] bg-white rounded-[10px] relative ' >
           <img src={j.photo.url} alt={j.name} className='w-[100%] h-[60%]'  />
           <div className='flex justify-between relative'>
           <div> <p className=''>{j.name}</p></div> 
          <div>
          <span  className=''>₹{j.price}.00</span>
             <s className='block absolute right-[1px]  '>₹{j.oldprice}</s>
            </div>
            </div>
            <div >
          
                <BsOctagonFill   className="absolute top-1 right-1 text-[2rem] text-green-700" />

            
                <span className="absolute top-2 right-1 text-yellow-400">{Math.floor(((j.oldprice-j.price)/j.oldprice)*100)}
                % </span>
                  

            </div>
                 <button className="bg-red-800 absolute bottom-0 px-3 " onClick={()=>user?addtocart(j._id):notuser}>Add To Cart</button>
            </div>
            
     
    )
    }