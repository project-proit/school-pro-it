import React, { useState } from 'react';
import './VideoBlock.css';
const src = "https://www.youtube.com/embed/XirDtoI4X7o?si=c5nWFaF5Fr42zFFN";
const Video = () => {
  return (
    <iframe
      width="560"
      height="315"
      src={src}
      title="Youtube Player"
      frameborder="0"
      allowFullScreen
    />
  );
};

export default Video;