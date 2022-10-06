import React from 'react';
import {motion} from 'framer-motion';

function Resume(){
    return(
        <div id='resume' className='resume'>
            <motion.button whileHover={{ scale: 2 }} className='button is-info is-rounded is-large'><a href='https://docs.google.com/document/d/10Fbcpjtz17AuUYtyG24bj0NG8GYTVdXP4CzibhLM4ko/edit?usp=sharing' target='_blank'>Resume</a></motion.button>
        </div>
    )
}


export default Resume;