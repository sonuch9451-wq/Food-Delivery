import React from 'react'
import './Header.css'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <div className='header'>
      <div className="header-content">
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Order your favourite food here
        </motion.h2>
        
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo ut tempore ipsum cum deserunt, dolorem iure maiores doloremque sed aliquam.
        </motion.p>
        
        <motion.button
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          View Menu
        </motion.button>
      </div>
    </div>
  )
}

export default Header
