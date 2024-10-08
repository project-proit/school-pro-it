import React, { useState } from 'react';
const src = "https://vk.com/video_ext.php?oid=-48632629&id=456239146&hd=2&autoplay=1";

const VideoWindow = () => {
  const [position, setPosition] = useState({ x: 300, y: 4400 });
  
  const handleMouseDown = (event) => {
    const startPosition = { x: event.clientX, y: event.clientY };
    
    const handleMouseMove = (moveEvent) => {
      const deltaX = moveEvent.clientX - startPosition.x;
      const deltaY = moveEvent.clientY - startPosition.y;
      setPosition({ x: position.x + deltaX, y: position.y + deltaY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', () => {
      window.removeEventListener('mousemove', handleMouseMove);
    });
  };
  
  return (
    <div style={{ position: 'relative', left: `${position.x}px`, top: `${position.y}px` }} 
         onMouseDown={handleMouseDown}>
      <iframe
      width="853"
      height="480"
      src={src}
      title="Youtube Player"
      frameborder="0"
      allowFullScreen
      style={{ borderRadius: '30px' }} // Добавлен стиль borderRadius
    />
       
    </div>
  );
};

export default VideoWindow;