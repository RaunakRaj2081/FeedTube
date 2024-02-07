import React from 'react'
import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';

const MainContainer = () => {
  return (
    <div className='mt-24 overflow-x-hidden w-full bg-white'>
      <ButtonList />
      <VideoContainer />
    </div>
  )
}

export default MainContainer;
