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
                <div className='wq'>
                    <img src={WQpic} className='wq-pic'/>
                </div>
                <div className='wq-details'>
                <h1 className='is-size-3'>Word-Quiz</h1>
                <p> React, HTML, CSS, Jest, Bulma</p>
                <p className='wq-project-about'>Random defintions are generated for the user to guess the correct word that belongs to it. The user can also click for hints if needed.</p>
                <div className='project-btns'>
                    <button className='button is-warning'><a href='https://word-quiz-game.herokuapp.com/' target='_blank'>Website</a></button>
                    <button className='code-btn button is-warning'><a href='https://github.com/ggarciag24/word-quiz' target='_blank'>Code</a></button>
                </div>
                </div>
            </motion.div>
            <motion.div whileInView={{x: 0}} initial={{x: 800}} transition={{type: 'tween', duration: 3}}
            className='projects'>
                <div className='il-details'>
                <h1 className='is-size-3'>Info-Land</h1>
                <p> React, HTML, CSS, Jest</p>
                <p className='project-about'>A user can search for a specific country and get more information on that country. The user can also look through a list of all the countries and sort and/or filter the list. Additionally the user can click the map button and be directed to the location of that country on google maps.</p>
                <div className='project-btns'>
                    <button className='button is-warning'><a href='https://info-land.herokuapp.com/' target='_blank'>Website</a></button>
                    <button className='code-btn button is-warning'><a href='https://github.com/ggarciag24/info-land' target='_blank'>Code</a></button>
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