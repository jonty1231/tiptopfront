 import {Link} from 'react-router-dom';


 export default function Footer(){
    return(
        <div className="w-[100vw]  blure ">
            <div className="flex justify-center text-white text-4xl"><p>address</p></div>


            <div className="text-[3rem] flex justify-around text-white fa-fade" >
                <a href="https://instagram.com/tiptopfashion.in?igshid=OGQ5ZDc2ODk2ZA==" 
                className="fa-brands fa-instagram text-red-700" target="_blank"></a>

                <a href="mailto:mailto:kapil.kcb@gmail.com" className="fa-sharp fa-regular fa-envelope  text-yellow-700"></a>

                <a href="tel:+918679222889"   className="fa-sharp fa-solid fa-phone text-blue-700 "></a>

                <a href="https://wa.link/9jxfn1"  target="_blank" className="fa-brands fa-whatsapp text-green-700 "></a>

                <Link to="/location" className="fa-sharp fa-solid fa-location-dot"></Link>
            </div>
            <div className='flex text-black mt-4 justify-around'>
                <p className='w-[15%] sm:w-[30%]'> This website only for watching clothes of tiptopstyle shop </p><div className='line'></div>
                <p className='w-[15%] sm:w-[30%]'>only female clothes are available in this website and also in the tiptop shop </p><div className='line'></div>

                <p className='w-[15%] sm:w-[30%]'>If you want to buy clothes , then contect us by using Contect-number, Instagram,
                What'sapp and Gmail</p>

            </div>
            <div className='text-4xl flex justify-around m-2 sm:block'>
           <div> <Link to='/owner' className='text-blue-500 googlefont' >Only for Owner<i className="fa-solid fa-right-to-bracket ml-4 "></i> </Link></div>
           <div> <a href="mailto:cocount001@gmail.com" className='googlefont text-blue-600 uppercase font-bold sm:font-normal'
         >web  creater  Mail  <i className='fa-sharp fa-regular fa-envelope'></i></a></div>
            </div>
<div  className='text-white flex justify-center '> <p>copyright © 2019 </p> </div>
        </div>
    )
 }