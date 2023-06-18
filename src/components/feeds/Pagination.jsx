import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

const Pagination = () => {
    const {darkMode} = useContext(AppContext);
    const {page,handlePageChange,totalPages} = useContext(AppContext);
  return (
    <div className='flex justify-around w-11/12 max-w-[730px] mb-8'>
      <div className='flex gap-5'>
      {
            page>1 &&
            <button className={(darkMode?"border-white ":"border-black ")+'border-4 py-1 px-2 rounded-xl'} onClick={()=>handlePageChange(page-1)} >
                Previous
            </button>
        }

        
        {
          page<totalPages && 
          <button className={(darkMode?"border-white ":"border-black ")+'border-4 py-1 px-2 rounded-xl'} onClick={()=>handlePageChange(page+1)}>
                Next 
            </button>
        }
      </div>
      <p>Page {page} of {totalPages}</p>

    </div>
  )
}

export default Pagination
