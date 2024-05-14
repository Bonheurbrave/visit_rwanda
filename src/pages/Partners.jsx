import React from "react";
import { FaCaretDown } from "react-icons/fa";
import ballogo from '../images/ballogo.png'
import trdlogo from '../images/trdlogo.png'
import arsenal from '../images/arsenal.png'
import psg from '../images/psg.png'
import arsenalteam from '../images/visit_rwanda_arsenalimage.png'
import tourd from '../images/trd_visit_rwanda.png'
import psgteam from '../images/psg_visit_rwanda.png'
import bayernteam from '../images/bayern_munich_visit_rwanda.png'
function Partners() {
  const partners = [
    {
      id:1,
      name:"Arsenal ",
      img:arsenalteam,
    },
    {
      id:2,
      name:"Tour Du Rwanda ",
      img:tourd,
    },
    {
      id:3,
      name:"Paris St Germain ",
      img:psgteam,
    },
    {
      id:4,
      name:"Bayern Munich ",
      img:bayernteam,
    },

  ]
  return (
    <>
      <div>
        <h1 className=" flex text-2xl font-bold max-sm:mb-3 max-sm:text-emerald-600">
          Our Partners
          <span className=" pt-2 max-sm:hidden">
            <FaCaretDown size={24} />
          </span>
        </h1>
      </div>
      <div>
        <h1 className=" text-center max-sm:underline">
          Visit Rwanda is proud to partner with some of the world’s biggest
          brands to share the beauty of the country with millions around the
          globe.
        </h1>

        <div className="flex justify-between w-1/3 mx-auto max-sm:grid max-sm:grid-cols-2">
            <img src={ballogo} alt="no internet connection" width={70}/>
            <img src={trdlogo} alt="no internet connection" width={70}/>
            <img src={arsenal} alt="no internet connection" width={70}/>
            <img src={psg} alt="no internet connection" width={70}/>
        </div>

        <div>
          <div className="grid grid-cols-4 max-sm:block max-sm:w-screen">
            {
              partners.map((part)=>{
                return (
                  <div className="py-10 max-sm:w-screen">
                    <h1 className=" font-bold mb-3">{part.name}</h1>
                    <img src={part.img} alt="no internet connection" className=" rounded-sm w-5/6 hover:grayscale ease-in-out duration-500" width={300}/>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default Partners;
