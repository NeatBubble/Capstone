import React from 'react';

function Navigation({siteName}) {
    return (
        <div>
            <nav class="navbar">
                 <div class="logo">
                     <h1>{siteName}</h1>
                  </div>
                   <ul class="nav-links">
                      <li><a href="#">Home</a></li>
                      <li><a href="#about">About</a></li>
                      <li><a href="#skillSet">Skills</a></li>
                      <li><a href="#projectGalleryContainer">Projects</a></li>
                      <li><a href="./images/Pabalan Resume.pdf" target="_blank">Resume</a></li>
                   </ul>
    </nav>
      </div>
    );
  }

export default Navigation;