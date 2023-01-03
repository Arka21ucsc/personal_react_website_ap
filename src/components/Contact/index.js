import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import {
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
const Contact = () => {
    return (
        <div className='container about-page'>
            <div className='text-zone'>
               <h1>
               Contact Me</h1>
               <div className='socials_box'>
               <div className='inner_box'>
                <a href ='mailto:arka.pal.0521@gmail.com' className='email'>
                <h3> Arka.Pal.0521@gmail.com </h3>
                </a>
              
                <a
            href="https://www.linkedin.com/in/arka-pal/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="sicon1"
            />
          </a>
          <a
            href="https://github.com/Arka16"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="sicon2"
            />
          </a>
          
               </div>
               </div>
             
            </div>
        </div>
    )
}

export default Contact