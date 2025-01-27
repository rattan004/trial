import React from 'react'
import { assets } from '../assets/assets'
const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
        <div>
            <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="Exchange Icon" />
            <p className='font-semibold'>Easy Exchange Policy</p>
            <p className='text-gray-400'>We offer hassle free exchange policy</p>
        </div>
        <div>
            <img src={assets.return_icon} className='w-12 m-auto mb-5' alt="Exchange Icon" />
            <p className='font-semibold'>Seven Days Return Policy</p>
            <p className='text-gray-400'>We offer 7 days free return policy</p>
        </div>
        <div>
            <img src={assets.support_icon} className='w-12 m-auto mb-5' alt="Exchange Icon" />
            <p className='font-semibold'>Best Customer Support</p>
            <p className='text-gray-400'>We provide 24/7 customer support</p>
        </div>
      
    </div>
  )
}

export default OurPolicy
