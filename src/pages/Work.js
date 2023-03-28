import React from 'react';
import "../styles/Work.css";
import Guitarpng from "../assets/guitar-box.png"

function Work() {
  return (
    <div className='top-container'>
      <h5>LATEST PROJECTS</h5>
      <div className='row'>
      <div className='column'><img src={Guitarpng}></img>
      <h2>Travlers</h2>
      <p> few  fdew d e qd e fewdfe  few</p>
      </div>
      <div className='column'><img src={Guitarpng}></img>
      <h2>Guitar Shop</h2>
      <p> few  fdew d e qd e fewdfe  few</p>
      </div>
      <div className='column'><img src={Guitarpng}></img>
      <h2>Brewers</h2>
      <p> few  fdew d e qd e fewdfe  few</p>
      </div>
      </div>
  
    </div>
  )
}

export default Work