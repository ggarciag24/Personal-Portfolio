import React from 'react';
import {motion} from 'framer-motion';

function Resume(){
    return(
        <div className='resume'>
            <motion.button whileHover={{ scale: 2 }} className='button is-info is-rounded is-large'>Resume</motion.button>
        </div>
    )
}


export default Resume;