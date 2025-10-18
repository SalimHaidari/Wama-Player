import { useState } from "react";
import ReactPlayer from "react-player";

const WamaPlayerReact = () => {
  const handleReady = () => console.log("✅ Player is ready!");
  const handlePlay = () => console.log("▶️ Video started");
  const handlePause = () => console.log("⏸️ Video paused");
  const handleEnded = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % playlist.length);
  };

  const playlist = [
    { title: "video 2", src: "/video1.mp4" },
    {
      title: "video 2",
      src: "https://www.youtube.com/watch?v=93Z8h93TKzk&list=RD93Z8h93TKzk&start",
    },
    { title: "video 3", src: "/video3.mp4" },
    { title: "video 4", src: "/video4.mp4" },
  ];
  const [currentIndex, setCurrentIndex] = useState(2);
  // Helper to go to next / previous video
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % playlist.length);
  };
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? playlist.length - 1 : prev - 1));
  };

  return (
    <div className="container text-center my-5">
      <h2 className="mb-4 fw-bold">
        🎥 React Player — Advanced Built-in Features
      </h2>

      <div className="ratio ratio-16x9 shadow-lg border rounded">
        <ReactPlayer
          src={`/videos/${playlist[currentIndex].src}`}
          controls
          playing
          muted
          playbackRate={1}
          onReady={handleReady}
          onPlay={handlePlay}
          onPause={handlePause}
          onEnded={handleEnded}
          width="100%"
          height="100%"
        />
      </div>
      <div className="mt-4 d-flex justify-content-center gap-3">
        <button className="btn btn-outline-primary" onClick={handlePrev}>
          ⏮ Prev
        </button>
        <button className="btn btn-outline-success" onClick={handleNext}>
          ⏭ Next
        </button>
      </div>

      <div className="mt-4">
        <p className="lead">
          <strong>🔥 Features:</strong> Auto-play, looping, 1.25x speed,
          picture-in-picture, light preview, multiple sources.
        </p>
      </div>
    </div>
  );
};

export default WamaPlayerReact;
