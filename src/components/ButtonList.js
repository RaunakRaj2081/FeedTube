import React from 'react'
import Button from './Button';
import { useSelector } from 'react-redux';

const ButtonList = () => {
  const theme = useSelector((store) => store.app.isDarkMode);
  return (
    <div className={`flex pl-2 gap-5 ml-3 relative ${theme === true ?'bg-black text-white' : "" }`}>
      <Button name="All"/>
      <Button name="Gaming"/>
      <Button name="Songs"/>
      <Button name="Live"/>
      <Button name="Cricket"/>
      <Button name="Soccer"/>
      <Button name="Cooking"/>
      <Button name="Movies"/>
      <Button name="Comedy"/>
      <Button name="Fitness"/>
    </div>
  )
}

export default ButtonList;
