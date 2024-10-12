import React, { useState } from 'react';
import "./VideoBlock.css";

const src = "https://vk.com/video_ext.php?oid=-48632629&id=456239146&hd=2&autoplay=1";

const VideoBlock = () => {

    const [position, setPosition] = useState({ x: 0, y: 0 }); // В vw

    const handleMouseDown = (event) => {
        const startPosition = { x: event.clientX, y: event.clientY };
        
        const handleMouseMove = (moveEvent) => {
            const deltaX = moveEvent.clientX - startPosition.x;
            const deltaY = moveEvent.clientY - startPosition.y;
            setPosition((prev) => ({
                x: prev.x + (deltaX / window.innerWidth) * 100, // Преобразуем в vw
                y: prev.y + (deltaY / window.innerHeight) * 100, // Преобразуем в vh
            }));
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', () => {
            window.removeEventListener('mousemove', handleMouseMove);
        });
    };
  return (
    <div id='Video' className='container-videoblock'>
        <div className='video-container' style={{ position: 'relative', left: `${position.x}vw`, top: `${position.y}vh` }} 
            onMouseDown={handleMouseDown}>
            <iframe
                width="853"
                height="480"
                src={src}
                title="Youtube Player"
                frameborder="0"
                allowFullScreen
                style={{ borderRadius: '30px' }} // Добавлен стиль borderRadius
                className="video-iframe"
            />
        </div>
        <div className='title-video'>
            <h2>Узнайте о Школе ПРО IT подробнее за 1 минуту!</h2>
        </div>
    </div>
  )
}

export default VideoBlock
