import './index.scss'
import Tennis from '../../assets/images/Arka_tennis.jpg'
import Guitar from '../../assets/images/Arka_guitar.jpg'
import Workout from '../../assets/images/workout.jpg'
const Hobbies = () => {
    return (
        <div className='container about-page'>
            <div className='text-zone'>
               <h1>
               Hobbies</h1>
               <div>
                <div className='tennis'>
                <h4> Tennis </h4>
               <p>I have been playing tennis for 7 years. I have played in my High School Varisity Tennis Team for 4 years and played both singles and doubles. </p>
               <img className='hobbieimg1' src= {Tennis} alt=' tennis'/>
                </div>
                
                <div className='guitar'>
                <h4> Guitar </h4>
               <p> I have been playing Guitar for 10 years. I know how to play 4 different types of guitars, which include Hawaian Lap Steel Guitar, Electric, Acoustic, and Bass Guitars  </p>
               <img className='hobbieimg2' src= {Guitar} alt=' guitar'/>    
                </div>
                <div className='workout'>
               
               
               <h4> Working Out </h4>
               <p>  I currently developed a passion for working out. I have been working out consistently for an year, and try to go to the gym 3-5 times a week. Favorite excercises include bench press, tricep pushdowns, and lat pulldowns </p>
               <img className='hobbieimg3' src= {Workout} alt=' workout'/>
               </div>


               </div>
             
            </div>
        </div>
    )
}

export default Hobbies