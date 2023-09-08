import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from "../logo.svg"
import './App.css'

const Header = () => {
    return(
        <div style={{position: 'sticky', top: 0}}>
        <header className="App-header">
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

            <Link to={"/"}><motion.button className='btn'>Home</motion.button></Link>
            <Link to={"/Resume"}><button className='btn'>Resume</button></Link>
            <Link to={"/Contact"}><button className='btn'>Contact</button></Link>
            </div>
            <div className="Header-break"></div>
      </header>
      </div>
    )
}

export default Header;