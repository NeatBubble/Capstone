import React, { useState } from 'react';

export default function LikeButton({link}) {

  return (
    <div>
      <a href={link} target="_blank">
         <button>
            Download My Resume
         </button>
      </a>
    </div>
  );
}