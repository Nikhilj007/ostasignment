import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import Spinner from './Spinner'

import Card from './Card';

const Blogs = () => {
    const {posts,loading}= useContext(AppContext)

    console.log(posts)
  return (
    <div className='z-10 my-4 w-11/12 max-w-[730px] '>
      {
        loading?(<Spinner/>):(
            posts.length===0?(
                <div>
                    <p>NO Post Found</p>
                </div>
            ):(posts.map((post)=>(
                <Card post={post}/>
            )))
        )
      }
    </div>
  )
}

export default Blogs
