import { useState } from "react";
import ReactPlayer from "react-player";
import "@mux/mux-video";
import {
  MediaController,
  MediaControlBar,
  MediaPlayButton,
  MediaSeekBackwardButton,
  MediaSeekForwardButton,
  MediaTimeRange,
  MediaTimeDisplay,
  MediaVolumeRange,
  MediaMuteButton,
  MediaFullscreenButton,
} from "media-chrome/react";

const WamaPlayerMediaChrome = () => {
  const playlist = [
    { title: "Local Video 1", src: "/videos/video1.mp4" },
    {
      title: "video 2",
      src: "https://www.youtube.com/watch?v=KLuTLF3x9sA",
    },
    {
      title: "video 2",
      src: "https://www.youtube.com/watch?v=xeXV1KoX034",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleEnded = () => {
    setCurrentIndex((prev) => (prev + 1) % playlist.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % playlist.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? playlist.length - 1 : prev - 1));
  };

  return (
    <div className="container text-center my-5">
      <h2 className="fw-bold mb-4">Wama Player — Custom Media Chrome UI</h2>

      <MediaController
        style={{
          width: "100%",
          aspectRatio: "16/9",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
        }}
      >
        <ReactPlayer
          slot="media"
          src={playlist[currentIndex].src}
          playing
          controls={false}
          width="100%"
          height="100%"
          onEnded={handleEnded}
        />

        <MediaControlBar>
          <MediaPlayButton />
          <MediaSeekBackwardButton seekOffset={10} />
          <MediaSeekForwardButton seekOffset={10} />
          <MediaTimeRange />
          <MediaTimeDisplay showDuration />
          <MediaMuteButton />
          <MediaVolumeRange />
          <media-pip-button></media-pip-button>
          <MediaFullscreenButton />
          <media-live-button></media-live-button>
          <media-airplay-button></media-airplay-button>
        </MediaControlBar>
      </MediaController>

      <div className="mt-4 d-flex justify-content-center gap-3">
        <button className="btn btn-outline-primary" onClick={handlePrev}>
          Prev
        </button>
        <button className="btn btn-outline-success" onClick={handleNext}>
          Next
        </button>
      </div>

      <div className="mt-3">
        <p className="lead">
          <strong>Features:</strong> Custom controls, auto-next video, 10s skip,
          volume control, fullscreen, and YouTube/local source support.
        </p>
      </div>
    </div>
  );
};

export default WamaPlayerMediaChrome;
