import React from 'react';
import LikeButton from './LikeButton';

function MyBackground({image, description, resume, alt, name}) {
    return (
        <div id="about">
            <div>
                <h2>All About Me</h2>
            </div>
            <div id="contentBlock">
            <div id="aboutText">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <h3>Hey y'all! My name is</h3>
                    <h4>{name}</h4>
                </div>
                <p>{description}</p>
                <LikeButton
                link="./images/Pabalan Resume.pdf"
                />
            </div>
            <div id="aboutImg">
                <img src={image} alt={alt}></img>
            </div>
            </div>
      </div>
    );
  }

export default MyBackground;