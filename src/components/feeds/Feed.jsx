import Header from "./Header";
import Blogs from "./Blogs";
import Pagination from "./Pagination";
import { useContext, useEffect } from "react";
import { AppContext } from '../../context/AppContext'

export default function Feed() {
  const {fetchBlogPosts} = useContext(AppContext);
  const {darkMode}= useContext(AppContext);

  useEffect(()=>{
    fetchBlogPosts();// eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  return (
    <div className={(darkMode?"backgroundb text-white ":"background ")+" bg-emerald-50 w-full h-full flex flex-col gap-y-1 justify-center items-center"}>
      <Header/>
      <Blogs/>
      <Pagination/>
    </div>
  );
}