import React, { useState } from 'react'
import {AiOutlineSearch, AiOutlineCloseCircle} from 'react-icons/ai'
import {BsHouseDoor} from 'react-icons/bs'
import {CiLocationOn} from 'react-icons/ci'

const Search = () => {
    const [job,setJob]= useState('');
    const [company,setCompany]= useState('');
    const [location,setLocation]= useState('');
  return (
    <div className='searchDiv grid gap-10 bg-gray-200 rounded-md p-[3rem]'>
      <form action="">
        <div className='firstDiv md:flex-row flex-col flex justify-between items-center rounded-lg gap-[10px] bg-white p-5 shadow-lg shadow-gray-500'>
            <div className='flex gap-2 items-center'>
                <AiOutlineSearch className='text-2xl cursor-pointer'/>
                <input type="text" 
                value={job}
                onChange={(e)=>setJob(e.target.value)} placeholder='Search for jobs' className='outline-none border-none bg-transparent text-blue-500 focus:outline-none w-full'/>
                <AiOutlineCloseCircle onClick={()=>setJob("")} className='text-3xl text-[#a5a6a6] hover:text-textColor cursor-pointer'/>
            </div>
            <div className='flex gap-2 items-center'>
                <BsHouseDoor className='text-2xl cursor-pointer'/>
                <input type="text" 
                value={company}
                onChange={(e)=>setCompany(e.target.value)} placeholder='Search by company' className='outline-none border-none bg-transparent text-blue-500 focus:outline-none w-full'/>
                <AiOutlineCloseCircle onClick={()=>setCompany("")} 
                className='text-3xl text-[#a5a6a6] hover:text-textColor cursor-pointer'/>
            </div>
            <div className='flex gap-2 items-center'>
                <CiLocationOn className='text-2xl cursor-pointer'/>
                <input type="text" 
                value={location}
                onChange={(e)=>setLocation(e.target.value)} placeholder='Search by location' className='outline-none border-none bg-transparent text-blue-500 focus:outline-none w-full'/>
                <AiOutlineCloseCircle onClick={()=>setLocation("")} className='text-3xl text-[#a5a6a6] hover:text-textColor cursor-pointer'/>
            </div>
            <button className='bg-emerald-800 text-white h-full p-4 px-10 rounded-xl hover:bg-emerald-600 duration-200'>Search</button>
        </div>
      </form>
      <div className='secDiv flex flex-col md:flex-row items-center gap-10 justify-center'>
      <div className='singleSearch flex items-center gap-2'>
        <label htmlFor="relevance" className='text-gray-500 font-semibold'>Sort by:</label>

        <select name="relevance" id="relevance" className='bg-white rounded-md px-4 py-1 focus:outline-none'>
            <option value="">Relevance</option>
            <option value="">Inclusive</option>
            <option value="">Starts with</option>
            <option value="">Contains</option>
        </select>
        
      </div>
      <div className='singleSearch flex items-center gap-2'>
        <label htmlFor="type" className='text-gray-500 font-semibold'>Type:</label>

        <select name="type" id="type" className='bg-white rounded-md px-4 py-1 focus:outline-none'>
            <option value="">Full-time</option>
            <option value="">Remote</option>
            <option value="">Contract</option>
            <option value="">Part-time</option>
        </select>
        
      </div>
      <div className='singleSearch flex items-center gap-2'>
        <label htmlFor="level" className='text-gray-500 font-semibold'>Level:</label>

        <select name="level" id="level" className='bg-white rounded-md px-4 py-1 focus:outline-none'>
            <option value="">Senior</option>
            <option value="">Beginner</option>
            <option value="">Intermediate</option>
            <option value="">Advanced</option>
        </select>
        
      </div>
      <span className='text-gray-600 cursor-pointer'>Clear All</span>
      </div>

    </div>
  )
}

export default Search
