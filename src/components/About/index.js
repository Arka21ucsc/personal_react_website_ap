import './index.scss'
import ME from '../../assets/images/gradpic.jpg'
const About = () => {
    return (
        <div className='container about-page'>
            <div className='text-zone'>
               <h1>
               About Me</h1>
               <div>
               <img className='gradpic'
              src={ME}
              alt="Grad_pic"
            />
               
               <p>Innovative and results-driven professional currently pursuing a master’s degree in Computer Science and Engineering coupled with capacity for implementing theoretical insights acquired from BS in Computer Science. Tech-savvy individual with hands-on experience within all facets of software engineering, database management, and full-stack development. Capable of managing and leading various software development projects from inception to completion within defined scope, quality, and timeline.  Skilled in troubleshooting complex technical issues through sound and creative engineering. Ambitious to start a challenging career within a fast-moving corporation offering genuine career progression opportunities. </p>
               <p>Research Interests Include Computer Security, Machine Learning, and Artificial Intelligence </p>
               </div>
             
            </div>
        </div>
    )
}

export default About