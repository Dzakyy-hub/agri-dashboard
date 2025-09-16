"use client";

import React from 'react';

const VideoStream = () => {
  const videoUrl = "https://www.w3schools.com/html/mov_bbb.mp4";

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <video
        className="w-full h-auto"
        controls
        autoPlay
        muted
        loop
        poster="https://via.placeholder.com/640x360.png?text=Live+Stream"
      >
        <source src={videoUrl} type="video/mp4" />
        Browser Anda tidak mendukung tag video.
      </video>
    </div>
  );
};

export default VideoStream;