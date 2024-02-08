import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import {addMessage} from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from '../utils/helper';

const LiveChat = () => {
    const dispatch = useDispatch();
    
    const ChatMessages = useSelector((store) => store.chat.messages);

    const [liveMessage , setLiveMessage] = useState("");

    useEffect(() => {
        const i = setInterval(() => {
            // API polling
            dispatch(
                addMessage({
                name : generateRandomName(),
                message : makeRandomMessage(20) + "🚀",
            })
            );

        },1500);

        return () => clearInterval(i);
    })
  return (
    <>
    <div className='h-[400px] ml-2 p-2 border border-black bg-slate-100 rounded-lg w-[410px] overflow-y-scroll flex flex-col-reverse'>
      <div>
      {
        ChatMessages?.map((chat,index) => 
        (<ChatMessage key={index}
            name={chat.name} 
            message={chat.message} />))
      }
      </div>
    </div>

    <form 
    className='w-full p-2 ml-2 border border-black'
    onSubmit={(e) => {
        e.preventDefault();
        dispatch(
            addMessage ({
                name : "Raunak Raj" ,
                message : liveMessage ,
            })
        );
        setLiveMessage("");
    }}>

        <input type="text" placeholder='Chat...' value={liveMessage}
        className='w-72 border px-2'
        onChange={(e) => {setLiveMessage(e.target.value)
        }}/>

        <button className='px-2 mx-2 bg-green-100'>Send</button>
    </form>

    </>
    
  )
}

export default LiveChat;
