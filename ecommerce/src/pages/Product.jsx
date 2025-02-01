import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets, products } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';



const Product = () => {
    const {productId} = useParams();
    const {products,currency,addToCart} = useContext(ShopContext);
    const [productData,setProductData] = useState(false);
    const [image,setImage] = useState('')
    const [size,setSize] =useState(1)

        window.scrollTo(0, 0);
    
        const handleClick = (id,size) => {
            addToCart(id,size);
            fetchProductData();
        }    

    const fetchProductData = async () => {
        products.map((item)=>{
            if(item._id===productId){
                setProductData(item)
                setImage(item.image[0])
                return null;
            }
        })
    }
    
    useEffect(()=>{
        fetchProductData()
    })
  return productData ?  (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
        {/* Product Data */}
        <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
            {/* Product Images */}
            <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
                <div className='flex flex-col overflow x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
                    {
                        productData.image.map((item,index)=>(
                            <img onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
                        ))
                    }
                </div>
                <div className='w-full sm:w-[80%]'>
                    <img className='w-full h-auto' src={image} alt="" />
                </div>
            </div>
            {/* Product Info */}
            <div className='flex-1'>
                <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
                <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
                <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
                {productData.stock === 0 || productData.stock < 0 ? <button className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700 my-8'>OUT OF STOCK</button> : <button onClick={()=>handleClick(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700 my-8'>ADD TO CART</button>}
                
                <hr className='mt-8 sm:w-4/5'/>
                <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                    <p>100% Original Product.</p>
                    <p>Cash On Delivery Available.</p>
                    <p>Easy return and exchange policy within 7 days.</p>
                </div>
            </div>
        </div>
        {/* Description and Review */}
        <div className='mt-20'>
            <div className='flex'>
                <b className='border px-5 py-3 text-sm'>Description</b>
            </div>
            <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
                <p>{productData.description}</p>
                
            </div>
        </div>
        {/* Display Related Products */}
        <RelatedProducts category={productData.category}/>
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product
