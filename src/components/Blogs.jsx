import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner'


const Blogs = () => {
    const {posts,loading}= useContext(AppContext)
    console.log(posts)
  return (
    <div>
      {
        loading?(<Spinner/>):(
            posts.length===0?(
                <div>
                    <p>NO Post Found</p>
                </div>
            ):(posts.map((post)=>(
                <div key={post.id}>
                    <p className='font-bold text-lg py-3 text-emerald-700 '>{post.title}</p>
                    <p>
                        By <span>{post.author}</span> on <span>{post.category}</span>
                    </p>
                    <p>Posted on {post.date}</p>
                    <p>{post.content}</p>
                    <div>
                        {post.tags.map((tag,i)=>{
                            return <span key={i}>{`#${tag}`}</span>
                        })}
                    </div>
                </div>)
            ))
        )
      }
    </div>
  )
}

export default Blogs
