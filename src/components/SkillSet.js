import React from 'react';
import SkillItem from "./SkillItem";

function SkillSet() {
  return (
    <div id="skillSet">
      <div id="skillImage">
        <img src="./images/BubblePic.png"/>
      </div>
      <div id="skillGroup">
         <h2>Super Skill Set</h2>
      <div id="skillGrid">
          <SkillItem skillName="UX Design" />
          <SkillItem skillName="Adobe XD" />
          <SkillItem skillName="Adobe Illustrator" />
          <SkillItem skillName="HTML & CSS" />
          <SkillItem skillName="JavaScript" />
          <SkillItem skillName="Communication" />
      </div>
      </div>
    </div>
  )
}

export default SkillSet;