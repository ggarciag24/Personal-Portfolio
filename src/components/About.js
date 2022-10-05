import React from 'react';
import {motion} from 'framer-motion';


function About(){
    return(
        <div className='about is-size-3'>
            <motion.div whileHover={{ scale: 1.3, color: 'orange'}}>A</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>b</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>o</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>u</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>t</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}} className='gap'>M</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>e</motion.div>
        </div>
    )
}


export default About;