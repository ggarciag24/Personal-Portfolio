import React from 'react';
import {motion} from 'framer-motion';


function Intro() {
    // const [isRotate, setIsRotate] = React.useState(false);

    return (
        <div>
            <motion.div animate={{y: 44 }} initial={{y: -800}} transition={{type: 'tween', duration: 3, type: 'spring', bounce: 0.5}}
            className='intro'>
                <h1>Hello My Name is German Garcia</h1>
                {/* <h4>Frontend Developer</h4> */}
        
            </motion.div>

            <div className='nav'>
                <motion.p whileHover={{ scale: 3 }}>Projects</motion.p>
                <motion.p whileHover={{ scale: 3 }}>Resume</motion.p>
                <motion.p whileHover={{ scale: 3 }}>Skills</motion.p>
                <motion.p whileHover={{ scale: 3 }}>About</motion.p>
            </div>
        </div>
    )
}

export default Intro;