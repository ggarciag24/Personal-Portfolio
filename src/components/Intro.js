import React from 'react';
import {motion} from 'framer-motion';
import { Link } from "react-scroll";


function Intro() {

    return (
        <div className='head'>
            <motion.div animate={{y: 36 }} initial={{y: -800}} transition={{type: 'tween', duration: 3, type: 'spring', bounce: 0.5}}
            className='intro is-size-1'>
                <div className='container'><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>G</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>e</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>r</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>m</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>a</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>n</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}} className='gap'>G</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>a</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>r</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>c</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>i</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>a</motion.div></div>
                <div className='container'><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>F</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>r</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>o</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>n</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>t</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>e</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>n</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>d</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}} className='gap'>D</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>e</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>v</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>e</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>l</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>o</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>p</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>e</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>r</motion.div></div>
        
            </motion.div>

            <div className='nav is-size-3'>
               <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-100} duration={700}><motion.a href='#projects' whileHover={{ scale: 3, color: 'orange'}} initial={{color: 'white'}}>Projects</motion.a></Link>
               <Link activeClass="active" to="resume" spy={true} smooth={true} offset={-100} duration={700}><motion.a href='#resume' whileHover={{ scale: 3, color: 'orange'}} initial={{color: 'white'}}>Resume</motion.a></Link>
               <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={700}><motion.a href='#skills' whileHover={{ scale: 3, color: 'orange'}} initial={{color: 'white'}}>Skills</motion.a></Link>
               <Link activeClass="active" to="about" spy={true} smooth={true} offset={-100} duration={700}><motion.a href='#about' whileHover={{ scale: 3, color: 'orange'}} initial={{color: 'white'}}>About</motion.a></Link>
            </div>
        </div>
    )
}

export default Intro;