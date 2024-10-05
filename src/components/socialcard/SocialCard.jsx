import React from 'react';
import './SocialCard.css';
const SocialCard = () => {
  return (
    <div className="social-card">
      <div className="card">
        <h2>Team404 - команда разработчиков ЮФУ</h2>
        <p>@team404errornf</p>
        <div className="qrcode">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_Wikipedia.svg/1200px-QR_code_for_Wikipedia.svg.png" alt="QR-код" />
        </div>
        <p>Откройте камерой VK</p>
        <button>Подписаться</button>
      </div>
      <div className="card">
        <h2>Team404 - команда разработчиков ЮФУ</h2>
        <p>@team404errornf</p>
        <div className="qrcode">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_Wikipedia.svg/1200px-QR_code_for_Wikipedia.svg.png" alt="QR-код" />
        </div>
        <p>Откройте камерой VK</p>
        <button>Подписаться</button>
      </div>
    </div>
  );
};

export default SocialCard;