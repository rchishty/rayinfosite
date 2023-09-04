import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Header = ({ logo }) => {
    return(
        <motion.header className="App-header"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 2.5}}
        >
            <div style={{flexDirection: 'row', display: 'flex'}}>
            <div className="App-text">
                <p>
                Built by&nbsp;
                <a className="Ray-Chishty-link" href="https://www.linkedin.com/in/rayc06/" target="_blank" rel="noreferrer"><text>Ray Chishty</text></a>
                &nbsp;using <code>React.js</code>
                </p>
            </div>
            <div>
                <img src={logo} className="App-logo" alt="logo" />
            </div>

            <motion.button className='btn'>Home</motion.button>
            <Link to={"/Resume"}><button className='btn'>Resume</button></Link>
            <motion.button className='btn'>Contact</motion.button>
            </div>
            <div className="Header-break"><hr/></div>
      </motion.header>
    )
}

export default Header;