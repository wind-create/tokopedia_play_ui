import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";
import { API_URL } from "../../../../config/Api";
import CommentsCard from "./CommentsCard";
import CommentsInput from "./CommentsInput";
import CommentSubmit from "./CommentSubmit";
import "./index.css";

const Comments = ({ video_id }) => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [commentsData, setCommentsData] = useState([]);
  const [commentChanged, updateComment] = useReducer((x) => x + 1, 0);

  const getComments = async () => {
    await axios
      .get(`${API_URL}/comments/${video_id}`)
      .then((response) => {
        setCommentsData(response.data.data);
        setUsername("");
        setMessage("");
        console.log(response.data.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getComments();
  }, [commentChanged]);

  const submitComment = async (e) => {
    e.preventDefault();
    const data = {
      video_id: video_id,
      username: username,
      comment: message,
    };

    console.log(data);

    await axios
      .post(`${API_URL}/comments`, data)
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
    updateComment();
  };

  const validation = () => {
    if (username && message) return true;
    else return false;
  };

  return (
    <div className="bg-[#2B2B32] grow mb-4 flex flex-col justify-end rounded-md p-[10px]">
      <div className="flex flex-col justify-end custom-comments-container">
        {commentsData.map((comment) => (
          <CommentsCard username={comment.username} comment={comment.comment} />
        ))}
      </div>
      <form
        className="flex mt-2 gap-x-2"
        onSubmit={validation() && submitComment}>
        <div className="flex flex-col grow gap-y-2">
          <CommentsInput
            placeholder="username"
            value={username}
            setValue={setUsername}
          />
          <CommentsInput
            placeholder="message"
            value={message}
            setValue={setMessage}
          />
        </div>
        <CommentSubmit handleClick={submitComment} validation={validation} />
      </form>
    </div>
  );
};

export default Comments;
