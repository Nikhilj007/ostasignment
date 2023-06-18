import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Cards = () => {
    const {darkMode}= useContext(AppContext);
  return (
    <div className={(darkMode?"bg-black ":"bg-white ")+'w-full py-[10rem] px-4 text-center'}>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className={(darkMode?"bg-black text-white shadow-white ":"bg-white ")+'w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'}>
              <img className={(darkMode?"bg-black ":"bg-white ")+' w-20 mx-auto mt-[-3rem] '} src="https://cdn.hashnode.com/res/hashnode/image/upload/v1643286673231/WuDnrjhoX.png?auto=compress" alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Personal domain</h2>
              <p className='text-center text-4xl font-bold'>OTS</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Map your custom domain in just seconds</p>
                  <p className='py-2 border-b mx-8'>Get a high performance, secure</p>
              </div>
              <Link to="/feed" className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Blogs</Link>
          </div>
          <div className={(darkMode?"bg-gray-800 text-white shadow-white ":"bg-gray-50 ")+'w-full shadow-xl  flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'}>
              <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src="https://cdn.hashnode.com/res/hashnode/image/upload/v1643286976832/PZ6-e1Da2.png?auto=compress" alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Instant audience</h2>
              <p className='text-center text-4xl font-bold'>OTS</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Share it with the dev community members on the homepage</p>
                  <p className='py-2 border-b mx-8'>Readers get your blog in feeds</p>
              </div>
              <Link to="/feed" className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Blogs</Link>
          </div>
          <div className={(darkMode?"bg-black text-white shadow-white ":"bg-white ")+'w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'}>
              <img className={(darkMode?" bg-black ":"bg-white ")+' w-20 mx-auto mt-[-3rem]'} src="https://cdn.hashnode.com/res/hashnode/image/upload/v1643286986603/ovWZjIV-n.png?auto=compress" alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>No ads</h2>
              <p className='text-center text-4xl font-bold'>OTS</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Knowledge sharing on OTS is and will always be completely free</p>
                  <p className='py-2 border-b mx-8'>Value the relationship between you and your readers</p>
              </div>
              <Link to="/feed" className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Blogs</Link>
          </div>
      </div>
    </div>
  );
};

export default Cards;