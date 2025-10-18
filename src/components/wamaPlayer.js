import { type } from "@testing-library/user-event/dist/type";
import React, { useRef } from "react";

const WamaPlayer = () => {
  const videoRef = useRef(null);
  const video = videoRef.current;
  const handlePlay = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
    }
  };
  const handlePause = () => {
    if (video.played) {
      video.pause();
    }
  };
  const handleFull = () => {
    video.requestFullscreen();
  };

  return (
    <div className="container text-center mt-5">
      <h3>Wama-Player</h3>
      <video
        ref={videoRef}
        width="640"
        height="360"
        controls
        className="border border-secondary rounded"
      >
        <source src="/videos/video1.mp4" type="video/mp4" />
        <source src="/videos/video2.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <div className="mt-3">
        <button onClick={handlePlay} className="btn btn-primary mx-2">
          Play
        </button>
        <button onClick={handlePause} className="btn btn-primary mx-1">
          Pause
        </button>
        <button onClick={handleFull} className="btn btn-primary mx-1">
          Full Screen
        </button>
      </div>
    </div>
  );
};

export default WamaPlayer;
