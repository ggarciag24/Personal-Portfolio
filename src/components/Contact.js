import React from 'react';
import {motion} from 'framer-motion';


function Contact() {
    return (
        <div>
        <div className='lets-talk'>
            Lets Talk
        </div>
        <div className='contact-info'>
        <motion.button className='btn' whileHover={{ scale: 1.3 }}>LinkedIn</motion.button>
        <motion.button className='btn' whileHover={{ scale: 1.3}}>Github</motion.button>
        <motion.button className='btn' whileHover={{ scale: 1.3 }}>Email</motion.button>
        </div>
        </div>
    )
}

export default Contact;