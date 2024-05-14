import React, { useState } from 'react'
import { MdOutlineEmail, MdOutlineMail } from "react-icons/md";
import { Link } from 'react-router-dom'
import { AiOutlineFacebook , AiOutlineYoutube , AiOutlineInstagram } from 'react-icons/ai';
import { FaXTwitter } from 'react-icons/fa6';
// import axios from 'axios';
function Footer() {
  const [formdata , setformdata] = useState({
    email:""
  })
  const handlechange = (e)=>{
    setformdata({...formdata , [e.target.name]:e.target.value});
    
  }
  const handlesubmit = ()=>{
    // axios.post("http://localhost:4000/desc" , formdata)
    
  }
  return (
    <>
    <div className=' bg-slate-800 text-white py-14 px-5'>
            <h1 className=' font-extrabold'>Visit - Rwanda</h1>
        <div className=' flex justify-between max-sm:grid max-sm:grid-cols-2 px-2'>
            <div>
                <h1 className=' font-semibold pt-4 pb-2'>Important Links</h1>
                <Link className=' block text-xs hover:underline hover:text-green-500'>Events</Link>
                <Link className=' block text-xs hover:underline hover:text-green-500'>Trips</Link>
                <Link className=' block text-xs hover:underline hover:text-green-500'>Insights</Link>
                <Link className=' block text-xs hover:underline hover:text-green-500'>Gallery</Link>
                <Link className=' block text-xs hover:underline hover:text-green-500'>Reviews</Link>
                <Link className=' block text-xs hover:underline hover:text-green-500'>Partners</Link>
            </div>
            <div className=' py-4'>
                <h1 className=' font-semibold'>Best Places to visit</h1>
                <Link className=' block text-xs hover:underline hover:text-green-500'>Nyungwe National forest</Link>
                <Link className=' block text-xs hover:underline hover:text-green-500'>Akagera National Park</Link>
                <Link className=' block text-xs hover:underline hover:text-green-500'>Volcanoes park </Link>
                <Link className=' block text-xs hover:underline hover:text-green-500'>Gallery</Link>
                <Link className=' block text-xs hover:underline hover:text-green-500'>Reviews</Link>
                <Link className=' block text-xs hover:underline hover:text-green-500'>Partners</Link>

            </div>
            <div className=' py-4'>
              <h1 className='font-semibold'>FAQ</h1>
                <Link className=' block text-xs hover:underline hover:text-green-500'>contact the tour</Link>
                <Link className=' block text-xs hover:underline hover:text-green-500'>Apply as Tour-guide</Link>
                <Link className=' block text-xs hover:underline hover:text-green-500'>Book tour ticket</Link>
                <Link className=' block text-xs hover:underline hover:text-green-500'>Help?</Link>
            </div>
            <div className=' pt-10'>
              <h1 className=' font-semibold mb-2'>Subscribe</h1>
              <div className='flex rounded-sm border-2 px-2 border-slate-400 w-full bg-white'>     
                <MdOutlineMail className=' text-slate-500' size={25}/>
                <input name='email' value={formdata.email} onChange={handlechange} type="email" required className=' outline-none  text-black px-3'/>
              </div>
              <button onClick={handlesubmit} className=' w-full bg-green-500 px-2 text-black hover:bg-green-400 mt-2 rounded-sm'>Subscribe</button>
            </div>
        </div>
        <div className=' w-1/5 flex justify-between max-sm:w-3/4 py-5'>
          <Link>
          <AiOutlineFacebook  size={30} className=' hover:cursor-pointer text-blue-400'/>
          </Link>
          <Link>
          <AiOutlineInstagram size={30} className=' hover:cursor-pointer' style={{color:"rgb(225 ,48 ,108)"}}/>
          </Link>
          <Link>
          <AiOutlineYoutube size={30} className=' hover:cursor-pointer text-red-500'/>
          </Link>
          <Link>
          <FaXTwitter size={30} className=' hover:cursor-pointer text-white'/>
          </Link>
        </div>
    </div>
    </>
  )
}

export default Footer