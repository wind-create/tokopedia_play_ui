import React from "react";

const Video = ({ id, title, img_url }) => {
  return (
    <a href={`/play/${id}`} className="relative flex w-fit">
      <div className="absolute bottom-0 right-0 z-10 w-full px-3 pt-12 pb-6 bg-gradient-to-t from-tp-sd-dark-8 to-transparent">
        <h3 className="text-base font-medium text-center line-clamp-2 max-h-14">
          {title}
        </h3>
      </div>
      <img
        src={img_url}
        alt={title}
        className="relative w-[206px] h-[366px] object-cover rounded-lg"
      />
    </a>
  );
};

export default Video;
