import React from 'react';
import {motion} from 'framer-motion';
import ResumePDF from '../assets/ResumeCurrent.pdf'

function Resume(){
    return(
        <div id='resume' className='resume'>
            <motion.button whileHover={{ scale: 2 }} className='button is-info is-rounded is-large'><a href={ResumePDF} target='_blank'>Resume</a></motion.button>
        </div>
    )
}


export default Resume;