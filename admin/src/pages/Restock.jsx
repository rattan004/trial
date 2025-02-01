import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { backendUrl, currency } from '../App'
import { toast } from 'react-toastify'

const List = ({token}) => {
    const [list,setList] = useState([])
    const [stock,setStock] = useState(0)

    const fetchList = async () => {
        try {
            const response = await axios.get(backendUrl+"/api/product/list")
            if (response.data.success) {
                setList(response.data.products);
            }
            else{
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }
    const updateStock = async (itemId,stock) => {
        if(true){
          try {
            const response = await axios.post(backendUrl+'/api/product/modify',{_id:itemId,stock})
            if (response.data.success) {
                toast.success("Stock updated successfully!");
                fetchList();
            } else {
                toast.error(response.data.message);
            }
          } catch (error) {
            console.log(error);
            toast.error(error.message)
            
          }
        }
    }
    
    useEffect(()=>{
        fetchList()
    },[])
  return (
    <>
    <p className='mb-2'>All products list</p>
    <div className='flex flex-col gap-2'>
        {/* List Table */}
        <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm'>
            <b>Image</b>
            <b>Name</b>
            <b>Category</b>
            <b>Stock</b>
            <b>Update Stock</b>
            
        </div>
        {/* Product List */}
        {
            list.map((item,index)=>(
                <>
                <div className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm' key={index}>
                    <img className='w-12' src={item.image[0]} alt="Product Image" />
                    <p >{item.name}</p>
                    <p>{item.category}</p>
                    <p>{item.stock}</p>
                    <div className='flex gap-2'>
                    <button onClick={()=>updateStock(item._id,item.stock+10)} className='bg-black text-white max-w-10 sm:max-w-15 px-1 sm:px-2 py-1 rounded-2xl'>+10</button>
                    <button onClick={()=>updateStock(item._id,item.stock+20)} className='bg-black text-white max-w-10 sm:max-w-15 px-1 sm:px-2 py-1 rounded-2xl'>+20</button>
                    
                    </div>
                    
                </div>
                </>
            ))
        }
    </div>
    </>

  )
}

export default List
