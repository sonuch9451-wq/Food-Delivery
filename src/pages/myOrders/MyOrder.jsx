import React from 'react'
import './MyOrder.css'
import { useState } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import axios from 'axios'
import { useEffect } from 'react'
import { useContext } from 'react'
import { assets } from '../../assets/assets'

const MyOrder = () => {

    const {url,token} = useContext(StoreContext)
    const [data,setData] = useState([]);

    const fetchorders = async () =>{
        const response = await axios.post(url+'/api/order/userorders',{},{headers:{token}});
        setData(response.data.data);
        console.log(response.data.data);
    }

    useEffect(()=>{
        if(token){
            fetchorders();
            
            
        }
    },[token])

  return (
    <div className='my-orders'>
        <h2>My Orders</h2>
        <div className="container">
            {data && data.map((order,index)=>{
                return(
                    <div key={order._id || index} className="my-orders-order">
                        <img src={assets.parcel_icon} alt="" />
                        <p>{order.items && order.items.map((item,itemIndex)=>{
                            if(itemIndex === order.items.length-1){
                                return <span key={itemIndex}>{item.name+" X "+item.quantity}</span>
                            }
                            else{
                                return <span key={itemIndex}>{item.name+" X "+item.quantity+","}</span>
                            }
                        })}</p>
                        <p>₹{order.amount}.00</p>
                        <p>Items: {order.items ? order.items.length : 0}</p>
                        <p><span>&#x25cf;</span> <b>{order.status}</b></p>
                        <button onClick={fetchorders}>Track Order</button>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default MyOrder
