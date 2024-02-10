import React from 'react'
import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';
import { useSelector } from 'react-redux';

const MainContainer = () => {
  const theme = useSelector((store) => store.app.isDarkMode);
  return (
    <div className={`mt-24 overflow-x-hidden w-full bg-white ${theme === true ?'bg-black text-white' : "" }`}>
      <ButtonList />
      <VideoContainer />
    </div>
  )
}

export default MainContainer;
