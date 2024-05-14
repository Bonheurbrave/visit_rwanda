import React from "react";
import soft_power from "../images/soft_power.png";
import ngofounders from "../images/ngofounders.png";
import memory from "../images/memory.png";
import afritalent from "../images/afritalent.png";
import { FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function Events() {
  return (
    <div className=" text-slate-700">
      <div>
        <h1 className=" flex text-2xl font-bold">Events <span className=" pt-2"><FaCaretDown size={24}/></span></h1>
      </div>
      <div>

        <div className=" flex justify-between py-5 max-sm:block max-sm:w-screen max-sm:px-2">
          <img src={soft_power} alt="no internet connection" className=" w-1/3 max-sm:w-screen"/>
          <h1 className=" w-5/6 pt-10 px-8 max-sm:w-screen max-sm:px-0">
           <h1 className=" font-bold text-slate-800 mb-6 text-xl">Africa Soft Power Summit 2024</h1>
            The Africa Soft Power Project (ASP) is focused on harnessing the
            continent’s creative, cultural, and knowledge industries to propel
            itself forward, while championing the inclusion of African &
            diasporan voices, in global discourse. Ultimately, ASP seeks to
            showcase the continent and what its unique perspective can bring to
            the modern global economy at large.
            <div className=" pt-4">
            <Link to="https://theafricasoftpowerproject.com/africa-soft-power-summit-may-2024/" target="_blank"  className=" max-sm:w-1/3 border-blue-500 bg-blue-500 rounded-md block w-1/6 text-center py-2 text-white">Explore More</Link>
            </div>
          </h1>
          
        </div>
      </div>
      <div>
        <div className=" flex justify-between py-5 max-sm:block max-sm:w-screen max-sm:px-2">
          <img src={ngofounders} alt="no internet connection" className=" w-1/3 max-sm:w-screen"/>
          <h1 className=" px-8 w-5/6 pt-10 max-sm:w-screen max-sm:px-0">
            <h1 className=" font-bold mb-6 text-slate-800 text-xl">NGO FOUNDERS RWANDA EVENT</h1>
            RWANDA EVENT 20 - 23, 2024 ! This unique EVENT seeks to bring
            together NGO/NPO Founders, Stakeholders from Corporate Bodies,
            Diplomatic Missions, Government officials, Change ambassadors,
            Associations, Private sectors and Civil society for a wholistic
            Conference (Signing of NFGN Global Partnership Alliance for UN's
            Recognition), and official Modalities to interface with Presidents
            of Nations and World renowned Institutions on our quest for
            bilateral engagement/working plans, between NGO Founders Global
            Network (NFGN), United Nations Department of Economic and Social
            Affairs (DESA) IOM - UN Migration, UNICEF, African Union, USA U.S.
            Mission to the African Union UN Sustainable Development Platform and
            others for Sustainability as we advance the 17 Agendas of the United
            Nations Sustainable Development Goals (even beyond 2030). See you
            there!
            <div className=" pt-4">
            <Link to="https://www.eventbrite.com/e/ngo-founders-rwanda-event-21-23-june-2024/" target="_blank"  className=" max-sm:w-1/3 border-blue-500 bg-blue-500 rounded-md block w-1/6 text-center py-2 text-white">Explore More</Link>
            </div>
          </h1>
        </div>
      </div>
      <div>
        <div className="flex justify-between py-5 max-sm:block max-sm:px-2">
          <img src={memory} alt="no internet connection" className="w-1/3 max-sm:w-screen"/>
          <h1 className="px-8 w-5/6 pt-10 max-sm:px-0 max-sm:w-screen">
            <h1 className=" font-bold mb-6 text-slate-800 text-xl">African Memorial & Human Rights Museums Building Peace</h1>
            The International Council of Museums, International Committee for
            Memorial and Human Rights Museums (ICMEMOHRI) 2024 meeting and
            conference will be in Kigali, Rwanda, on the 28th – 31st of July
            2024. We will begin our conference during the final day of the
            international conference Listening and Leading: The Art and Science
            of Peace, Resilience, and Transformational Justice organized by
            AEGIS
            <div className=" pt-4">
            <Link to="https://icmemo.mini.icom.museum/icmemohri-2024-conference/" target="_blank"  className=" max-sm:w-1/3 border-blue-500 bg-blue-500 rounded-md block w-1/6 text-center py-2 text-white">Explore More</Link>
            </div>
          </h1>
        </div>
      </div>
      <div>
        <div className="flex justify-between py-5 max-sm:block max-sm:w-screen max-sm:px-4">
          <img src={afritalent} alt="no internet connection" className="w-1/3 max-sm:w-screen"/>
          <h1 className="px-8 w-5/6 pt-10 max-sm:w-screen max-sm:px-0">
            <h1 className="font-bold mb-6 text-slate-800 text-xl">AfriTalent Future Summit</h1>
            AfriTalent Future Summit is a high-profile summit where Africa's top
            leaders, heads of institutions such as the World Bank, IMF, and
            business leaders come together to discuss Africa's talent challenge
            and their impact on the development of Africa. The AfriTalent Future
            Leadership Summit is a must-attend event for African leaders and HR
            professionals. The summit is designed to help participants
            understand the complex nature of Africa's labor market and how
            talent can help drive economic growth. NGO FOUNDERS RWANDA EVENT
            <div className=" pt-4">
            <Link to="https://icmemo.mini.icom.museum/icmemohri-2024-conference/" target="_blank"  className=" border-blue-500 bg-blue-500 rounded-md block w-1/6 max-sm:w-1/3 text-center py-2 text-white">Explore More</Link>
            </div>
          </h1>
        </div>
        <div>
        <Link to="https://www.eventbrite.com/d/rwanda/2024/" target="_blank"  className=" px-10 flex border-blue-500 bg-green-500 rounded-md w-1/5 max-sm:w-full text-center py-2 text-white">More Events <span className=" pt-2 px-3"><FaArrowRight/></span></Link>  
        </div>
      </div>
    </div>
  );
}

export default Events;
