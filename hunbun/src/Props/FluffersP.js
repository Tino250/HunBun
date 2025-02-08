import React, { useRef } from 'react'
import Hun from '../Components/Hun'
import Bun from '../Components/Bun'
import pop from "../Audio/pop.wav"
function FluffersP({name,bio,height,dob,bY,bM,bD,pfp,id}) {

  const[moreInfo,setMoreInfo]=React.useState(false)

  function toggleInfo(){
    setMoreInfo(prev=>!prev)
    if(scaryRef.current){
      scaryRef.current.play()
    }
  }
  const scaryRef=useRef(null)





  const today=new Date()
  
  const birthYear=bY
  const birthMonth=bM
  const birthDay=bD

  const currentYear=today.getFullYear()

  const thisYearBirthday=new Date(currentYear,birthMonth-1,birthDay)  //-1 because months in js are starting from0


  let age=currentYear-birthYear


  if(today<thisYearBirthday){
    age-=1
  }

  return (
    <>
    <audio ref={scaryRef}>
      <source src={pop} />
    </audio>
            <div  className="fluffers-card-container">
          <img className="fluffers-hero-image" src={pfp} alt="Spinning glass cube"/>
        <main className="fluffers-main-content">
          <h1 id="multi-color">{name}</h1>
          <p>{bio}</p>
          <div className="fluffers-flex-row">
            <div className="fluffers-coin-base">
            <i id='hunbun-i' class="fa-solid fa-spider"></i>
              <h2>Height:{height}m</h2>
            </div>
            <div className="fluffers-time-left">
            <i  id='hunbun-i' class="fa-brands fa-pagelines fa-lg"></i>
              <p>Age:{age}</p>
            </div>
          </div>
        </main>
        <div className="fluffers-card-attribute">
        <i id='hunbun-info' onClick={toggleInfo} class="fa-solid fa-person-circle-plus fa-lg"  ></i>
          <p>Date of birth:{dob}</p>
        
        </div>
      {moreInfo && id==1 && <Bun />}
      {moreInfo && id==2 && <Hun />}
      </div>
    </>
  )
}

export default FluffersP
