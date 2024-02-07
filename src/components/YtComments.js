import React, { useEffect, useState } from 'react'
import { GOOGLE_API_KEY } from '../utils/constants';
import { LiaThumbsUp } from "react-icons/lia";
import { LiaThumbsDownSolid } from "react-icons/lia";
import { commentsTimeStamp } from '../utils/helper';


const SingleComment = ({data}) => {
    const name = data?.snippet?.topLevelComment?.snippet?.authorDisplayName;
    const likeCount = data?.snippet?.topLevelComment?.snippet?.likeCount;
    const authorProfileImage = data?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl;
    const textOrg = data?.snippet?.topLevelComment?.snippet?.textOriginal;
    const publishedAt = commentsTimeStamp(data);
    return (
        <div>
            <div className='flex mt-8'>
                <img className="w-9 rounded-full" alt="photo" src={authorProfileImage} />
                <div className='ml-2 mt-1 font-bold'>{name}</div>
                <div className='ml-2 mt-[6px] text-sm'>{publishedAt}</div>
            </div>
            <div className='ml-12 -mt-1'>{textOrg}</div>
            <div className='flex ml-12 mt-2'>
                <div className='flex'>
                    <div><LiaThumbsUp size={20}/></div>
                    <div className='-mt-1 ml-1'>{likeCount}</div>
                </div>
                <div className='ml-8'><LiaThumbsDownSolid size={20}/></div>
            </div>
        </div>
    )
}

const CommentList = ({comments}) => {
    return comments.map((comment, i) => (
        <div key={i}>
            <SingleComment data={comment} />
        </div>
    ))
}


const YtComments = ({videoId}) => {
    const [comments , setComments] = useState(null);

    const allComments = async() => {
        const data = await fetch(`https://www.googleapis.com/youtube/v3/commentThreads?key=${GOOGLE_API_KEY}&textFormat=plainText&part=snippet&videoId=${videoId}&maxResults=100`);
        const json = await data.json();
        console.log("hiijj",json.items);
        setComments(json.items);
    }
    useEffect(() => {
        allComments();

    },[]);

  return (
    <div className='ml-12 mt-5 w-[800px]'>
        <div className='font-bold text-xl'>Comments : </div>
      {
        comments && (<CommentList comments={comments} />)
      }
    </div>
  )
}

export default YtComments;
