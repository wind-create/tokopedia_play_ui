import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../config/Api";
import Nav from "../../components/Nav";
import Video from "./components/Video";

const Home = () => {
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    axios
      .get(`${API_URL}/videos`)
      .then((response) => {
        setVideos(response.data.data);
        console.log(response.data.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="bg-tp-dark min-w-screen min-h-screen text-white flex flex-col flex-wrap px-2">
      <Nav />
      <div className="grid grid-cols-1 min-[428px]:grid-cols-2 min-[666px]:grid-cols-3 min-[892px]:grid-cols-4 min-[1118px]:grid-cols-5 min-[1144px]:grid-cols-6 min-[1570px]:grid-cols-7 gap-4 my-6 self-center">
        {videos.map((video) => (
          <Video
            id={video._id}
            title={video.title}
            img_url={video.img_url}
            key={video._id}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
