import React from 'react'
import "../styles/Home.css"
import Profileimg from "../assets/bio-photo1.png"



function Home() {
  return (
    <div class="top-container">
    <h3>Web Developer</h3>
    <div>
      <img id='profile-pic' src={Profileimg} alt="cover"></img>
      <h2>Buildind smart solutions</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna ac placerat vestibulum lectus mauris ultrices eros in cursus. Augue lacus viverra vitae congue eu consequat ac felis donec. Id ornare arcu odio ut sem nulla pharetra diam. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum.</p>
    </div>
    <div className='row'>
      <h5>SKILLS/PROGRAMS</h5>
     
     <div className='column'> 
     <table>
        <tr>
          <td>
            <table>
              <tr>
               <td>
                HTML
               </td>
              </tr>
              <tr>
               <td>
                CSS
               </td>
              </tr>
              <tr>
               <td>
                Bootstrap
               </td>
              </tr>
              <tr>
               <td>
                JavaScript
               </td>
              </tr>
              <tr>
               <td>
                JQuery
               </td>
              </tr>
              <tr>
               <td>
                API's
               </td>
              </tr>
              <tr>
               <td>
                Node
               </td>
              </tr>
              <tr>
               <td>
                NoSql
               </td>
              </tr>
              <tr>
               <td>
                React
               </td>
              </tr>
              <tr>
               <td>
                MERN stack
               </td>
              </tr>
            </table>
          </td>
          <td>
            <table>
            <tr>
               <td>
                OOP & TDD
               </td>
              </tr>
              <tr>
               <td>
                Express
               </td>
              </tr><tr>
               <td>
                Express Handlebars
               </td>
              </tr><tr>
               <td>
                SQL
               </td>
              </tr><tr>
               <td>
                ORM
               </td>
              </tr><tr>
               <td>
                MVC
               </td>
              </tr><tr>
               <td>
                PWA's
               </td>
              </tr>
              <tr>
               <td>
                Ruby on Rails
               </td>
              </tr>
              <tr>
               <td>
                Figma
               </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
      </div>
     
 
    </div>
    </div>
   
  )
}

export default Home