import React from 'react'
import './Footer.css'
import {assets} from '../../assets/assets'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <motion.div 
      className='footer' 
      id='footer'
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
        <div className="footer-content">
            <motion.div 
              className="footer-content-left"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
            >
                 <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, error! Facilis libero iste in excepturi et autem aliquid rem. Deserunt maiores modi perspiciatis et possimus vero quae dolorum aspernatur harum.</p>
                <div className="footer-social-icon">
                    <motion.img 
                      src={assets.facebook_icon} 
                      alt="" 
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    />
                    <motion.img 
                      src={assets.twitter_icon} 
                      alt="" 
                      whileHover={{ scale: 1.2, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                    />
                    <motion.img 
                      src={assets.linkedin_icon} 
                      alt="" 
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    />
                </div>
            </motion.div>
            
            <motion.div 
              className="footer-content-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
                 <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </motion.div>
            
            <motion.div 
              className="footer-content-right"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
            >
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91-456789067</li>
                    <li>contect@tomato.com</li>
                </ul>
            </motion.div>
        </div>
        <hr />
        <motion.p 
          className="footer-copyright"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Copyright 2025 &copy; Tomato.com - All Right Reserved.
        </motion.p>
    </motion.div>
  )
}

export default Footer
