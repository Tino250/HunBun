import React from "react";
import "./hunbun.css"
import h from "../Images/H.png"
function Hun() {
  return (
    <div>
      <article className="hun-cta">
        <img 
          src={h} 
          alt="Bluetit" 
          className="hun-cta__image"
        />
        <div className="hun-cta__text-column">
          <h2 className="hun-cta__heading">Backstory</h2>
          <p className="hun-cta__description">

          Hun,She’s totally in love with sausage dogs 🐾, and her taste in food is as awesome as she is! Whether it's pizza, sushi, or some delicious pesto pasta with feta cheese and tomatoes, she's always up for a tasty treat. She also loves mashed potatoes with chicken breast schnitzel — a real foodie at heart! When she’s not indulging in her favorite dishes, she’s dreaming of law school and diving into the world of F1. But the best part? She loves spending time with her fluff 💕. Oh, and She can’t wait to explore the Nordic countries one day! 
          <br />
          <span id="multi-color">HUN:He loves Cookies</span>
          </p>
          <a href="https://www.instagram.com/i4r1na/" target="blank" className="hun-cta__link">
            Contact Hun
          </a>
        </div>
      </article>
    </div>
  );
}

export default Hun;