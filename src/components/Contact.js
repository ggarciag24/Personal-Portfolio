import React from 'react';
import {motion} from 'framer-motion';


function Contact() {
    return (
        <div>
        <div className='lets-talk is-size-3'>
        <motion.div whileHover={{ scale: 1.3 }}>L</motion.div><motion.div whileHover={{ scale: 1.3 }}>e</motion.div><motion.div whileHover={{ scale: 1.3 }}>t</motion.div><motion.div whileHover={{ scale: 1.3 }}>'</motion.div><motion.div whileHover={{ scale: 1.3 }}>s</motion.div><motion.div whileHover={{ scale: 1.3 }} className='gap'>T</motion.div><motion.div whileHover={{ scale: 1.3 }}>a</motion.div><motion.div whileHover={{ scale: 1.3 }}>l</motion.div><motion.div whileHover={{ scale: 1.3 }}>k</motion.div>
        </div>
        <div className='contact-info'>
        <motion.button className='button is-info is-rounded' whileHover={{ scale: 1.3 }}>LinkedIn</motion.button>
        <motion.button className='btn button is-info is-rounded' whileHover={{ scale: 1.3}}>Github</motion.button>
        <motion.button className='btn button is-info is-rounded' whileHover={{ scale: 1.3 }}>Email</motion.button>
        </div>
        </div>
    )
}

export default Contact;