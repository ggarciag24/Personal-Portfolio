import React from 'react';
import {motion} from 'framer-motion';
import WQpic from '../images/word-quiz-screenshot.png'
import ILpic from '../images/info-land-screenshot.png'


function Projects(){
    return(
        <div>
            <div id='projects' className='projects-heading is-size-3'><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>P</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>r</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>o</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>j</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>e</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>c</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>t</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>s</motion.div></div>
            <motion.div whileInView={{x: 0}} initial={{x: -800}} transition={{type: 'tween', duration: 3}}
            className='projects'>
                <div>
                    <img src={WQpic} className='wq-pic'/>
                </div>
                <div className='wq-details'>
                <h3>Word-Quiz</h3>
                <p> React, HTML, CSS, Bulma</p>
                <p>About</p>
                <div>
                    <button>Website</button>
                    <button>Code</button>
                </div>
                </div>
            </motion.div>
            <motion.div whileInView={{x: 0}} initial={{x: 800}} transition={{type: 'tween', duration: 3}}
            className='projects'>
                <div className='il-details'>
                <h3>Info-Land</h3>
                <p> React, HTML, CSS</p>
                <p>About</p>
                <div>
                    <button>Website</button>
                    <button>Code</button>
                </div>
                </div>
                <div>
                    <img src={ILpic} className='il-pic'/>
                </div>
            </motion.div>
        </div>
    )
}

export default Projects;