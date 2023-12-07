import React from 'react'
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";

const Fooster = () => {
  return (
    <div className="footer p-[5rem] mb-4 bg-[#fcdac4] rounded-[10px] gap-8 grid grid-cols-5 m-auto items-center justify-center">
      <div>
        <div className="logoDiv">
          <h1 className="logo text-[25px] text-[#2a68ff] pb-[1.5rem]">
            <strong>Career</strong>Opportunity</h1>
        </div>
        <p className="text-black pb-[15px] opacity-70 leading-7">
          We always make our seekers and companies find the best jobs and employers find the best candidates.
        </p>
      </div>

      <div className="grid">
        <span className="divTitle text-[20px] font-semibold pb-[1.5rem] text-black">
          Company
        </span>
        <div className="grid gap-4">
          <li className="text-black oapcity-[.7] hover:opacity-[1]">About us</li>
          <li className="text-black oapcity-[.7] hover:opacity-[1]">Features</li>
          <li className="text-black oapcity-[.7] hover:opacity-[1]">News</li>
          <li className="text-black oapcity-[.7] hover:opacity-[1]">FAQ </li>
        </div>
      </div>
      <div className="grid">
        <span className="divTitle text-[20px] font-semibold pb-[1.5rem] text-black">
          Resources
        </span>
        <div className="grid gap-4">
          <li className="text-black oapcity-[.7] hover:opacity-[1]">Account</li>
          <li className="text-black oapcity-[.7] hover:opacity-[1]">Support Center</li>
          <li className="text-black oapcity-[.7] hover:opacity-[1]">Feedback</li>
          <li className="text-black oapcity-[.7] hover:opacity-[1]">Contact </li>
        </div>
      </div>
      <div className="grid">
        <span className="divTitle text-[20px] font-semibold pb-[1.5rem] text-black">
          Support
        </span>
        <div className="grid gap-4">
          <li className="text-black oapcity-[.7] hover:opacity-[1]">Events us</li>
          <li className="text-black oapcity-[.7] hover:opacity-[1]">Promo</li>
          <li className="text-black oapcity-[.7] hover:opacity-[1]">Req Demo</li>
          <li className="text-black oapcity-[.7] hover:opacity-[1]">careers </li>
        </div>
      </div>
      <div className="grid">
        <span className="divTitle text-[20px] font-semibold pb-[1.5rem] text-black">
          Contact Info
        </span>
        <div>
          <small className='text-[15px] text-[#2a68ff]'>
            xyz@outlook.com
          </small>
          <div className='icons flex gap-4 py-[1rem]'>
          <AiFillInstagram className='bg-white w-[50px] h-[35px] rounded-full icon text-[#2a68ff]'/>
          <BsFacebook className='bg-white w-[50px] h-[35px] rounded-full icon text-[#2a68ff]'/>
          <AiOutlineTwitter className='bg-white w-[50px] h-[35px] rounded-full icon text-[#2a68ff]'/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Fooster
