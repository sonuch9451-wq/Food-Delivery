import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'
import { motion } from 'framer-motion'

const FoodDisplay = ({category}) => {

const {food_list,url} = useContext(StoreContext)

  return (
    <motion.div 
      className='food-display' 
      id='food-display'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true, amount: 0.2 }}
    >
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: true }}
        >
          Top dishes near you
        </motion.h2>
        
        <motion.div 
          className="food-display-list"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: true }}
        >
            {food_list.map((item,index)=>{
                if(category === "All" || category === item.category){
                  
                    return <motion.div
                      key={item._id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.2,
                        type: "spring",
                        stiffness: 150
                      }}
                      viewport={{ once: true, amount: 0.1 }}
                    >
                      <FoodItem 
                        _id={item._id} 
                        name={item.name} 
                        price={item.price} 
                        description={item.description} 
                        image={item.image} 
                      />
                    </motion.div>
                }
                
            })}
        </motion.div>
    </motion.div>
  )
}

export default FoodDisplay
