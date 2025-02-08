import React, { useRef } from 'react'
import "./calendar.css"



function Calendar() {

  const audioref=useRef(null)

  function anniversary(){
    document.getElementById("info-image").src="Images/30.png"
    if(audioref.current){
      audioref.current.play()
}
  }
  function date(){
    document.getElementById("info-image").src="Images/12.png"
    if(audioref.current){
          audioref.current.play()
    }

  }
  function xmas(){
    document.getElementById("info-image").src="Images/25 (2).png"
    if(audioref.current){
      audioref.current.play()
}
  }
  function v(){
     document.getElementById("info-image").src="Images/14.png"
     if(audioref.current){
      audioref.current.play()
}
  }
  

  function playAudio(){

  }
  return (
    <>
    <audio ref={audioref}  id="audio">
      <source src='Audio/mixkit-fairy-magic-sparkle-871.wav'  />
    </audio>
    <h1 id='c-h1'>This page is dedicated to important events in our life fluffs</h1>
      <div id='event-container'>
        <img id='info-image' src="Images/30.png" alt='doamne ajuta' />
      </div>


      <div id='calendar-footer'>

        <button onClick={anniversary} id='30' >
        <i class="fa-solid fa-cake-candles fa-2xl"></i>
          </button>                    
        <button onClick={date}  id='12' >
        <i class="fa-solid fa-heart-circle-plus fa-2xl"></i>
        </button>
        <button onClick={xmas} id='25' >
        <i class="fa-solid fa-gifts fa-2xl"></i>
        </button>
        <button onClick={v} id='14' >
        <i class="fa-solid fa-dove fa-2xl"></i>
        </button>
         
      </div>
    </>
  )
}

export default Calendar
