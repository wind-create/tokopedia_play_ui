import React from "react";

const CommentsInput = ({ value, setValue, placeholder }) => {
  return (
    <input
      type="text"
      id="first_name"
      className="bg-transparent border border-gray-600 text-white text-sm rounded-lg focus:ring-gray-600 focus:border-gray-500 block w-full p-1.5"
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      required
    />
  );
};

export default CommentsInput;
