import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState({email:'',password:''})

  const submitHandler = (e) =>{
    e.preventDefault();
  setUserData({
      email:email,
      password:password
    })
    setEmail('');
    setPassword('');
  }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
       <div>
        <img className='w-16 mb-10 ' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
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
      <p className='text-center'>New Here?<Link to='/signup' className='text-blue-600'>Create new Account</Link></p>
       </div>
       <div>
        <Link to='/captain-login' className="bg-[#10b461] flex  justify-center items-center text-white font-semibold mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base">Sign in as Captain</Link>
       </div>
    </div>
  )
}

export default UserLogin