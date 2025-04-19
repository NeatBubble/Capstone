import React from 'react';
import ProjectCard from "./ProjectCard";

function ProjectGallery() {
  return (
    <div id="projectGalleryContainer">
      <h2>Proud Projects</h2>
      <div id="projectCardGrid">
        <ProjectCard
          name="Tupelo Primary Care"
          image="./images/TupeloMockup.png"
          url="https://tupeloprimarycare.com/"
        />
        <ProjectCard
          name="River Landing RV Park"
          image="./images/RiverLandingMockup.png"
          url="https://riverlandingrvpark.com/"
        />
        <ProjectCard
          name="Portfolio Website"
          image="./images/PortfolioMockup.png"
          url="#"
        />
      </div>
    </div>
  );
}

export default ProjectGallery;