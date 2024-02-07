import React, { useState } from "react";

const commentsData = [
  {
    name: "Raunak Raj",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Raunak Raj",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Raunak Raj",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Raunak Raj",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Raunak Raj",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Raunak Raj",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    name: "Raunak Raj",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [
                      {
                        name: "Raunak Raj",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Raunak Raj",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Raunak Raj",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Raunak Raj",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Raunak Raj",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Raunak Raj",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  // Disclaimer: Don't use indexes as keys
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {

  const [text,setText] = useState("...show more");
  const[showFullContent , setShowFullContent] = useState(false);

  const handleReadMoreClick = () => {
    setShowFullContent(!showFullContent);
    if(showFullContent){
      setText("...show more");
    }
    else{
      setText("...show less");
    }
    
  }
  return (
    <div className="m-5 p-2 bg-gray-200 rounded-lg w-[800px] ml-12">
      <h1 className="text-2xl">Comments: self made momments ...</h1>
      { showFullContent && 
        <CommentsList comments={commentsData} />}
      <button className='text-cyan-800 font-semibold' onClick={handleReadMoreClick}> {text}</button>
    </div>
  );
};

export default CommentsContainer;