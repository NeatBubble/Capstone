import React from 'react';

function HeroImage({image}) {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div id="heroBackground"></div>
    </section>
  );
}

export default HeroImage;