import React from 'react';
import "./fluffers.css";
import FluffersP from './Props/FluffersP';
<<<<<<< HEAD
import hun from "./Images/pfpH.png"
import bun from "./Images/pfpB.png"
=======


>>>>>>> 882afef21a18358fde1dca95063f1835297c42bd
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
<<<<<<< HEAD
            pfp={bun}
=======
            pfp="../public/Images/pfpB.png"
>>>>>>> 882afef21a18358fde1dca95063f1835297c42bd
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
<<<<<<< HEAD
            pfp={hun}
=======
            pfp="../public/Images/pfpH.png"
>>>>>>> 882afef21a18358fde1dca95063f1835297c42bd
        />


      </div>
    </div>
  );
}

export default Fluffers;
