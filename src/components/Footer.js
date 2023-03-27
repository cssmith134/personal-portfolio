import React from 'react'
import "../styles/Footer.css"
import LinkedInIcon from "@material-ui/icons/LinkedIn";


function Footer() {
  return (
    <div className='footer'>
      <h2>Get in touch</h2>
        <div className='socialMedia'><LinkedInIcon/></div>
        <div> <a href='mailto: cssmith134@gmail.com'>email</a>
        <a href='https://www.linkedin.com/in/coopersmith1993/'>LinkedIn</a></div> 
    </div>
  )
}

export default Footer