import React from 'react'
import { FaCaretDown } from 'react-icons/fa'
import psg from '../images/psgowner.png'
import arsenal from '../images/arsenal.png'
import macron from '../images/macron.png'
import naendra from '../images/naendra.webp'
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Reviews() {
    const visitors =[
        {
            id:1 ,
            name:"Emmanuel Macron",
            icon:FaXTwitter,
            profile:macron,
            message:"Je n'ai pas vu un autre endroit magnifique depuis mon arrivée au Rwanda",
            title:"President of France",
            color:"black"
        },
        
        {
            id:2 ,
            name:"Naendra Modhi",
            icon:FaXTwitter,
            profile:naendra,
            message:"रवांडा एक बहुत ही खूबसूरत देश है और मैं चाहता हूं कि हर कोई इसे देखने आए",
            title:"Prime minister of India",
            color:"black"

        },
        {
            id:3 ,
            name:"Qatar Sports Investments",
            icon:FaInstagramSquare,
            profile:psg,
            message:"Nous avons trouvé le meilleur partenaire pour la gestion sportive #Visit-Rwanda",
            title:"Owner of Paris St Germain",
            color:"rgb(225 ,48 ,108)"
        },
        {
            id:4 ,
            name:"Arsenal football club",
            icon:FaFacebook,
            profile:arsenal,
            message:"The most beautifull country in africa had become our premium partner in our sports",
            title:"Arsenal ",
            color:"steelblue"
        },

    ]
  return (
    <>
    
    <div>
    <h1 className=" flex text-2xl font-bold">Our Reviews <span className=" pt-2"><FaCaretDown size={24}/></span></h1>
    <h1 className=' px-4 py-4 font-semibold text-xl' style={{fontFamily:"ink free"}}>What our visitors said</h1>
        
    </div>

    <div className=' flex justify-between cursor-pointer max-sm:block'>
        {
            visitors.map((visitor)=>{
                return (
                    <>
                    
                    <div className=' max-sm:mb-3 hover:bg-blue-300 ease-in-out duration-1000 relative flex justify-between mx-auto border-2 border-slate-500 rounded-md py-20 ml-4'>
                        <div>
                           <h1 className=' float-right block absolute top-0 right-0 py-4 px-7  text-blue-700'>{< visitor.icon size={24} style={{color:visitor.color}}/>}</h1>
                            <img src={visitor.profile} alt="no internet connection" width={100} className=' mx-auto border-4 border-black rounded-full'/>
                            <h1 className=' font-semibold text-center'>{visitor.name}</h1>
                            <h1 className=' text-center font-extrabold'>{visitor.title}</h1>
                            <h1 className=' text-center'>" {visitor.message} "</h1>

                        </div>
                    </div>
                    </>
                )
            })
        }
    </div>
    </>
  )
}

export default Reviews