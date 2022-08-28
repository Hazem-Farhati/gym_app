import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import '../styles/exerciceListeDetails.css'
import { FcClock,FcRefresh } from "react-icons/fc";

const ExerciceListeDetails = ({ exercice }) => {
  const { id } = useParams();
  const [show, setShow] = useState(false)
  return (
    <div className='details-container'>
      {exercice.filter((el) => parseInt(id) === el.id).map((ex, i) =>
        <div >
            <div className='title-image '  onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
            <img  src={ex.poster} alt="image" />
            {show? <div className='hov'>
           <h1>{ex.title}</h1>
           <div className='nbr-t'>
           <FcRefresh className='icons-log'/><h3>{ex.nbr} {" Times"}</h3>
            <FcClock className='icons-log'/><h3> {ex.time} </h3> 
               </div>
          </div>: null}
          </div>
          
          
          
          <div className='desc'>
          <div className='video'>
          <iframe 
          width="500" height="238"
            src={ex.video} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
          </iframe>
          </div>
            <h2>{ex.description}</h2></div>
          
          
        
        </div>
      )}
    </div>
  )
}

export default ExerciceListeDetails