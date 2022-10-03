import React from 'react';
import {motion} from 'framer-motion';

function Resume(){
    return(
        <div className='resume'>
            <motion.button whileHover={{ scale: 2 }} className='btn'>Resume</motion.button>
        </div>
    )
}


export default Resume;