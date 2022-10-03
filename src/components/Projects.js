import React from 'react';
import {motion} from 'framer-motion';
import WQpic from '../images/word-quiz-screenshot.png'
import ILpic from '../images/info-land-screenshot.png'


function Projects(){
    return(
        <div >
            <div className='projects-heading'><h2>Projects</h2></div>
            <motion.div animate={{x: 0}} initial={{x: -800}} transition={{type: 'tween', duration: 3}}
            className='projects'>
                <div>
                    <img src={WQpic} className='wq-pic'/>
                </div>
                <div className='wq-details'>
                <h3>Word-Quiz</h3>
                <p> React, HTML, CSS, Bulma</p>
                <p>About</p>
                </div>
            </motion.div>
            <motion.div animate={{x: 0}} initial={{x: 800}} transition={{type: 'tween', duration: 3}}
            className='projects'>
                <div className='il-details'>
                <h3>Info-Land</h3>
                <p> React, HTML, CSS</p>
                <p>About</p>
                </div>
                <div>
                    <img src={ILpic} className='il-pic'/>
                </div>
            </motion.div>
        </div>
    )
}

export default Projects;