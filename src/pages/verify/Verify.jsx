import React, { useContext, useEffect } from 'react'
import './Verify.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios';
import toast from 'react-hot-toast'
const Verify = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  const {url} = useContext(StoreContext);
  const navigate = useNavigate();
  
  const verifyPayment = async () =>{
    try {
      const response = await axios.post(url+'/api/order/verify',{success,orderId});
      if(response.data.success){
        toast.success("Payment successful! Order confirmed.");
        navigate('/myorders');
      }
      else{
        toast.error("Payment failed. Order cancelled.");
        navigate('/')
      }
    } catch (error) {
      toast.error("Payment verification failed.");
      navigate('/')
    }
  }

  useEffect(()=>{
    verifyPayment()
  },[])
  
  
  return (
    <div className='verify'>
      <div className="spinner">

      </div>
    </div>
  )
}

export default Verify
