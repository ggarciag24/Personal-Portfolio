import React from 'react';
import {motion} from 'framer-motion';


function Contact() {
    return (
        <div>
        <div className='lets-talk is-size-3'>
        <motion.div whileHover={{ scale: 1.3, color: 'orange'}}>L</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>e</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>t</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>'</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>s</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}} className='gap'>T</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>a</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>l</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>k</motion.div>
        </div>
        <div className='contact-info'>
        <motion.button className='button is-info is-rounded' whileHover={{ scale: 1.5}}><a href='https://www.linkedin.com/in/german-garcia-gonzalez/'>LinkedIn</a></motion.button>
        <motion.button className='btn button is-info is-rounded' whileHover={{ scale: 1.5}}><a href='https://github.com/ggarciag24' target={'_blank'}>Github</a></motion.button>
        <motion.button className='btn button is-info is-rounded' whileHover={{ scale: 1.5}}><a href="mailto:ggarciag.business@outlook.com">Email</a></motion.button>
        </div>
        </div>
    )
}

export default Contact;