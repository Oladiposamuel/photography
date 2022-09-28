import React, {useState} from 'react';
import "./navbar.css";
import { motion, Variants } from 'framer-motion';

const contactVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
  };

const Navbar = () => {

    const [popUp, setPopUp] = useState(false);

  return (
    <div className='navbar'>
        <nav className='nav'>

            <div className='nav-logo'>
                <h1 className='logo' >PICTURE PERFECT</h1>
            </div>

            <div className='nav-links-box'>
                <ul className='nav-links'>
                    <motion.li
                        whileTap={{ scale: 1.1 }}
                        onClick={() => setPopUp(!popUp)}
                    >
                        Contact us
                    </motion.li>
                </ul>
            </div>

        </nav>

        { popUp && (
            <motion.div
                variants={contactVariants}
                initial = "closed"
                animate = "open"
                // style={{ pointerEvents: popUp ? "auto" : "none" }}
                className='contact'
            >
                <p>Oladipo Samuel</p>
                <p>Web Developer</p>
                <p>Oladiposamuel.ola@gmail.com</p>
                <p>+(234)7060564931</p>
            </motion.div>)
        }
    </div>
  )
}

export default Navbar