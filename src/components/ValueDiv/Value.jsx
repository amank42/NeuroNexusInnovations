import React from 'react'
import simplicity from '../../images/simplicity.png'
import socialnetwork from '../../images/socialnetwork.png'
import trust from '../../images/trust.png'

const Value = () => {
  return (
    <div className="mb-[4rem] mt-[6rem]">
      <h1 className="text-black text-[25px] py-[3rem] font-bold w-[400px] block">The virtue that keeps us honest and responsible</h1>
      
      <div className="grid gap-[10rem] grid-cols-3 items-center">

        <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
          <div className="flex items-center gap-3"> 
            <div className="imgDiv p-[4px] rounded[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
                <img src={simplicity} alt="" className='w-[100%]'/>
            </div>
            <span>
              <h1 className="text-[#2a68ff] font-semibold text-[18px]">Simplicity</h1>
              {/* <p className="text-[#959595] text-[14px]">We strive to keep things simple and transparent.</p> */}
            </span>
          </div>
          <p>
            Things Bsinf made beautiful simple are at he heart of everything we do.
          </p>
        </div>
        <div className="singleGrid rounded-[10px] hover:bg-[#f7edf5] p-[1.5rem]">
          <div className="flex items-center gap-3"> 
            <div className="imgDiv p-[4px] rounded[.8rem] bg-[#f7edf5] h-[40px] w-[40px] flex items-center justify-center">
                <img src={socialnetwork} alt="" className='w-[100%]'/>
            </div>
            <span>
              <h1 className="text-[#2a68ff] font-semibold text-[18px]">Social Network</h1>
              {/* <p className="text-[#959595] text-[14px]">We strive to keep things simple and transparent.</p> */}
            </span>
          </div>
          <p>
            We Believe in making things Better for Everyone, even if Just by a little Bit!
          </p>
        </div>
        <div className="singleGrid rounded-[10px] hover:bg-[#fcfae3] p-[1.5rem]">
          <div className="flex items-center gap-3"> 
            <div className="imgDiv p-[4px] rounded[.8rem] bg-[#f3f2ad] h-[40px] w-[40px] flex items-center justify-center">
                <img src={trust} alt="" className='w-[100%]'/>
            </div>
            <span>
              <h1 className="text-[#2a68ff] font-semibold text-[18px]">Trust</h1>
              {/* <p className="text-[#959595] text-[14px]">We strive to keep things simple and transparent.</p> */}
            </span>
          </div>
          <p>
            We work on the basis of creating trust which which can be nurtured through authenticity and transparency.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Value
