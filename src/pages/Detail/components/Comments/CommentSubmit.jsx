import React from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

const CommentSubmit = ({ validation, handleClick }) => {
  return validation() ? (
    <button onClick={handleClick} className="px-4 bg-[#41b549] rounded-lg">
      <PaperAirplaneIcon className="w-6 h-6" />
    </button>
  ) : (
    <button disabled className="px-4 bg-gray-500 rounded-lg">
      <PaperAirplaneIcon className="w-6 h-6" />
    </button>
  );
};

export default CommentSubmit;
