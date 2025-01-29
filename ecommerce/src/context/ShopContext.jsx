import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export const ShopContext = createContext();
import axios from 'axios'

const ShopContextProvider = (props) => {

    const currency = '₹';
    const delivery_fee= 60;
    const backendUrl =  import.meta.env.VITE_BACKEND_URL
    const [search,setSearch] = useState('');
    const [showSearch,setShowSearch] = useState(false);
    const [cartItems,setCartItems] = useState({});
    const [products,setProducts] = useState([]);
    const [token,setToken] = useState('');
    const navigate = useNavigate();

    const addToCart = async (itemId, size) => {
        if (!size) {
          toast.error('Please select a size');
          return;
        }
    
        let cartData = structuredClone(cartItems);
    
        if (cartData[itemId]) {
          cartData[itemId][size]
            ? (cartData[itemId][size] += 1)
            : (cartData[itemId][size] = 1);
        } else {
          cartData[itemId] = {};
          cartData[itemId][size] = 1;
        }
    
        setCartItems(cartData);
        if (token) {
          try {
            await axios.post(backendUrl+'/api/cart/add',{itemId,size},{headers:{token}})
          } catch (error) {
            console.log(error);
            toast.error(error.message)
          }
        }
        toast.info("Item added to cart");
      };

    const getCartCount = () => {
        let totalCount = 0;
        for(const items in cartItems){
            for(const item in cartItems[items]){
                try {
                    if(cartItems[items][item]>0){
                        totalCount += cartItems[items][item];
                    }
                } catch (error) {
                    
                }
            }
        }
        return totalCount;
    }

    const updateQuantity = async (itemId,size,quantity) => {
        let cartData = structuredClone(cartItems);
        cartData[itemId][size]=quantity;
        setCartItems(cartData);
        if(token){
          try {
            await axios.post(backendUrl+'/api/cart/update',{itemId,size,quantity},{headers:{token}})
          } catch (error) {
            console.log(error);
            toast.error(error.message)
            
          }
        }
    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
          const productInfo = products.find((product) => product._id === item);
          for (const size in cartItems[item]) {
            try {
              if (cartItems[item][size] > 0) {
                totalAmount += productInfo.price * cartItems[item][size];
              }
            } catch (error) {
              console.log('error', error);
            }
          }
        }
        return totalAmount;
      };

    const getProductsData = async () => {
      try {
        const response = await axios.get(backendUrl+'/api/product/list')
        if(response.data.success){
          setProducts(response.data.products)
        }
        else{
          toast.error(response.data.message)
        }
        
      } catch (error) {
        console.log(error);
        toast.error(error.message)
        
      }
    }
    const getUserCart = async (token) =>{
      try {
        const response = await axios.post(backendUrl+'/api/cart/get',{},{headers:{token}})
        if (response.data.success) {
          setCartItems(response.data.cartData)
        }
      } catch (error) {
        console.log(error);
        toast.error(error.message)
        
      }
    }

    useEffect(()=> {
      getProductsData()
    },[])

    useEffect(()=>{
      if (!token && localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"))
        getUserCart(localStorage.getItem("token"))
      }
    },[])

    const value = {
        products, currency, delivery_fee,
        search,setSearch,showSearch,setShowSearch,
        cartItems,addToCart,setCartItems,
        getCartCount, updateQuantity, getCartAmount,
        navigate, backendUrl,setToken, token
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;
