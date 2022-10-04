import React from 'react';
import {motion} from 'framer-motion';



function Skills(){
    return(
        <div className='skills'>
            <div class='container is-size-3'><motion.div whileHover={{ scale: 1.3 }}>S</motion.div><motion.div whileHover={{ scale: 1.3 }}>k</motion.div><motion.div whileHover={{ scale: 1.3 }}>i</motion.div><motion.div whileHover={{ scale: 1.3 }}>l</motion.div><motion.div whileHover={{ scale: 1.3 }}>l</motion.div><motion.div whileHover={{ scale: 1.3 }}>s</motion.div></div>
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