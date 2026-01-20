import React, { useContext, useState } from 'react'
import './LoginPop.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'
import axios from 'axios'
import toast from 'react-hot-toast'
import { motion, AnimatePresence } from 'framer-motion'

const LoginPop = ({setShowLogin}) => {

    const {url, setToken} = useContext(StoreContext)

const [currState,setCurrState] = useState("Login")
const [data,setData] = useState({
    name:"",
    email:"",
    password:""
})

const onChangeHandler = (event) => {
    const name = event.target.name
    const value = event.target.value
    setData(data=>({...data,[name]:value}))
}

const onLogin = async (event) => {
    event.preventDefault()

    let newUrl = url;
    if(currState==="Login"){
        newUrl += "/api/user/login"
    }
    else{
        newUrl += "/api/user/register"
    }

    try {
        const response = await axios.post(newUrl,data);

        if(response.data.success){
            setToken(response.data.token);
            localStorage.setItem("token",response.data.token);
            setShowLogin(false)
            toast.success(currState === "Login" ? "Login successful!" : "Account created successfully!");
        }
        else{
            toast.error(response.data.message);
        }
    } catch (error) {
        toast.error("Something went wrong. Please try again.");
    }
}

  return (
    <AnimatePresence>
      <motion.div 
        className='login-popup'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
          <motion.form 
            onSubmit={onLogin} 
            className="login-popup-container"
            initial={{ scale: 0.7, y: -50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.7, y: -50 }}
            transition={{ duration: 0.4, type: "spring" }}
          >
              <motion.div 
                className="login-popup-title"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                  <h2>{currState}</h2>
                  <motion.img 
                    onClick={()=>setShowLogin(false)} 
                    src={assets.cross_icon} 
                    alt="" 
                    whileHover={{ rotate: 90, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  />
              </motion.div>
              
              <motion.div 
                className="login-popup-inputs"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 }}
              >
                  {currState === "Login" ? <></> : 
                    <motion.input 
                      name='name' 
                      onChange={onChangeHandler} 
                      value={data.name} 
                      type="text" 
                      placeholder='Your Name' 
                      required 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    />
                  }
                  <motion.input 
                    onChange={onChangeHandler} 
                    value={data.email} 
                    name='email' 
                    type="email" 
                    placeholder='Your Email' 
                    required 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                  />
                  <motion.input 
                    onChange={onChangeHandler} 
                    name='password' 
                    value={data.password} 
                    type="password" 
                    placeholder='Your Password' 
                    required 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  />
              </motion.div>
              
              <motion.button 
                type='submit'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {currState === "Sign Up" ? "Create account" : "Login"}
              </motion.button>
              
              <motion.div 
                className="login-popup-condition"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                  <input type="checkbox" required />
                  <p>By continuing, i agree to the terms oof use & privacy policy. </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
              >
                {currState === "Login"
                ?<p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
                :<p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>
                }
              </motion.div>
          </motion.form>
      </motion.div>
    </AnimatePresence>
  )
}

export default LoginPop
