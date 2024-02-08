import React, { useState , useEffect} from 'react'
import { Link } from 'react-router-dom';
import { GOOGLE_API_KEY } from '../utils/constants';
import { useSearchParams } from 'react-router-dom';
import VideoCard from './VideoCard';

const RelatedVideos = () => {
    const [searchParams] = useSearchParams();
    const videoId = searchParams.get('v');
     
    const [relatedVideos , setRelatedVideos] = useState(null);

    useEffect(() => {
       getRelatedVideo(videoId);
    },[]);

    const getRelatedVideo = async(videoId) => {
      const channelId = await getChannelId(videoId);
      const data = await fetch(`https://www.googleapis.com/youtube/v3/activities?part=snippet%2CcontentDetails&maxResults=50&regionCode=in&key=${GOOGLE_API_KEY}&channelId=${channelId}`);
      const json = await data.json();
      console.log("hihfds" , json.items);
      setRelatedVideos(json.items);
    };

    async function getChannelId(videoId) {
        const data = await fetch(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet&key=${GOOGLE_API_KEY}`);
        const json = await data.json();
        const channelId = json.items[0]?.snippet?.channelId;
        return channelId;
    }
  return (
    <div>
        {relatedVideos?.map((video, index) => (
        <Link 
            className='flex-shrink' 
            key={index} 
            to={`/watch?v=${videoId}`}
        >
            <VideoCard info={video} />
        </Link>
    ))}
    </div>
  )
}

export default RelatedVideos;
