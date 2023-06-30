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
               
               <p>Highly accomplished recent graduate from the University of California, Santa Cruz, with a Master's of Science in Computer Science, graduating with a perfect 4.0 GPA. I am a motivated and innovative professional with a strong ability to translate theoretical insights into practical solutions. My extensive hands-on experience spans across software engineering, data science, and full-stack development, showcasing my comprehensive understanding of the field. </p>

<p> My track record demonstrates my proficiency in successfully managing and leading software development projects from inception to completion, ensuring adherence to defined scope, quality, and timelines. I excel in troubleshooting complex technical issues by leveraging my sound and creative engineering skills. </p>

<p> Driven by ambition, I am eager to embark on a challenging career within a dynamic and fast-paced corporation that provides genuine opportunities for career progression. I am dedicated to making a significant impact and contributing to the growth and success of the organization. </p>
               <p>Research Interests Include Computer Security, Machine Learning, and Artificial Intelligence </p>
               </div>
             
            </div>
        </div>
    )
}

export default About