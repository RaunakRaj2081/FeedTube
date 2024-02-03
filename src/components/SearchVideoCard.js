import React from 'react'

const SearchVideoCard = ({data}) => {
    const {snippet} = data;
    const {channelTitle,thumbnails , title} = snippet;
  return (
    <div className='flex mt-10'>
      <img className='scale-110 rounded-lg ml-16'
      alt="card" src={thumbnails.medium.url} />
     <div className='pl-10'>
        <div className='text-md font-bold mt-2'>{title}</div>
     <div className='mt-4'>{channelTitle}</div>
     </div>
      
    </div>
  )
}

export default SearchVideoCard;
