import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {toggleMenu} from "../utils/appSlice";
import { IoIosSearch } from "react-icons/io";
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import {cacheResults} from "../utils/searchSlice";
import { FaMicrophone } from "react-icons/fa6";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Head = () => {

  const [searchQuery , setSearchQuery] = useState("");
  const [suggestions , setSuggestions] = useState([]);
  const [showSuggestions , setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    
     const timer = setTimeout(() => {
      if (searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery]);
      }
      else {
        getSearchSuggestions();
      }
     } , 200 );
     

     return () => {
      clearTimeout(timer);
    };

  },[searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    dispatch(
      cacheResults({
        [searchQuery] : json[1] ,
      }));
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }

  const searchHandler = () => {
    setShowSuggestions(false);
    if(searchQuery) {
      navigate(`/results?search_query=${searchQuery}`);
    }
  };

  const suggestionSearchHandler = (e) => {
    console.log("hefewfewfefe");
      navigate(`/results?search_query=${e?.target?.textContent}`);
      setShowSuggestions(false);

  };

  return (
    <div className='grid grid-flow-col p-1 m-2 shadow-lg items-center'>

      <div className='flex col-span-1 '>
        <img 
        onClick={() => toggleMenuHandler()}
        className='h-8 cursor-pointer mt-4'
        alt="menu" src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8iICGSkZIkHyEPDA3z8vIyMTEhGx40MDEeHB4jICEeHR4AAAAxMTEgHh4gHB3W1tYtKyyXlpe6uroKBQhzcnJ+fX7CwsKysrJmZWX19fXk5OQYFhc5ODgoJidta2xUVFRfXV7Kysqsq6yjo6MHDa+eAAAB8UlEQVR4nO3c3VLaQBgGYJY/IQtE1Iogrfbn/q+xCaQ2TqtFm222+jwHDC8MMO8EdjnY+QYDAAAAAAAAAAAAAAAAeI/OL4Z5uDhP0m+yXYwzcbX4cJug4d045GN8Pem84GYd+67VUq6/dN7wou9Sjy1u0jQcjUZ9V2skaHhZfUuLbBrGYtN5w8F2HLNpGFOsNIPddlo3XGUgTK9T7BbVFzWbHX+zS1IQAAAAAAAAAABeZJKHVPXO76dHs9msul1OH+JfpOmr0ufuz15Wbhb78uzBvJzPWym2U/XU6Sk+lc6eTnEfv3Zf8PZjeTib2AihnYpwOJl5Qhp1kULY33d/1Pvbp9XTDcO/bhjGl503HD5uUX/Mn1PxTPr964pTUkhygra+hj9U16V10LS6+/pUtFLxTAo/00GCa1j/DhtFDw2Lxw1T/A7rtTRWS+ZhES2rdS3O22lep/qBX1LZSmetFI+pfvzk1HximrW03g9ns4edadboIy2XafbDWt9/Zhqp6gEAAAAAAAAAwAu89Zl7u+00xFXse2ZiLdHcxO24PLx7DpLMvrxcHy9f3+WOUswvHYZVRg2TTNktqnqjTCa0Jmm4WZcZNUwxC3pwd5VPwyLJlN3JdnHV9zD2RqKZ7G9/rj4AAAAAAAAAAAAAAAD8T74DVhZG6MsBqOQAAAAASUVORK5CYII=' />

        <img className='h-16 mx-2'
        alt="youtube" src='https://images.indianexpress.com/2017/08/youtube_logo_new-759.jpg?w=414'/>
      </div>

      <div className='col-span-10 px-16 '>
        
        <div className='flex'>
        <input 
        className="w-1/2 border border-gray-400 rounded-l-full p-2 mb-2 ml-10"
          type="text" placeholder='Search'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 500)}
          />
          <div>
        <button onClick={searchHandler}
        className="border border-gray-400 rounded-r-full p-2 py-2 h-[41px] bg-slate-50">
          <IoIosSearch size={25} style={{color :"gray-400"}}/>
          </button>
          </div>
          <div className='ml-5 mt-2'>
          <FaMicrophone size={22}/>
          </div>
        </div>
        

      {showSuggestions && (
         <div className='fixed bg-white py-2 px-2 w-[23.5rem] ml-10 shadow-lg rounded-lg border border-gray-100'>
         
           {suggestions?.map((e , i) => (
           <p 
                onClick={suggestionSearchHandler}
            className='py-2 px-3 shadow-sm hover:bg-gray-200'>
             {e}
           </p>
           
           ))}
       </div>
      )}   
      </div>

      <div className='ml-5'>
      <IoMdNotificationsOutline size={28}/>
      </div>

      <div className='col-span-1 flex items-center'>
        <img className='h-8'
        alt="user" src='https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg' />
      </div>

    </div>
  )
}

export default Head;
