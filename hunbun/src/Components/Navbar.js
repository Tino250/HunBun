import React, { useRef } from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'
import logo from "../Images/logo.png"
import hard from "../Audio/hard.wav"
import pop from "../Audio/pop.wav"


function Navbar() {
  const scaryRef=useRef(null)
function playAudio(){
  setSiderBar(prev=>!prev)
  if(scaryRef.current){
    scaryRef.current.play()
  }
}

const hardRef=useRef(null)
function playAudioHard(){
  setSiderBar(prev=>!prev)
  if(hardRef.current){
    hardRef.current.play()
  }
}


  const[siderBar,setSiderBar]=React.useState(false)
  function toggleSideBar(){
  playAudio()
  }


  

  function closeSideBar(){
    setSiderBar(false)
  }

  function home(){
    window.location.href="/"
  }
  return (

    <>

<audio ref={hardRef}>
      <source src={hard} />
    </audio>

<audio ref={scaryRef}>
    <source src={pop} />
    </audio>
      <nav>
        <i onClick={toggleSideBar} class="fa-solid fa-ellipsis-vertical fa-2xl"></i>
         
        <img onClick={home} className='logo' src={logo}  />
      </nav>
    
      <div  id={siderBar ? "visible":'sidebar'}>
        <div className='close-container'>
          <i onClick={playAudioHard}class="fa-regular fa-circle-xmark fa-2xl" id='close-i'></i>         
        </div>
        <div className='pages-container'>
        <div className='side-btns'>
            <h1>Pages</h1>
          </div>


         <div className='side-btns'>
         <i id='page-i'  class="fa-solid fa-people-robbery fa-2xl"></i>
         <Link onClick={playAudioHard} to="/fluffers">
          <button>
          Fluffers
          </button>
         </Link>

          </div> 


          <div className='side-btns'> 
            <i id='page-i' class="fa-regular fa-face-grin-hearts fa-2xl"></i>
            <Link onClick={playAudioHard} to="/fluff">
            <button>
            Fluffy
          </button>
          </Link>

          </div>


          <div className='side-btns'> 
          <i id='page-i' class="fa-solid fa-calendar-check fa-2xl"></i>
          <Link onClick={playAudioHard} to="/calendar">
          <button>
            Calendar
          </button>
          </Link>   
          </div>


          <div className='side-btns'> 
          <i id='page-i' class="fa-solid fa-house-flag fa-2xl" />
          <Link onClick={playAudioHard} to="/">
          <button>
            Home
          </button>
          </Link>   
          </div>

          <div className='side-btns'> 
          <i id='page-i' class="fa-solid fa-hotdog fa-2xl"></i>
          <Link onClick={playAudioHard} to="/gallery">
          <button>
            Gallery
          </button>
          </Link>   
          </div>



          

        </div>
        


      </div>
    </>
  )
}

export default Navbar
