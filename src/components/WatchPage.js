import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';
import VideoInfo from './VideoInfo';

const WatchPage = () => {

    const [searchParams] = useSearchParams();
    console.log(searchParams.get("v"));

    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(closeMenu());
    },[])
  return (
    <div className='flex flex-col mt-24'>
       <div className='px-10 flex'>
        <div>
        <iframe width="800" 
      height="400" 
      src={"https://www.youtube.com/embed/"+searchParams.get("v")}
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowFullScreen>
      </iframe>
        </div>
      
      <div>
        <LiveChat />
      </div>
    </div>
    <div className='-mt-12'>
    <VideoInfo videoId={searchParams.get("v")}/>
    <CommentsContainer />
    </div>
    
    </div>
   
  )
}

export default WatchPage;
