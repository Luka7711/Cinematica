import { Fragment, useState, useEffect } from "react";
import instance from "../../../apis/movies";

const Trailer = ({ movieid }) => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    displayTrailer();
  }, [movieid]);

  const displayTrailer = async () => {
    let splitId = movieid.split("/");
    let response = await instance.getVideoId(
      `get-videos?tconst=${splitId[2]}&limit=25&region=US",`
    );
    if (response.status !== 200) return;
    console.log(response.data.resource);
    let videoId = response.data.resource.videos[0].id;
    videoId = videoId.split("/");

    response = await instance.getVideoSrc(
      `/get-video-playback?viconst=${videoId[2]}&region=US`
    );
    let videoUrls = response.data.resource.encodings;
    if (response.status !== 200) return;
    console.log(videoUrls);
    for (let videoQuality of videoUrls) {
      if (videoQuality.definition === "720p") {
        setUrl(videoQuality.playUrl);
        break;
      }
    }
    return;
  };

  let content = (
    <video
      style={{ margin: "0 auto" }}
      width="750"
      height="500"
      controls
      autoPlay
    >
      <source src={url} type="video/mp4" />
    </video>
  );

  return <div style={{ display: "flex" }}>{url ? content : null}</div>;
};

export default Trailer;
