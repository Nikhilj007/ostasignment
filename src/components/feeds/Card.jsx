import React, { useContext } from 'react'
import { useState } from 'react';
import profile from './profile.svg';
import {AiOutlineHeart,AiFillHeart,AiOutlineSend,AiTwotoneDelete} from 'react-icons/ai'
import {FaCommentAlt,FaRegCommentAlt } from 'react-icons/fa'
import { AppContext } from '../../context/AppContext';

const Card = ({post}) => {
    const {darkMode} = useContext(AppContext);
    const [likeCount,setLikeCount]= useState(66);
    const [like,setLike] = useState(true);
    const [comments,setComments]= useState(["enlightening !!"]);
    const [comment,setComment]= useState("");
    const [showInput,setShowInput] = useState(false);
  return (
    <div>
      <div className={(darkMode?'bg-[#0a210e] ':'bg-emerald-50 ')+'mb-4 z-10 shadow-2xl  rounded-md hover:scale-105 transform transition duration-300 border border-black p-10'} key={post.id}>
                    <p className={(darkMode?'text-emerald-400 ':'text-emerald-700 ')+'font-bold text-xl py-3  '}>{post.title}</p>
                    <p className='text-lg font-semibold'>
                        <span><img className='inline mt-[-9px]' width={29} src={profile} alt="" /></span><span> {post.author}</span> on <span className='font-bold underline' >{post.category}</span>
                    </p>
                    <p className='text-black-300 font-bold opacity-60 '>Posted on {post.date}</p>
                    <p className='text-lg my-3'>{post.content}</p>
                    <div className='text-blue-800 hover:cursor-pointer'>
                        {post.tags.map((tag,i)=>{
                            return <span key={i}>{`#${tag}`} </span>
                        })}
                    </div>
                    <div className='flex justify-around text-2xl pt-5 '>
                    <div >
                       <button className= 'text-red-600 active:scale-75 transition-all duration-150' onClick={()=>{setLike(!like); like? setLikeCount(likeCount+1):setLikeCount(likeCount-1)}}>
                       {like?<AiOutlineHeart/>:<AiFillHeart/>}
                       </button><span className='text-xl '> {likeCount} Likes</span>
                    </div>
                    <div onClick={()=>{setShowInput(!showInput)}}>
                        <button className='active:scale-75 transition-all duration-150'>
                        {showInput?<FaCommentAlt/>:<FaRegCommentAlt/>}
                       </button><span> {comments.length}</span>
                    </div>
                    </div>
                    {
                        showInput &&
                        <div>
                            <div className='text-center border rounded-sm border-black mt-2'>
                            <input value={comment} onChange={(e)=>{setComment(e.target.value)}} 
                            className={(darkMode?"text-white bg-black ":"text-black ")+' w-full text-center p-2'} placeholder='type your comment here'/>
                        </div>
                        <button onClick={()=>{if(comment!=="")setComments(prev=>[...prev,comment]);setComment("")}} className='flex justify-end text-2xl p-5 w-full'><AiOutlineSend/></button>
                        {
                            comments.map((cmnt,i)=>(
                                <div className={(darkMode?"text-white bg-emerald-800 ":"text-black bg-emerald-200 ")+'border  px-5 py-3 rounded-md flex justify-between'} ><div><div className='text-sm'>Random User</div>{cmnt}</div><button jey={i} onClick={(e)=>{
                                    const a=e.target.parentElement.parentElement.getAttribute("jey");
                                    setComments(prev=>prev.filter((_,i)=>i!=a))
                            }} className='text-2xl'><AiTwotoneDelete/></button></div>                                
                            ))
                        }
                        </div>
                        
                    }
                </div>
    </div>
  )
}

export default Card
