import React, { useContext } from 'react'
import './FoodItem.css'
import {assets} from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'
import { motion } from 'framer-motion'

const FoodItem = ({_id,name,price,description,image}) => {

    
    const {cartItems = {},addToCart,removeFromCart,url} = useContext(StoreContext);
  return (
    <motion.div 
      className='food-item'
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
        <div className="food-item-img-container">
            <img className='food-item-image' src={url+'/images/'+image} alt="" />
            { !cartItems[_id]
            ?  (<img className='add' onClick={()=>addToCart(_id)} src={assets.add_icon_white} alt="" />)
                :(<div className="food-item-counter">
                    <img onClick={()=>removeFromCart(_id)} src={assets.remove_icon_red} alt="" />
                    <p>{cartItems[_id]}</p>
                    <img onClick={()=>addToCart(_id)} src={assets.add_icon_green} alt="" />
                </div>)
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className='food-item-decs'>{description}</p>
            <p className='food-item-price'>₹{price}</p>
        </div>
      
    </motion.div>
  )
}

export default FoodItem
