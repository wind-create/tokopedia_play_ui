import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../config/Api";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import ReactPlayer from "react-player";
import NavDetail from "./components/Nav/NavDetail";
import Products from "./components/Products";
import Comments from "./components/Comments";

const Detail = () => {
  const { id } = useParams();
  const [video, setVideo] = useState({});

  const getVideo = async () => {
    axios
      .get(`${API_URL}/videos/${id}`)
      .then((response) => {
        setVideo(response.data.data[0]);
        console.log(response.data.data[0]);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getVideo();
  }, []);

  return (
    <div className="flex flex-col flex-wrap min-h-screen px-4 text-white bg-tp-dark min-w-screen">
      <NavDetail title={video.title} />
      <div className="flex gap-8 justify-between">
        <Products video_id={id} />
        <div className="flex justify-center lg:w-[800px] lg:h-[450px]">
          <ReactPlayer
            url={video.video_url}
            playing={true}
            width="100%"
            height="100%"
          />
        </div>
        <Comments video_id={id} />
      </div>
    </div>
  );
};

export default Detail;
