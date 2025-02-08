import React, { useEffect, useRef } from "react";
import "./fluff.css"
import { Link } from "react-router-dom";
import img1 from "./Images/IMG_2763.jpg"
import img2 from "./Images/IMG_2764.jpg"
import img3 from "./Images/IMG_2696.jpg"
import img4 from "./Images/IMG_2771.jpg"
import audio from "./Audio/Taketones_CartoonVoice I Love You.wav"
import gif from "./Gifs/rose-6870_512.gif"
function Fluff() {
  const textRef = useRef(null); 
  const audioRef = useRef(null); 

  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    document.querySelectorAll(".hidden").forEach((e) => observer.observe(e));
    document.querySelectorAll("#wave").forEach((e) => observer.observe(e));
  }, []); // Runs once after component mounts

  // Function to change fonts every 200ms
  useEffect(() => {
    let fonts = ["Outfit", "Lobster", "Oswald", "Smooch Sans", "Lilita One"];
    let i = 0;

    function changeFont() {
      if (textRef.current) {
        textRef.current.style.fontFamily = fonts[i];
        i = (i + 1) % fonts.length; 
      }
      setTimeout(changeFont, 200);
    }

    changeFont();
  }, []); 


  function PlaySound() {
    if (audioRef.current) {
      audioRef.current.play();
      navigator.clipboard.writeText("Fluff");
    } else {
      console.error("Audio element not found");
    }
  }

  
  function topFunction() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div>
      {/* Audio element */}
      <audio ref={audioRef} id="myAudio">
        <source src={audio}  type="audio/ogg" />
      </audio>

      {/* Header section */}
      <section className="hidden" id="header">
        <h1 ref={textRef} id="text">Fluff</h1> {/* Assign ref to text */}
        <p>I love ya so much</p>
      </section>

      {/* Photo grid */}
      <section className="hidden" id="photo-grid">
        <h1 className="hidden">Fluffy... images?</h1>
        <br />
        <div className="photos">
          <div className="photo-item">
            <img onClick={PlaySound} className="hidden" alt="plm" src={img1} />
          </div>
          <div className="photo-item">
            <img onClick={PlaySound} className="hidden" alt="plms" src={img2} />
          </div>
          <div className="photo-item">
            <img onClick={PlaySound} className="hidden" src={img3} alt="HEHE" />
          </div>
          <div className="photo-item">
            <img onClick={PlaySound} className="hidden" src={img4} alt="CACA" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <section id="footer" className="hidden">
        <h1>
          <i className="fa-solid fa-heart" />
          O FLORICICA PENTRU <Link to="/fluffers">HUN BUN</Link>
          <i className="fa-solid fa-heart" />
        </h1>
        <img src={gif} alt="Animated Rose" />
      </section>

      {/* Scroll-to-top button */}
      <button className="hidden" onClick={topFunction} id="myBtn" title="Go to top">
        <i  className="fa-solid fa-circle-arrow-up fa-xl"></i>
      </button>
    </div>
  );
}

export default Fluff;
