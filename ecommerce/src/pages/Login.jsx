import React , { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const {token,setToken,navigate, backendUrl} = useContext(ShopContext);
  const [name,setName] = useState('');
  const [password,setPassword] = useState('');
  const [email,setEmail] = useState('');
  const [course,setCourse] = useState('');
  const [section,setSection] = useState('');
  const [roll,setRoll] = useState('');
  const [semester,setSemester] = useState();

  const onSubmmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (currentState === 'Sign Up') {
        const response = await axios.post(backendUrl+'/api/user/register',{name,email,course,semester,section,roll,password})
        if(response.data.success){
          setToken(response.data.token)
          localStorage.setItem("token",response.data.token)
        }
        else{
          toast.error(response.data.message)
        }
        
      }
      else{
        const response = await axios.post(backendUrl+'/api/user/login',{email,password})
        if(response.data.success){
          setToken(response.data.token)
          localStorage.setItem("token",response.data.token)
        }
        else{
          toast.error(response.data.message)
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
      
    }
  };

  useEffect (() => {
    if(token){
      navigate('/')
    }
  },[token])
  return (
    <form
      onSubmit={onSubmmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text 3x1"> {currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800 " />
      </div>

      <div className="w-full px-3 py-2 flex flex-col gap-4">
        {currentState === 'Sign Up' ? (
          <>
          <input
            onChange={(e)=>setName(e.target.value)} value={name}
            type="text"
            className="w-Full px-3 py-2 border border-gray-880"
            placeholder="Name"
            required
          />
          <select  onChange={(e)=>setCourse(e.target.value)} className='border w-full border-gray-80  px-3 py-3'>
              <option value="" disabled selected hidden>Choose Course</option>
              <option value="B.Tech">B.Tech</option>
              <option value="BCA">BCA</option>
              <option value="MCA">MCA</option>
              <option value="BBA">BBA</option>
              <option value="B.Pharma">B.Pharma</option>
              <option value="BHMCT">BHMCT</option>
          </select>
          <input onChange={(e)=>setSemester(e.target.value)} value={semester} placeholder='Semester' type="Number" max={8} min={1} className='w-Full px-3 py-2 border border-gray-880' />
          <select  onChange={(e)=>setSection(e.target.value)} className='border w-full border-gray-80  px-3 py-3'>
              <option value="" disabled selected hidden>Choose Section</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
          </select>
          <input
            onChange={(e)=>setRoll(e.target.value)} value={roll}
            type="text"
            className="w-Full px-3 py-2 border border-gray-880"
            placeholder="University Roll Number"
            required
          />
          </>)
          

         : null}

        <input
          onChange={(e)=>setEmail(e.target.value)} value={email}
          type="email"
          className="w-Full px-3 py-2 border border-gray-880"
          placeholder="Email"
          required
        />
        <input
          onChange={(e)=>setPassword(e.target.value)} value={password}
          type="password"
          className="w-Full px-3 py-2 border border-gray-880"
          placeholder="Password"
          required
        />

        <div className="w-full flex justify-between text-sm mt-[-8px]">
          <p className=" cursor-pointer"></p>
          {currentState === 'Login' ? (
            <p
              onClick={() => setCurrentState('Sign Up')}
              className="cursor-pointer"
            >
              Create Account
            </p>
          ) : (
            <p
              onClick={() => setCurrentState('Login')}
              className="cursor-pointer"
            >
              Login Here
            </p>
          )}
        </div>
        <button className="w-1/2 m-auto bg-black text-white px-8 py-2 mt-4 ">
          {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
        </button>
      </div>
    </form>
  );
};

export default Login;
