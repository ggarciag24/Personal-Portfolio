import React from 'react';
import {motion} from 'framer-motion';


function About(){
    return(
        <div id='about' className='about'>
            <div className='container is-size-3'><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>A</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>b</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>o</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>u</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>t</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}} className='gap'>M</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>e</motion.div></div>
            <p className='about-p'>I completed an in person immersive software engineering bootcamp at Flatiron school(D.C. Campus). This was a great experience for me and I was able to learn a ton about code, github processes, paired programming, and problem solving techniques and steps.</p>
        </div>
    )
}


export default About;