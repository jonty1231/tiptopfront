// import React, { useEffect, useState } from 'react'

import { useEffect, useState } from 'react'
import Addproduct from '../components/Addproduct'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Showproduct from '../components/Showproduct';
import { PORT } from '../App';
axios.defaults.withCredentials=true;



const Offical = () => {
 const navigation =useNavigate()

  const [udata,setdata]=useState(false)


const sendrequest =async()=>{


  const res= await axios.get(`${PORT}/getuser`,{
    withCredentials:true,
  })
  if(res.data.success){ setdata(true)}
  else{ setdata(false)}
}
useEffect(()=>{
sendrequest()
},[])


 const handellogout =async()=>{
  const res=await axios.get(`${PORT}/logout`);
      if(res.data.success){navigation("/owner")}
 }


  return (
    <div>
      {!udata && <div>error</div>}
      {udata && <><Addproduct />
           <button onClick={handellogout} className='bg-blue-700 text-white px-2'>logout</button> 
           <Showproduct /> </>
      }
</div>
  )
}

export default Offical