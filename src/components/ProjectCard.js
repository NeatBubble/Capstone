import React from 'react';

export default function ProjectCard({name, url, image}) {
  return (
    <div id="projectCard">
      <a href={url} target="_blank">
        <div id="projectCardContent">
        <img src={image} alt={name} id="projectCardImage" />
        <h3>{name}</h3>
        </div>
      </a>
    </div>
  );
}