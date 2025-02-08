import React from 'react';
import "./hunbun.css"; // Make sure to use the updated CSS file
import b from "../Images/B.png"
function Bun() {

  return (
    <div>
      <article className="hun-cta">
        <img 
          src={b}
          alt="Bluetit" 
          className="hun-cta__image"
        />
        <div className="hun-cta__text-column">
          <h2 className="hun-cta__heading">Backstory</h2>
          <p className="hun-cta__description">

         Bun, He is  all about hitting the gym with weightlifting, swimming laps, and enjoying the thrill of motorsports. But when he is not working out or racing, he's spending time with hisfluff ❤️. Oh, and let's not forget my absolute favorite foods — a juicy smash burger, a big slice of pizza, a scoop of Ben & Jerry's ice cream, and of course, steak with potatoes
         <br />
         <span id="multi-color">BUN: She loves Cookies</span>
         
          </p>
          <a href="https://www.instagram.com/t1n0____/" target="blank" className="hun-cta__link">
            Contact Bun
          </a>
        </div>
      </article>
    </div>
  );
}

export default Bun;





