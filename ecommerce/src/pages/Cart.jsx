import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';
import { toast } from 'react-toastify';

const Cart = () => {

    const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);
    const [cartData, setCartData] = useState([])

    useEffect(() => {
        if (products.length > 0) {
            let tempData = [];
            for (const item in cartItems) {
                for (const size in cartItems[item]) {
                    if (cartItems[item][size] > 0) {
                        tempData.push({
                            _id: item,
                            size: size,
                            quantity: cartItems[item][size],
                        });
                    }
                }
            }
            setCartData(tempData);
        }

    }, [cartItems, products]);
    return (
        <div className='border-t pt-14'>
            <div className='text-2xl mb-3'>
                <Title text1={"YOUR"} text2={" CART"} />
            </div>
            <div>
                {
                    cartData.map((item, index) => {
                        const productData = products.find((product) => product._id === item._id);
                        return (
                            <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                                <div className='flex items-start gap-6'>
                                    <img src={productData.image[0]} className='w-16 sm:w-20' alt="Product Image" />
                                    <div>
                                        <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                                        <div className='flex items-center gap-5 mt-2'>
                                            <p>{currency}{productData.price}</p>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-start gap-1'>
                                <img onClick={()=>updateQuantity(item._id, item.size, item.quantity-1,-1)} className='w-7 mr-0 sm:w-8 cursor-pointer' src={assets.minus} alt="Minus Icon"/>
                                <input onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id, item.size, Number(e.target.value),Number(e.target.value)-item.quantity)} value={item.quantity} className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' type="number" min={1} defaultValue={item.quantity} />
                                <img onClick={()=>updateQuantity(item._id, item.size, item.quantity+1,1)} className='w-7 mr-0 sm:w-8 cursor-pointer' src={assets.plus} alt="Plus Icon"/>
                                </div>
                                <img onClick={() => updateQuantity(item._id, item.size, 0)} className='w-7 mr-4 sm:w-8 cursor-pointer' src={assets.bin_icon} alt="Bin Icon" />
                            </div>
                        )
                    })
                }
            </div>
            <div className='flex justify-end my-20'>
                <div className='w-full sm:w-[450px]'>
                    <CartTotal />
                    <div className='w-full text-end'>
                        <button onClick={() => navigate('/placeorder')} className='bg-black text-white text-sm my-8 px-8 py-3'>PROCEED TO CHECKOUT</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
