import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';

const Cards = () => {
    const {darkMode}= useContext(AppContext);
  return (
    <div className={(darkMode?"bg-black ":"bg-white ")+'w-full py-[10rem] px-4 text-center'}>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className={(darkMode?"bg-black text-white shadow-white ":"bg-white ")+'w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'}>
              <img className={(darkMode?"bg-black ":"bg-white ")+' w-20 mx-auto mt-[-3rem] '} src="https://cdn.hashnode.com/res/hashnode/image/upload/v1643286673231/WuDnrjhoX.png?auto=compress" alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Connect with fellowmates</h2>
              <p className='text-center text-4xl font-bold'>OTS</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Map make connections with people in same field</p>
                  <p className='py-2 border-b mx-8'>Connections is key</p>
              </div>
              <Link to="/" className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Pay 1200₹</Link>
          </div>
          <div className={(darkMode?"bg-gray-800 text-white shadow-white ":"bg-gray-50 ")+'w-full shadow-xl  flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'}>
              <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src="https://cdn.hashnode.com/res/hashnode/image/upload/v1643286976832/PZ6-e1Da2.png?auto=compress" alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Live mentoring</h2>
              <p className='text-center text-4xl font-bold'>OTS</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Get mentored by industry leaders about carrer choices</p>
                  <p className='py-2 border-b mx-8'>Mentors tell the right path</p>
              </div>
              <Link to="/" className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Pay 1800₹</Link>
          </div>
          <div className={(darkMode?"bg-black text-white shadow-white ":"bg-white ")+'w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'}>
              <img className={(darkMode?" bg-black ":"bg-white ")+' w-20 mx-auto mt-[-3rem]'} src="https://cdn.hashnode.com/res/hashnode/image/upload/v1643286986603/ovWZjIV-n.png?auto=compress" alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>No spams</h2>
              <p className='text-center text-4xl font-bold'>OTS</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>We don't create fake events for crowd gathering</p>
                  <p className='py-2 border-b mx-8'>Value the relationship between you and us</p>
              </div>
              <Link to="/" className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Pay 2500₹</Link>
          </div>
      </div>
    </div>
  );
};

export default Cards;