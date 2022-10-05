import React from 'react';
import {motion} from 'framer-motion';



function Skills(){
    return(
        <div className='skills'>
            <div class='container is-size-3'><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>S</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>k</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>i</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>l</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>l</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>s</motion.div></div>
            <div>
                <ul>
                    <li>HTML, CSS, Javascript, React, Jest, Flexbox</li>
                    <li>Github, Jira, Slack</li>
                    <li>Bulma, Framer Motion</li>

                </ul>
            </div>
        </div>
    )
}


export default Skills;