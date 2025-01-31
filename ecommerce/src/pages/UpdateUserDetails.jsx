import React, { useState, useEffect, useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { assets } from '../assets/assets';
import { toast } from 'react-toastify';

const UpdateUserDetails = () => {
    const [user, setUser] = useState(null);
    const { backendUrl, token } = useContext(ShopContext);
    const [editMode, setEditMode] = useState({
        name: false,
        email: false,
        semester: false,
        course: false,
        section: false,
        roll: false,
    });
    const [updatedUser, setUpdatedUser] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            if (!token) return;

            try {
                const response = await axios.post(backendUrl + '/api/user/details', {}, { headers: { token } });
                if (response.data.success) {
                    setUser(response.data.user);
                    setUpdatedUser(response.data.user);
                } else {
                    console.error('Error fetching user data:', response.data.message);
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    }, [token]);

    const handleInputChange = (field, value) => {
        setUpdatedUser({ ...updatedUser, [field]: value });
    };

    const handleSubmit = async () => {
        if (!token || !user) return;

        try {
            const response = await axios.post(backendUrl + '/api/user/update', updatedUser, { headers: { token } });

            if (response.data.success) {
                toast.info("Updated");
                setUser(updatedUser);
                setEditMode({
                    name: false,
                    email: false,
                    semester: false,
                    course: false,
                    section: false,
                    roll: false,
                });
            } else {
                console.error('Error updating user data:', response.data.message);
            }
        } catch (error) {
            console.error('Error updating user data:', error);
        }
    };

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="bg-white overflow-hidden shadow rounded-lg border">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">User Profile</h3>
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                    <dl className="sm:divide-y sm:divide-gray-200">
                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Name</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <div className='flex gap-4 w-5 items-center'> {/* Added items-center */}
                                    {editMode.name ? (
                                        <input
                                            onChange={(e) => handleInputChange('name', e.target.value)}
                                            type="text"
                                            value={updatedUser.name || ""} // Handle potential undefined
                                            className='w-full px-3 py-2 border border-gray-880'
                                        />
                                    ) : (
                                        <span>{user.name}</span> // Display as span
                                    )}
                                    <img
                                        onClick={() => setEditMode({ ...editMode, name: !editMode.name })}
                                        src={assets.edit}
                                        alt=""
                                        className='cursor-pointer w-5' // Added w-5 for consistent size
                                    />
                                </div>
                            </dd>
                        </div>

                        {/* Email */}
                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Email</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <div className='flex gap-4 w-5 items-center'>
                                    {editMode.email ? (
                                        <input
                                            onChange={(e) => handleInputChange('email', e.target.value)}
                                            type="email"
                                            value={updatedUser.email || ""}
                                            className='w-full px-3 py-2 border border-gray-880'
                                        />
                                    ) : (
                                        <span>{user.email}</span>
                                    )}
                                    <img
                                        onClick={() => setEditMode({ ...editMode, email: !editMode.email })}
                                        src={assets.edit}
                                        alt=""
                                        className='cursor-pointer w-5'
                                    />
                                </div>
                            </dd>
                        </div>

                        {/* Course */}
                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Course</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            <div className='flex gap-4 w-5 items-center'>
                                    {editMode.course ? (
                                        <select
                                            onChange={(e) => handleInputChange('course', e.target.value)}
                                            value={updatedUser.course || ""}
                                            className='border w-1/3 border-gray-80 px-3 py-3'
                                        >
                                            <option value="" disabled hidden>Choose Course</option>
                                            <option value="B.Tech">B.Tech</option>
                                            <option value="BCA">BCA</option>
                                            <option value="MCA">MCA</option>
                                            <option value="BBA">BBA</option>
                                            <option value="B.Pharma">B.Pharma</option>
                                            <option value="BHMCT">BHMCT</option>
                                        </select>
                                    ) : (
                                        <span>{user.course}</span>
                                    )}
                                    <img
                                        onClick={() => setEditMode({ ...editMode, course: !editMode.course })}
                                        src={assets.edit}
                                        alt=""
                                        className='cursor-pointer w-5'
                                    />
                                </div>
                            </dd>
                        </div>

                        {/* Section */}
                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Section</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            <div className='flex gap-4 w-5 items-center'>
                                    {editMode.section ? (
                                        <select
                                            onChange={(e) => handleInputChange('section', e.target.value)}
                                            value={updatedUser.section || ""}
                                            className='border w-1/3 border-gray-80 px-3 py-3'
                                        >
                                            <option value="" disabled hidden>Choose Section</option>
                                            <option value="A">A</option>
                                            <option value="B">B</option>
                                            <option value="C">C</option>
                                            <option value="D">D</option>
                                        </select>
                                    ) : (
                                        <span>{user.section}</span>
                                    )}
                                    <img
                                        onClick={() => setEditMode({ ...editMode, section: !editMode.section })}
                                        src={assets.edit}
                                        alt=""
                                        className='cursor-pointer w-5'
                                    />
                                </div>
                            </dd>
                        </div>

                        {/* Semester */}
                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Semester</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            <div className='flex gap-4 w-5 items-center'>
                                    {editMode.semester ? (
                                        <input
                                            onChange={(e) => handleInputChange('semester', e.target.value)}
                                            type="number"
                                            min={1}
                                            max={8}
                                            value={updatedUser.semester || ""}
                                            className='w-full px-3 py-2 border border-gray-880'
                                        />
                                    ) : (
                                        <span>{user.semester}</span>
                                    )}
                                    <img
                                        onClick={() => setEditMode({ ...editMode, semester: !editMode.semester })}
                                        src={assets.edit}
                                        alt=""
                                        className='cursor-pointer w-5'
                                    />
                                </div>
                            </dd>
                        </div>

                        {/* Roll Number */}
                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">University Roll Number</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            <div className='flex gap-4 w-5 items-center'>
                                    {editMode.roll ? (
                                        <input
                                            onChange={(e) => handleInputChange('roll', e.target.value)}
                                            type="text"
                                            value={updatedUser.roll || ""}
                                            className='w-full px-3 py-2 border border-gray-880'
                                        />
                                    ) : (
                                        <span>{user.roll}</span>
                                    )}
                                    <img
                                        onClick={() => setEditMode({ ...editMode, roll: !editMode.roll })}
                                        src={assets.edit}
                                        alt=""
                                        className='cursor-pointer w-5'
                                    />
                                </div>
                            </dd>
                        </div>

                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                <button onClick={handleSubmit} className='bg-black text-white rounded-2xl p-2 w-20'>
                                    Save
                                </button>
                            </dt>
                        </div>
                    </dl>
                </div>
            </div>
        </>
    );
};

export default UpdateUserDetails;
