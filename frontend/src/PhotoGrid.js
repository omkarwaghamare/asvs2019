// src/PhotoGrid.js
import React from 'react';
import './PhotoGrid.css';

const PhotoGrid = () => {
  const photos = Array.from({ length: 20 }, (_, i) => `images/photo${i + 1}.jpg`);

  return (
    <div className="grid-container">
      {photos.map((photo, index) => (
        <div key={index} className="grid-item">
          <img src={photo} alt={`person ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;
