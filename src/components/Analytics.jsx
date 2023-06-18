import React from 'react';
import Laptop from '../assets/bgimg.jpg';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Analytics = () => {
  const {darkMode, setDarkMode} = useContext(AppContext); 
  return (
    <div className={(darkMode?"bg-black":"bg-white")+' w-full py-16 px-4'}>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold '>Jobs ANALYTICS DASHBOARD</p>
          <h1 className={(darkMode?"text-white ":"text-black")+'md:text-4xl sm:text-3xl text-2xl font-bold py-2'}>Apply for career in best MNCs of India</h1>
          <p className={(darkMode?"text-white ":"text-black")}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <div className='mt-10'>
          <Link to="/jobs" className='bg-black inline text-[#00df9a] w-fit rounded-md font-medium my-6 px-6 md:mx-2 mx-1 py-3'>Jobs</Link>
          <Link to="/events" className="bg-black inline text-[#00df9a] w-fit rounded-md font-medium my-6 px-6 md:mx-2 py-3">Upcoming Events</Link>
          </div>
                 </div>
      </div>
    </div>
  );
};

export default Analytics;