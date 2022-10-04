import React from 'react';
import {motion} from 'framer-motion';


function Intro() {
    // const [isRotate, setIsRotate] = React.useState(false);

    return (
        <div className='head'>
            <motion.div animate={{y: 36 }} initial={{y: -800}} transition={{type: 'tween', duration: 3, type: 'spring', bounce: 0.5}}
            className='intro is-size-1'>
                <div className='container'><motion.div whileHover={{ scale: 1.3 }}>G</motion.div><motion.div whileHover={{ scale: 1.3 }}>e</motion.div><motion.div whileHover={{ scale: 1.3 }}>r</motion.div><motion.div whileHover={{ scale: 1.3 }}>m</motion.div><motion.div whileHover={{ scale: 1.3 }}>a</motion.div><motion.div whileHover={{ scale: 1.3 }}>n</motion.div><motion.div whileHover={{ scale: 1.3 }} className='gap'>G</motion.div><motion.div whileHover={{ scale: 1.3 }}>a</motion.div><motion.div whileHover={{ scale: 1.3 }}>r</motion.div><motion.div whileHover={{ scale: 1.3 }}>c</motion.div><motion.div whileHover={{ scale: 1.3 }}>i</motion.div><motion.div whileHover={{ scale: 1.3 }}>a</motion.div></div>
                <div className='container'><motion.div whileHover={{ scale: 1.3 }}>F</motion.div><motion.div whileHover={{ scale: 1.3 }}>r</motion.div><motion.div whileHover={{ scale: 1.3 }}>o</motion.div><motion.div whileHover={{ scale: 1.3 }}>n</motion.div><motion.div whileHover={{ scale: 1.3 }}>t</motion.div><motion.div whileHover={{ scale: 1.3 }}>e</motion.div><motion.div whileHover={{ scale: 1.3 }}>n</motion.div><motion.div whileHover={{ scale: 1.3 }}>d</motion.div><motion.div whileHover={{ scale: 1.3 }} className='gap'>D</motion.div><motion.div whileHover={{ scale: 1.3 }}>e</motion.div><motion.div whileHover={{ scale: 1.3 }}>v</motion.div><motion.div whileHover={{ scale: 1.3 }}>e</motion.div><motion.div whileHover={{ scale: 1.3 }}>l</motion.div><motion.div whileHover={{ scale: 1.3 }}>o</motion.div><motion.div whileHover={{ scale: 1.3 }}>p</motion.div><motion.div whileHover={{ scale: 1.3 }}>e</motion.div><motion.div whileHover={{ scale: 1.3 }}>r</motion.div></div>
        
            </motion.div>

            <div className='nav is-size-3'>
                <motion.p whileHover={{ scale: 3 }}>Projects</motion.p>
                <motion.p whileHover={{ scale: 3 }}>Resume</motion.p>
                <motion.p whileHover={{ scale: 3 }}>Skills</motion.p>
                <motion.p whileHover={{ scale: 3 }}>About</motion.p>
            </div>
        </div>
    )
}

export default Intro;