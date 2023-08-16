import React from "react";

const CommentsCard = ({ username, comment }) => {
  return (
    <div className="flex py-1">
      <h3 className="text-sm font-[450] text-gray-400 mr-1">@{username}</h3>
      <p className="text-sm">{comment}</p>
    </div>
  );
};

export default CommentsCard;
