import React, { useState } from 'react'
import '../styles/navbar.css'
import { BiSearchAlt } from "react-icons/bi";
import { Link } from 'react-router-dom'
const Navbar = ({ setText }) => {
  const [search, setSearch] = useState(false)
  return (
    <>
      <div className='first-bar'>
        <div className='logo'>
        <img src="/images/logo.png" alt="tn" />
      </div>
        <ul>
          <Link to="/"> <li>Home</li></Link>
          <Link to='/exercices'>
            <li>exercices</li>
          </Link>
         
          <Link to='/posts'>
            <li>Post</li>
          </Link>
          <Link to='/about'>
            <li>About us</li>
          </Link>
          <Link to='/login'>
            <li>Log in</li>
          </Link>
          <BiSearchAlt className='search' onClick={()=>setSearch(!search)}/>
         
        </ul>
      
      {search?
       <input
        className='search-container'
        type="text"
        placeholder="Search Your exercices"
        id='texte'
        onChange={(e) => setText(e.target.value)}
      />:
       null
      }
      
   


      {/* <h1 className='gym4'>Yes {<br/>}You Can </h1> */}
      <div className='words-body'>
        <div className="words word-1">
          <span>Y</span>
          <span>e</span>
          <span>s</span>
          <span>{"  "}</span>
          <span>Y</span>
          <span>o</span>
          <span>u</span>
        </div>
        <div className="words word-3">
          <span>C</span>
          <span>A</span>
          <span>N</span>
        </div></div>

        </div>
        <div className='full'>
          <video autoPlay loop muted playsInline className='video'>
            <source src='/video/fit.mp4' type='video/mp4' alt="video" />
          </video>
        </div>



    </>
  )
}

export default Navbar