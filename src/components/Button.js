import React from 'react'
import { useSelector } from 'react-redux';
const Button = ({name}) => {
  const theme = useSelector((store) => store.app.isDarkMode);
  return (
    <div>
      <button className={` px-5 py-2 bg-gray-100 rounded-lg ${theme === true ?'bg-gray-900 text-white' : "" }`}>{name}</button>
    </div>
  )
}

export default Button;
