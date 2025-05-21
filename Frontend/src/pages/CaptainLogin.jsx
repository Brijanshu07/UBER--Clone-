import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'

export const CaptainLogin = () => {
   const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [captainData, setCaptainData] = useState({})

  const submitHandler = (e) =>{
    e.preventDefault();
  setCaptainData({
      email:email,
      password:password
    })
    setEmail('');
    setPassword('');
  }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
       <div>
        <img className='w-20 mb-2 ' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
      <form onSubmit={(e)=>{
        submitHandler(e);
        
      }}>
        <h3 className='text-lg font-medium mb-2'>What is you Email</h3>
        <input 
        required type="email" 
        className="bg-[#eeeeee] mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base"
        name="email" 
        value={email}
        onChange={(e)=>{
          setEmail(e.target.value)
        }}

        placeholder="email@example.com"/>
        <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
        <input required type="password"
        value={password}
         onChange={(e)=>{setPassword(e.target.value)}}
         className="bg-[#eeeeee] mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base"
          name="password" placeholder="password"/>
        <button 
         className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base"
        type="submit">Login</button>
        
      </form>
      <p className='text-center'>Want to join the fleet<Link to='/captain-signup' className='text-blue-600'>Register as a Captain</Link></p>
       </div>
       <div>
        <Link to='/login' className="bg-[#d5622d] flex  justify-center items-center text-white font-semibold mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base">Sign in as User</Link>
       </div>
    </div>
  )
}
