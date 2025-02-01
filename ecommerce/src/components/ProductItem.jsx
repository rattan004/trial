import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';

const ProductItem = ({id,image,name,stock,price}) => {
    
    const {currency}= useContext(ShopContext);
    
  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
        <div className='overflow-hidden'>
            <img src={image[0]} className='hover:scale-110 transistion ease-in-out' alt="Product Image" />
            <p className='pt-3 pb-1 text-sm'>{name}</p>
            <p className='text-sm font-medium'>{currency}{price}</p>
            {stock === 0 || stock < 0 ? <p className='bg-red-700'>Out Of Stock</p>:<p className='bg-green-500 text-white inline-block mt-2 rounded-2xl  p-2'>In Stock</p>}
        </div>
    </Link>
  )
}

export default ProductItem
