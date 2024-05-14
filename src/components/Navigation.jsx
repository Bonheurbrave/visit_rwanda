import React, { useState } from 'react'
import visit_rwanda_logo from '../images/visit_rwanda_logo.png'
import axios from 'axios'
import { AiOutlineMenu } from 'react-icons/ai'
import { MdClose } from 'react-icons/md'
function Navigation() {
  const [menu , setmenu] = useState(false)
  const handleshowmenu = ()=>{
    setmenu(!menu)
  }
  const handlehidemenu = ()=>{
    setmenu(!menu)
  }
  return (
    <>
    <div className='hidden max-sm:block'>
      <h1 className=' px-2 pt-4'>
     <AiOutlineMenu onClick={handleshowmenu} size={30} className=' text-white'/>
      </h1>
      {
        menu && 
        <div className=' fixed w-screen text-center py-16 h-screen px-5 bg-black top-0 bottom-0 ease-in-out duration-1000'>
          <MdClose className=' float-right text-white' size={34} onClick={handlehidemenu}/>
          <h1 className=' text-white py-5 hover:animate-bounce ease-in-out duration-300 hover:border-b-2 border-b-slate-400'>Events</h1>
          <h1 className=' text-white py-5 hover:animate-bounce ease-in-out duration-300 hover:border-b-2 border-b-slate-400'>Trips</h1>
          <h1 className=' text-white py-5 hover:animate-bounce ease-in-out duration-300 hover:border-b-2 border-b-slate-400'>Insights</h1>
          <h1 className=' text-white py-5 hover:animate-bounce ease-in-out duration-300 hover:border-b-2 border-b-slate-400'>Gallery</h1>
          <h1 className=' text-white py-5 hover:animate-bounce ease-in-out duration-300 hover:border-b-2 border-b-slate-400'>Reviews</h1>
          <h1 className=' text-white py-5 hover:animate-bounce ease-in-out duration-300 hover:border-b-2 border-b-slate-400'>Partners</h1>
        </div>
      }
    </div>
    <div  className=' max-sm:hidden fixed w-screen tran'>
      
      <div className=' flex justify-between px-5 py-8 bg-transparent text-slate-500'>
          <h1>
            <span className=' lg-span animate-pulse text-slate-300'>Visit - Rwanda </span>
      
          </h1>
      
          <div className=' flex justify-between  w-1/2 text-slate-100 font cursor-pointer' style={{fontFamily:"ubuntu "}}>
            <h1 className=' hover:animate-bounce hover:text-lime-500 ease-in-out duration-300 '>Events  </h1>
            <h1 className=' hover:animate-bounce hover:text-lime-500 ease-in-out duration-300 '>Trips </h1>
            <h1 className=' hover:animate-bounce hover:text-lime-500 ease-in-out duration-300 '>Insights </h1>
            <h1 className=' hover:animate-bounce hover:text-lime-500 ease-in-out duration-300 '>Gallery  </h1>
            <h1 className=' hover:animate-bounce hover:text-lime-500 ease-in-out duration-300 '>Reviews</h1>
            <h1 className=' hover:animate-bounce hover:text-lime-500 ease-in-out duration-300 '>Partners</h1>
          </div>
      </div>
    </div>
    </>
  )
}

export default Navigation