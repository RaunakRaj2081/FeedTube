import React, { useEffect , useState } from 'react'
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';
import VideoInfo from './VideoInfo';
import YtComments from './YtComments';
import RelatedVideos from './RelatedVideos';

const WatchPage = () => {

    const [searchParams] = useSearchParams();
    console.log(searchParams.get("v"));
    const [showLiveChat , setShowLiveChat] = useState(true);

    

    const handleLiveChat = () => {
      setShowLiveChat(!showLiveChat);
    }

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
        {
          !showLiveChat ? (
            <div className=''> 
              <button onClick={handleLiveChat} className='ml-36 bg-gray-200 rounded-xl p-1'>Show Live Chat</button> </div>
          ) : ( <div >
            <LiveChat />
            <button onClick={handleLiveChat}  className='ml-36 bg-gray-200 rounded-xl p-1 mt-2'>Hide Live chat </button>
          </div>)
        }
        
      </div>
    </div>
    <div className='flex gap-2'>
    <div className='-mt-12'>
    <VideoInfo videoId={searchParams.get("v")}/>
    <CommentsContainer />
    <YtComments videoId={searchParams.get("v")} />
    </div>

    <div>
      <RelatedVideos />
    </div>
    </div>
    
    </div>
   
  )
}

export default WatchPage;
