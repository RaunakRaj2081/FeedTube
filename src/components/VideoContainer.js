import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

  const [videos , setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  },[]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const output = await data.json();
    console.log("hi",output.items);
    setVideos(output.items);
  };
  return (
    <div className='flex flex-wrap px-6 items-start justify-center'>
      {videos?.map((video) => 
      <Link to={"/watch?v="+video.id} key={video?.id}>
        <VideoCard  info={video} />
        </Link>
)}
    </div>
  )
}

export default VideoContainer;
