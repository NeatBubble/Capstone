import React from 'react';

function SkillItem({skillName}) {
  return (
    <div id="#skillItem" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '20px'}}>
      <img src="./images/Icon.png"/>
      <p>{skillName}</p>
    </div>
  )
}

export default SkillItem;