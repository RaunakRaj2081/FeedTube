import React from 'react'

const ChatMessage = ({name , message}) => {
  return (
    <div className='flex items-center bg-slate-100 shadow-sm p-2'>
      <img className="h-8" alt="user" src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"></img>
      <span className='px-2 font-bold'>{name}</span>
      <span>{message}</span>
    </div>
  )
}

export default ChatMessage;
