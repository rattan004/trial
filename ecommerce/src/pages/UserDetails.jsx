import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useContext } from 'react';
import axios from 'axios';

const UserDetails = () => {
    const [user, setUser] = useState({}); 
    const { backendUrl,navigate, token} = useContext(ShopContext);
    useEffect(() => {
      const fetchData = async () => {
        if (!token) {
          return; 
        }
  
        try {
          const response = await axios.post(backendUrl + '/api/user/details', {}, {
            headers: { token },
          });
  
          if (response.data.success) {
            setUser(response.data.user);
          } else {
            console.error('Error fetching user data:', response.data.message);
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };
  
      fetchData();
    }, [token]); 
  return (
    <>
    <div className="bg-white overflow-hidden shadow rounded-lg border">
    <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
            User Profile
        </h3>
    </div>
    <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-gray-200">
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                    Name
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {user.name}
                </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                    Course
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {user.course}
                </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                    Section
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {user.section}
                </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                    Semester
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    6
                </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                    University Roll Number
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {user.roll}
                </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                    Email
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {user.email}
                </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                <button onClick={()=>navigate('/updatedetails')} className='bg-black text-white rounded-2xl p-2 w-20'>Edit</button>
                </dt>
            </div>
        </dl>
    </div>
</div>
    </>
  )
}

export default UserDetails
