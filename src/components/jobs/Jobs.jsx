import React from 'react'
import Search from './Search'
import Jobcard from './Jobcard'
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const Jobs = () => {
  const {darkMode} = useContext(AppContext);
  return (
    <div>
      <h1 className={(darkMode?"text-emerald-300 ":"text-emerald-800 ")+' font-bold text-4xl text-center p-10'}>Jobs for you</h1>
      <Search/>
      <Jobcard/>
    </div>
  )
}

export default Jobs
