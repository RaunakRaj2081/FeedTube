import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import * as PiIcons from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { RiFeedbackLine } from "react-icons/ri";
import { TbHelp } from "react-icons/tb";


const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // early return
  if(!isMenuOpen) return null;

  const exploreIconNames = [
    ['PiFire','Trending'],
    ['PiShoppingBagOpenLight', 'Shopping'],
    ['PiMusicNote', 'Music'],
    ['PiFilmSlate', 'Films'],
    ['PiPlayCircle', 'Live'],
    ['PiGameControllerDuotone', 'Gaming'],
    ['PiNewspaperLight', 'News'],
    ['PiTrophy', 'Sport'],
    ['PiLightbulb', 'Learning'],
    ['PiCoatHangerLight', 'Fashion & beauty'],
    ['PiApplePodcastsLogoLight', 'Podcasts'],
  ];

  
  return (
    <div className='p-5 shadow-lg w-48'>
      <ul className='text-lg'>
        <Link to="/">
        <li className='flex hover:bg-gray-200 rounded-lg'>
          <div ><IoMdHome size={24}/> </div>
          <div className='ml-3'>Home</div>
          </li>
          </Link>

          <li className='flex mt-2 hover:bg-gray-200 rounded-lg'>
          <div className='mt-1'><SiYoutubeshorts size={24}/> </div>
          <div className='ml-3'> Shorts</div>
          </li>
      </ul>
      <h1 className='pt-5 font-bold text-xl'>Explore</h1>
      {
        exploreIconNames.map(([iconName, label], index) => {
          const IconComponent = PiIcons[iconName];
          return (
            <Link to={`/explore/${label}`}  key={index}>
              <div className='flex items-center gap-4 py-2 pl-2 rounded-lg transition duration-200 ease-in-out hover:bg-gray-200'>
                {IconComponent && <IconComponent size={24} />}
                <span >{label}</span>
              </div>
            </Link>
            
          );
      })}

      <br></br>
      <hr></hr>

         <ul className='text-lg'>
         <li className='flex mt-4 hover:bg-gray-200 rounded-lg'>
          <div className='mt-1'><IoSettingsOutline size={24}/> </div>
          <div className='ml-3'> Settings </div>
          </li>

          <li className='flex mt-4 hover:bg-gray-200 rounded-lg'>
          <div className='mt-1'><RiFeedbackLine size={24}/> </div>
          <div className='ml-3'> Feedback</div>
          </li>

          <li className='flex mt-4 hover:bg-gray-200 rounded-lg'>
          <div className='mt-1'><TbHelp size={24}/> </div>
          <div className='ml-3'> Help</div>
          </li>
      </ul>
    </div>
  )
}

export default Sidebar;
