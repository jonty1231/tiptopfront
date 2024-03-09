import React, { useState } from 'react'
import axios from "axios"
import { PORT } from '../App'
import { useNavigate } from 'react-router-dom'
// import { toast } from 'react-toastify'

const Addproduct = () => {
  const [name,setname]=useState('')
  const [oldprice,setoldprice]=useState("")
  const [price,setprice]=useState('')
  const [category,setcategory]=useState("top")
  const [other,setother]=useState("")
  const [photo,setphoto]=useState('')

 const navigation=useNavigate()
  const addhandel=async(e)=>{
    e.preventDefault();
  

    const data= new FormData();
    data.append("file",photo)
    data.append("name",name)
    data.append("oldprice",parseInt(oldprice))
    data.append("price", parseInt(price))
    data.append("other",other)
    data.append("category",category)
  
    //  file.append("upload_preset",'image_preset')

    const res= await axios.post(`${PORT}/product`,data)         
      // withCredentials:true)
navigation("/owner/offical")
    // 
  
  }




  return (
  
   
    <form  onSubmit={addhandel} >
<h2 className='sm:text-center text-3xl'>Add Product</h2>
<div className='flex  gap-4 sm:block sm:ml-8'>
   <div className=''>
      <label htmlFor="pname" className='block'>Name:</label>  
           <input type="text" name="" id="pname"  className='border-black border-2 sm:w-[90%] ' placeholder='Name...' required value={name} onChange={i=>setname(i.target.value)}  />
   </div>
   <div >
   <label htmlFor="old price"  className='block'>Old price:</label>
   <input type="number" id='old price' placeholder='enter old Price..' className='border-black border-2 sm:w-[90%]' required value={oldprice} onChange={i=>setoldprice(i.target.value)} />
   </div>
   <div>
   <label htmlFor=" current price" className='block'>Current price:</label>
   <input type="number" id='current price' placeholder='enter current Price..' className='border-black border-2 sm:w-[90%]' required value={price} onChange={i =>setprice(i.target.value)}/>
   </div>
   <div>
   <label htmlFor="category" className='block'  >Category:</label> 
  <select name="" id="category" className='border-black border-2 '  value={category} onChange={i=>setcategory(i.target.value)}>
    <option value="top" >Top</option>
      <option value="lower">Lower</option>
     <option value="shoes">Shoes</option>
     <option value="others">Others</option>
   </select></div>
   <div>
     <label htmlFor="otherinfo" className='block'  >Other Information:</label>
     <textarea type="text" name="" id="otherinfo"  className='border-black border-2 sm:w-[90%]' placeholder='other info..' value={other} onChange={i=>setother(i.target.value)}/>
   </div>
  <div>
<label htmlFor="img" className={` ${photo?'text-green-700':""} fa-sharp fa-solid fa-file-image text-6xl `}></label>
<input type="file" name="" id="img" className='hidden' required  onChange={(i)=>setphoto(i.target.files[0])}/>

</div>
<button type="submit" className='text-white bg-blue-700 px-6 rounded-[20px] sm:w-[90%] sm:text-xl' >  ADD</button>
</div>
    </form>
  )
}
export default Addproduct