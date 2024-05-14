import React from 'react'
import images from '../images/images.png'
import lakekivu from '../images/lakekivu_image.png'
import lion from '../images/lion_image.png'
import radisonhotel from '../images/radisonhotel_image.png'
import { Link } from 'react-router-dom'
import canopy from '../images/canopy.png'
import monkey from '../images/monkey.png'
import lakekivuhote from '../images/lakekivuhotel.png'
import nyungweforest from '../images/nyungweforestimage.png'
import kigalicommercialzone from '../images/kigalicommercialzone.png'
import lakekivuislands from '../images/lakekivuisland.png'
import gorrilamountains from '../images/gorrilamountains.png'
import convention from '../images/conventioncenter_image.png'
import giraffe from '../images/giraffe.png'
import elephant from '../images/elephant.png'
import gorilla from '../images/gorrila.png'
import musanzehotel from '../images/musanzehotel.png'
import { FaCaretDown } from 'react-icons/fa'

function Trips() {

  const tripareas = [
    {
      id:1,
      place:"Virunga Mountains",
      img1: gorrilamountains,
      img2:musanzehotel,
      img3:gorilla,
      link:"https://www.volcanoesnationalparkrwanda.com/the-virunga-mountains/"

    }
    ,

    { 
      id:2  ,
      place:" Lake kivu ",
      img1: lakekivu,
      img2:lakekivuhote,
      img3:lakekivuislands,
      link:"https://visitrwanda.com/destinations/lake-kivu/"
    }
    ,
    {
      id:3,
      place:"Kigali city - Meeting Halls",
      img1:convention,
      img2:radisonhotel, 
      img3:kigalicommercialzone, 
      link:"https://www.kigalicity.gov.rw/"
    }
    ,

    {
      id:4 ,
      place:" Akagera National park ",
      img1:lion,
      img2:giraffe,
      img3:elephant,
      link:"https://www.akageranationalpark.org/"
      
    }
    ,
    {
      id:5,
      place:"Nyungwe National Forest",
      img1:canopy,
      img2:monkey,
      img3:nyungweforest,
      link:"https://nyungwenationalforest.org/"
    }
  ]
  return (
    <>
     <div className=' flex justify-between'>
     <h1 className=" flex text-2xl font-bold">Trips <span className=" pt-2"><FaCaretDown size={24}/></span></h1>
     <Link className=' px-10 font-semibold hover:bg-blue-300 border-2 border-blue-300 bg-transparent ease-in-out duration-300 rounded-md'>Book for Tickets</Link>
     </div>

     <div>

      {
        tripareas.map((area)=>{
          return (
            <div className=' py-7'>
              <h1 className=' font-bold text-xl'>{area.place}</h1>
              <div className=' flex justify-between'>
                <img src={area.img1} alt="no internet connection "  className=' w-1/4' width={400}/>
                <img src={area.img2} alt="no internet connection "  className=' w-1/4' width={400}/>
                <img src={area.img3} alt="no internet connection "  className=' w-1/4' width={400}/>
                 <Link to={area.link}>
                 <button className=' block font-semibold'>explore more <span><FaCaretDown size={33} className=' hover:animate-bounce mx-auto'/></span></button>
                 </Link>
              </div>
            </div>
          )
        })
      }

     </div>
    </>
  )
}

export default Trips