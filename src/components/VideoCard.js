import React from 'react'

const VideoCard = ({info}) => {
    const {snippet, statistics} = info;
    const {channelTitle , title , thumbnails} = snippet;

  return (
    <div className='p-2 m-3 w-72 shadow-lg'>
      <img className='rounded-lg' alt="thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className='font-bold py-2'>{title}</li>
        <li>{channelTitle}</li>
        <li>{Math.floor(statistics?.viewCount/1000)}K views</li>
      </ul>
    </div>
  )
}

export default VideoCard;
