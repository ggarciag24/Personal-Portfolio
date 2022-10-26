import React from 'react';
import {motion} from 'framer-motion';



function Skills(){
    return(
        <div id='skills' className='skills'>
            <div class='container is-size-3'><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>S</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>k</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>i</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>l</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>l</motion.div><motion.div whileHover={{ scale: 1.3, color: 'orange'}}>s</motion.div></div>
            <div>
                <ul>
                    <li>Languages: Javascript, HTML, CSS</li>
                    <li>Frameworks: ReactJS, Jest, Bulma </li>
                    <li>Tools: Git, Github, CLI, Heroku, Jira, Slack</li>
                    <li>Other: HTTP, API, CSS Flexbox</li>
                </ul>
            </div>
        </div>
    )
}


export default Skills;