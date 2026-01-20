import { createContext, useEffect, useState } from "react";
import axios from 'axios'
import toast from 'react-hot-toast'


export const StoreContext = createContext(null)

const StoreContextProvider = (props)=>{

    const [cartItems,setCartItems] = useState({});
    const url = "https://food-delivery-backend-1-kipy.onrender.com"

    const [token, setToken] = useState("")
    const [food_list,setFoodList] = useState([])

    const addToCart = async (itemId) =>{
        if(!(cartItems && cartItems[itemId])){
            setCartItems((prev)=>({...prev||{},[itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev||{},[itemId]:prev[itemId]+1}))
        }
        if(token){
            await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
        }
        toast.success("Item added to cart!");
    }
    
    const removeFromCart = async (itemId) =>{
        setCartItems((prev)=>({...prev||{},[itemId]:(prev||{})[itemId]-1}))
        if(token){
            await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
        }
        toast.success("Item removed from cart!");
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        if(cartItems){
            for(const item in cartItems)
            {
                if(cartItems[item]>0){
                    let itemInfo = food_list.find((product)=>product._id === item);
                    if(itemInfo){
                        totalAmount +=itemInfo.price* cartItems[item];
                    }
                }
            }
        }
        return totalAmount;
    }

    const fetchFoodList = async () =>{
        const response = await axios.get(url+'/api/food/list');
        setFoodList(response.data.data)
    }

    const loadCartData = async (token) => {
        const response = await axios.post(url+"/api/cart/get",{},{headers:{token}})
        setCartItems(response.data.cartData || {})
    }

    useEffect(()=>{
       
        async function loadData() {
            await fetchFoodList();
             if(localStorage.getItem("token")){
            setToken(localStorage.getItem("token"))
            await loadCartData(localStorage.getItem("token"));
        }
    }
    
        loadData();
    },[])

    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        setCartItems({});
    }

    const contextValue = {

        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken,
        logout
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;