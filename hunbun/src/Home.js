import React from 'react'
import "./home.css"
import home from "./Images/Image Background Orange Minimal Phone Wallpaper (1).png"
function Home() {



  return (
    <>
  <section class="home-info-container">
    <div class="home-info">
      <h1>A FLUFFY APP</h1>
      <h2>FOR HUN BUN</h2>
      <div class="home-p">
             <p>This app is a special Valentine’s Day gift created with love for Fluff. 💖 It’s a heartfelt way to show how much she means, filled with love, care, and plenty of huggies and kisses just for her! 😘💕</p>
      </div>
      <div class="btn-container">
        <button>
          <a id='home-link' target='blank' href='https://www.instagram.com/t1n0____/'>Contact The fluff</a>
        </button>
      </div>
    </div>
    <div class="home-image">
      <img src={home} alt="Background" />
    </div>
  </section>
    </>
  )
}

export default Home
