import React from 'react';
import './index.scss';
import Bitcoin from '../../assets/images/bitcoin.png';
import KVS from '../../assets/images/kvs.jpg';
import WaveStyled from '../../assets/images/wavestyled.png';

const Projects = () => {
  return (
    <div className='container about-page'>
      <div className='text-zone'>
        <h1>Projects</h1>
        <div>
          <div className='tennis'>
            <h4>WaveStyled (JavaScript)</h4>
            <ul>
              <li>
                <p>
                  Clothing recommendation iOS app designed to recommend outfits
                  to users based on their personalized wardrobe
                </p>
              </li>
              <li>
                <p>
                  Users can add individual clothing items and enter details
                  about each item (such as weather worn, occasion, color, etc.),
                  which are then fed into the recommendation model to output
                  fits tailored to the user's preference.
                </p>
              </li>
              <li>
                <p>
                  Technologies: React-Native, TensorFlow Keras, Fast API,
                  Pandas, Sequelize, Express.js, Cors, Axios, PostgreSQL
                </p>
              </li>
            </ul>
            {/* <img className='projimg1' src={WaveStyled} alt='tennis' /> */}
          </div>

          <h4>Conceptual Analyzer (Python)</h4>
          <ul>
            <li>
              <p>
              Developed a Conceptual Analyzer, an advanced natural language interpreter that semantically parses diverse languages and extracts conceptual dependencies.
              </p>
            </li>
            <li>
              <p>
              Contributed to the field of explainable AI by spearheading the conversion of the original Common Lisp implementation of the Conceptual Analyzer, developed by Larry Birnbaum, into Python.
              </p>
            </li>
            <li>
              <p>
              Conducted an extensive literature review on seminal research focused on conceptual dependencies, providing insights into the intricacies of extracting and representing conceptual relationships within natural language.
              </p>
            </li>
          </ul>

          <h4>Bitcoin Predictor (Python)</h4>
          <ul>
            <li>
              <p>
                Trained and designed an RNN model to forecast bitcoin
                prices/trends from 2014 to 2021.
              </p>
            </li>
            <li>
              <p>
                Utilized Pandas and MinMaxScaler to clean and scale BTC price
                data from Yahoo Finance.
              </p>
            </li>
            <li>
              <p>
                Employed several GRU layers and adjusted the model’s timesteps
                to achieve a mean-squared loss of 0.0014.
              </p>
            </li>
          </ul>
          {/* <img className='projimg2' src={Bitcoin} alt='guitar' /> */}

          <h4>Snake Game (JavaScript)</h4>
          <ul>
            <li>
              <p>Implemented an AI agent to play the game of Snake.</p>
            </li>
            <li>
              <p>Utilized Q-learning and value iteration to predict optimal moves.</p>
            </li>
            <li>
              <p>Designed and fine-tuned a heuristic function to achieve an average score of 6.</p>
            </li>
          </ul>

          <h4>Connect 4 Game (JavaScript)</h4>
          <ul>
            <li>
              <p>Implemented an AI agent to play the game of Connect 4.</p>
            </li>
            <li>
              <p>Utilized alpha-beta and expectimax search algorithms to predict optimal moves.</p>
            </li>
            <li>
              <p>Designed and fine-tuned a heuristic function, resulting in an 80% win rate.</p>
            </li>
          </ul>

          <h4>Key Value Store (Python)</h4>
          <ul>
            <li>
              <p>
                Created a distributed, sharded, and fault-tolerant key-value store that spans
                many Docker containers.
              </p>
            </li>
            <li>
              <p>Implements Paxos algorithm and Causal broadcast algorithm.</p>
            </li>
            <li>
              <p>Technologies: Flask REST API, Docker</p>
            </li>
          </ul>
          {/* <img className='projimg3' src={KVS} alt='workout' /> */}
        </div>
      </div>
    </div>
  );
}

export default Projects;
