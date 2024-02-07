import React, { useEffect ,useState} from 'react'
import { GOOGLE_API_KEY } from '../utils/constants';

const VideoInfo = ({videoId}) => {
  const[videoDetails, setVideoDetails] = useState({});
  const [showFullContent, setShowFullContent] = useState(false);
    const[text, setText] = useState("...read more");

  useEffect(() => {
    getvideoDetails();
  },[videoId]);

  const handleReadMoreClick = () => {
    setShowFullContent(!showFullContent);
    if(showFullContent){
        setText("...show more")
    }
    else{
        setText("...show less")
    }

  };

  async function getchannelDetails(channelId) {
    const data = await fetch(`https://www.googleapis.com/youtube/v3/channels?id=${channelId}&key=${GOOGLE_API_KEY}&part=snippet,contentDetails,statistics`);
    const json = await data.json();

    const channelDetails = {
      logoUrl: json.items[0]?.snippet?.thumbnails?.default?.url,
      subscriberCount: json.items[0]?.statistics?.subscriberCount
  }; 
        return channelDetails;
  }

  const getvideoDetails = async () => {
    const data = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${GOOGLE_API_KEY}`);
    const json = await data.json();
    console.log(json);
    const channelDetails = await getchannelDetails(json.items[0].snippet.channelId)
        const trimmedDescription = json.items[0].snippet.description.slice(0, 140);
        
        const updatedVideoDetails = {
            "title": json.items[0].snippet.title,
            "channelLogo":  channelDetails.logoUrl,
            "subscriberCount": channelDetails.subscriberCount,
            "channelName": json.items[0].snippet.channelTitle,
            "description": json.items[0].snippet.description,
            "trimmedDescription": trimmedDescription,
            "viewCount": json.items[0].statistics.viewCount,
            "publishedAt": json.items[0].snippet.publishedAt,
            "likeCount": json.items[0].statistics.likeCount,
        }
       
        setVideoDetails( videoDetails => ({
          ...videoDetails,
          ...updatedVideoDetails,
      }));
  }
  return (
    <div className='ml-12 mt-5'>
      <div className='font-bold text-xl w-[800px]'>{videoDetails?.title}</div>
      <div>
      <div className='flex mt-4'>
        <img className="w-9 rounded-full" alt="channel logo" src={videoDetails?.channelLogo} />
        <div className='ml-2 mt-1 font-bold'>{videoDetails.channelName}</div>
        <div className='ml-[450px] bg-gray-200 p-1 rounded-2xl'>{Math.floor(videoDetails.likeCount/1000)}K likes</div>
      </div>
      <div className='text-sm ml-11 -mt-2'>{videoDetails.subscriberCount/1000}K subscribers</div>
      </div>

      <div className='w-[800px] bg-gray-200 rounded-lg p-1 mt-3 pl-3'>
      <div className='mt-5 flex'>
        <div className=''>{Math.floor(videoDetails?.viewCount/1000)}K views</div>
        <div className='ml-5'> {videoDetails?.publishedAt?.slice(0,10)
                        ? new Date(videoDetails.publishedAt).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })
                        : "No Date Available"}</div>
        
      </div>
      <div className='mt-2'>{videoDetails?.trimmedDescription}</div>
      <div>
      {showFullContent ? videoDetails?.description : videoDetails.trimmedDescription}
                <button className='text-cyan-800 font-semibold' onClick={handleReadMoreClick}> {text}</button>
      </div>
      </div>
    </div>
  )
}

export default VideoInfo;
