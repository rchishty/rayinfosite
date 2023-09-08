import Header from '../components/Header';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="App">
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 2.5}}
      >
      <Header />
      </motion.div>
      <div>Hi, my name is Ray, and this is my personal website. This site is a work in progress, so please bare with me. All tabs do work, but are not styled.
         I plan on editing them to completion within the next few weeks.</div>
    </div>
  );
}

export default App;