import React from 'react';
import {motion} from 'framer-motion';


function Intro() {
    // const [isRotate, setIsRotate] = React.useState(false);

    return (
        <div className='head'>
            <motion.div animate={{y: 36 }} initial={{y: -800}} transition={{type: 'tween', duration: 3, type: 'spring', bounce: 0.5}}
            className='intro is-size-1'>
                <div className='container'><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>G</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>e</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>r</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>m</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>a</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>n</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}} className='gap'>G</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>a</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>r</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>c</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>i</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>a</motion.div></div>
                <div className='container'><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>F</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>r</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>o</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>n</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>t</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>e</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>n</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>d</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}} className='gap'>D</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>e</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>v</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>e</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>l</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>o</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>p</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>e</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>r</motion.div></div>
        
            </motion.div>

            <div className='nav is-size-3'>
                <motion.p whileHover={{ scale: 3, color: 'orange'}}>Projects</motion.p>
                <motion.p whileHover={{ scale: 3, color: 'orange'}}>Resume</motion.p>
                <motion.p whileHover={{ scale: 3, color: 'orange'}}>Skills</motion.p>
                <motion.p whileHover={{ scale: 3, color: 'orange'}}>About</motion.p>
            </div>
        </div>
    )
}

export default Intro;