import React from 'react'
import Sidebar from './Sidebar';
import MainContainer from './MainContainer';
import { Outlet } from 'react-router-dom';
import Head from './Head';
import { useSelector } from 'react-redux';

const Body = () => {
  const theme = useSelector((store) => store.app.isDarkMode);
  return (
    <div className={`flex flex-wrap overflow-x-hidden ${theme === true ?'bg-black text-white' : "" }`}>
      <div className={`fixed z-20 bg-white w-screen ${theme === true ?'bg-black text-white' : "" }`}>
        <Head />
      </div>
      <div className='flex w-screen -z-0'>
      <Sidebar />
      <Outlet />
      </div>
      
    </div>
  )
}

export default Body;
