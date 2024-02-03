import React from 'react'
import Head from './Head';
import SearchVideoCard from './SearchVideoCard';
import {GOOGLE_API_KEY} from "../utils/constants";
import { useSearchParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';


const SearchPage = () => {

    const [searchResults , setSearchResults] = useState(null);
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get('search_query');
     

   const searchAnswers = async () => {
   const data = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${searchQuery}&type=video&key=${GOOGLE_API_KEY}`);
   const json = await data.json();
   console.log(json.items);

   setSearchResults(json.items);
   }
    useEffect(() =>{
        searchAnswers();
           
    },[])
  return (
    <div className=''>
      <div>
          <Head />
      </div>
        <div>
        {searchResults?.map((searchResult ,i) => (
            <Link to={`/watch?v=`+searchResult.id.videoId} key={searchResult.id.videoId} >
                 <SearchVideoCard  key = {i} data={searchResult}/>
            </Link>
        ))}
        </div>
       
    
    </div>
  )
}

export default SearchPage;
