import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsHouseDoor } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

const Search = () => {
  return (
    <div className='searchDiv items-center grid gap-10 bg-[#fcfcfc] rounded-[10px] p-[3rem]'>
      <form action=''>

        <div className='firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-gray-200 p-5 show-lg shadow-gray-700'>
          
          <div className='flex gap-2 items-center'> 
            <AiOutlineSearch className='text-[25px] icon'/>
            <input type='text' className='bg-transparent text-gray-700 focus:outline-none w-[100%]' placeholder='Search Job Here...'/>
            <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-black icon'/>
          </div>

          <div className='flex gap-2 items-center'> 
            <BsHouseDoor  className='text-[25px] icon'/>
            <input type='text' className='bg-transparent text-gray-700 focus:outline-none w-[100%]' placeholder='Search by company...'/>
            <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-black icon'/>
          </div>

          <div className='flex gap-2 items-center'> 
            <CiLocationOn  className='text-[25px] icon'/>
            <input type='text' className='bg-transparent text-gray-700 focus:outline-none w-[100%]' placeholder='Search by location...'/>
            <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-black icon'/>
          </div>
                <button className='bg-[#2a68ff] h-full p-5 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-300'>Search</button>
        </div>

      </form>

      <div className='secDiv flex items-center gap-10 justify-center'>
          <div className='singleSearch flex items-center gap-2'>
            <label htmlFor='level' className='text-[#808080] font-semibold'>Level:</label>
            <select name='' id='relevance' className='bg-transparent rounded=[3px] px-4 py-1 text-gray-700'>
            <option value=''>Beginner</option>
            <option value=''>Intermediate</option>
            <option value=''>Advance</option>
            </select>
          </div>
          <div className='singleSearch flex items-center gap-2'>
            <label htmlFor='type' className='text-[#808080] font-semibold'>Type:</label>
            <select name='' id='relevance' className='bg-transparent rounded=[3px] px-4 py-1 text-gray-700'>
            <option value=''>Full-time</option>
            <option value=''>Part-time</option>
            <option value=''>Remote</option>
            <option value=''>Contract</option>
            </select>
          </div>
          <span className='text-[#a1a1a1] cursor-pointer hover:text-black'>Clear All</span>
      </div>


    </div>
  )
}

export default Search
