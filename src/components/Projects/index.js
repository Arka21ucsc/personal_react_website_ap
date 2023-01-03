import './index.scss'
import Bitcoin from '../../assets/images/bitcoin.png'
import KVS from '../../assets/images/kvs.jpg'
import WaveStyled from '../../assets/images/wavestyled.png'
const Projects = () => {
    return (
        <div className='container about-page'>
            <div className='text-zone'>
               <h1>
               Projects</h1>
               <div>
                <div className='tennis'>
                <h4> WaveStyled (JavaScript) </h4>
                <ul>
                <li> <p> Clothing reccomendation IOS app, designed to reccomend outfits to users based on their personalized wardrobe</p> </li> 
                <li>  <p>  User add individual clothing items, enter details of the item(such as weather worn, occasion, color, etc...) which then feeded in to the reccomendation model to output fits tailored
                to the users preference.
                 </p>  </li>
                 <li> <p> Technologies:  React-Native, Expo, TensorFlow Keras, Fast API, Pandas, Sequelize, Express.js, Cors, Axios, PostgreSQL</p></li>   
                </ul>
              
               <img className='projimg1' src= {WaveStyled} alt=' tennis'/>
                </div>
                
                <div className='guitar'>
                <h4> Bitcoin Predictor (Python) </h4>
                <ul>
                <li><p> Trained and designed an RNN model to forecast bitcoin prices/trends from 2014 to 2021.
Utilized Pandas and MinMaxScaler to clean and scale BTC price data from Yahoo Finance.</p></li>  

                <li> <p> 
Employed several GRU layers and adjusted the model’s timesteps to achieve a mean-squared loss of 0.0014. </p></li>
                </ul>
              
               <img className='projimg2' src= {Bitcoin} alt=' guitar'/>    
                </div>
                <div className='workout'>
               
               
               <h4> Key Value Store (Python) </h4>
               <ul>
                <li> <p>Created a distributed, sharded, and fault-tolerant key-value store that spans many Docker containers </p></li>
                <li>  <p>Implements Paxos algorithm and Causal broadcast algorithm</p></li>
                <li><p>Technologies: Flask REST API, Docker </p></li>
               </ul>
              
               <img className='projimg3' src= {KVS} alt=' workout'/>
               </div>


               </div>
             
            </div>
        </div>
    )
}

export default Projects