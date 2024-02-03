import React from 'react'
import Sidebar from './Sidebar';
import MainContainer from './MainContainer';
import { Outlet } from 'react-router-dom';
import Head from './Head';

const Body = () => {
  return (
    <div className='flex'>
      <div className='fixed z-20 bg-white w-screen'>
        <Head />
      </div>
      <div className='flex'>
      <Sidebar />
      <Outlet />
      </div>
      
    </div>
  )
}

export default Body;
