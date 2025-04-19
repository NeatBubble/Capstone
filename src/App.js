import React from 'react';
import "./App.css";
import Navigation from "./components/Navigation";
import HeroImage from "./components/HeroImage";
import MyBackground from "./components/MyBackground";
import SkillSet from "./components/SkillSet";
import ProjectGallery from "./components/ProjectGallery";
import Footer from "./components/Footer";

function App() {

  return (
    <div>
      <Navigation 
      siteName="Makayla Pabalan"
      />
      <HeroImage 
        image="images/header.gif"
      />
      <MyBackground
        name="Makayla Pabalan"
        description="I'm a Junior UX Designer who loves creating meaningful digital experiences. I'm currently pursuing a degree in Digital Media at Gulf Coast State College, where I'm building a strong foundation in user-centered design, prototyping, and visual storytelling.
        As a designer, I’m passionate about solving problems with empathy, clarity, and creativity. I enjoy diving into research, sketching out ideas, and refining details until everything feels just right. Whether I'm wireframing a new feature or collaborating with others, I’m always focused on designing experiences that are intuitive, accessible, and impactful.
        Outide of design, I’m an avid reader. Books keep me inspired and remind me of the power of storytelling and human connection. I’m always looking for opportunities to learn, grow, and connect with others who are just as excited about design as I am. Thanks for stopping by—I’m excited to share my journey with you!"
        resume="images/Pabalan Resume.pdf/"
        image="images/MainPic.JPG"
        alt="A picture of me"
      />
      <SkillSet/>
      <ProjectGallery />

      <Footer />
    </div>
  );
}

export default App;