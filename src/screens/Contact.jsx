import { useEffect, useState } from "react";
import '../components/ContactMe.css';
import axios from "axios";
import Header from "../components/Header";
import { motion } from "framer-motion";


const Contact = () => {

  document.title = "rchishty - contact";

  const [formSubmit, setFormSubmit] = useState(false);

  useEffect(() => {
    if (formSubmit !== false) {
      document.getElementById("submitButton").disabled = true;
    }
  }, [formSubmit])

  function handleSubmit(event) {
    event.preventDefault();
    const form = document.querySelector('form');
    const formData = new FormData(form);
    axios.post("https://formspree.io/f/xrgwkkwv",
    formData
    ).then((response) => { console.log(response); })
    event.currentTarget.disabled = true;
  }
  
  return(
    <div className="App">
      <Header />
      {/*<video src={bgVideo} autoPlay loop muted /> */}
      <div class="nav">
</div>
<html>
</html>
<div class="container">
  <div class="inner">
    <div class="panel panel-left">
      <div class="panel-content">
        <div class="image-background">
        </div>
      </div>
    </div>
    <div class="panel panel-right">
      <div class="panel-content">
        <form className="form"
          onSubmit={(e) => {handleSubmit(e); setFormSubmit(true)}}
        >
          <h1>Contact Me</h1>
          <div class="group">      
            <input type="text" name="name" required />
            <span class="highlight"></span>
            <label>Your name</label>
          </div>
          <div class="group">      
            <input type="email" name="email" required />
            <span class="highlight"></span>
            <label>Your email</label>
          </div>
          <div class="group">      
            <textarea name="message" required />
            <span class="highlight"></span>
            <label>Your message</label>
          </div>
          <motion.button 
          id="submitButton" 
          type="submit" 
          disabled={false}
          whileHover={{scale: 1.2}}
          whileTap={{scale: 1.1}}
          >Send</motion.button>
        </form>
      </div>
    </div>
  </div>
</div>
<div class="menu"></div>
</div>
      
    )
}

export default Contact;