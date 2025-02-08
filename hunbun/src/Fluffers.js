import React from 'react';
import "./fluffers.css";
import FluffersP from './Props/FluffersP';

function Fluffers() {
  return (
    <div>
      <div className='fluffers-container'>
        <FluffersP
            id={1}
            name="Bun"
            bio="Just a chill guy"
            height="1.81"
            bD={25}
            bY={2006}
            bM={5}
            dob={"25/5/2006"}
            pfp="public/Images/pfpB.png"
        />
        <FluffersP
            id={2}
            name="Hun"
            bio="Just a chill gal"
            height="1.69"
            bD={24}
            bY={2006}
            bM={4}
            dob={"24/4/2006"}
            pfp="Images/pfpH.png"
        />


      </div>
    </div>
  );
}

export default Fluffers;
