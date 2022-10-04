import React from 'react';
import {motion} from 'framer-motion';


function About(){
    return(
        <div className='about is-size-3'>
            <motion.div whileHover={{ scale: 1.3 }}>A</motion.div><motion.div whileHover={{ scale: 1.3 }}>b</motion.div><motion.div whileHover={{ scale: 1.3 }}>o</motion.div><motion.div whileHover={{ scale: 1.3 }}>u</motion.div><motion.div whileHover={{ scale: 1.3 }}>t</motion.div><motion.div whileHover={{ scale: 1.3 }} className='gap'>M</motion.div><motion.div whileHover={{ scale: 1.3 }}>e</motion.div>
        </div>
    )
}


export default About;