import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react'

const CaptainSignup = () => {
  const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userData, setUserData] = useState({})
    const submitHandler = (e) => {
      e.preventDefault();
      setUserData({
        fullname:{
          firstname: firstName,
          lastname: lastName,
        },
          email: email,
          password: password
        
      })
      console.log(userData)
      setEmail("");
      setPassword('');
      setFirstName('');
      setLastName('');
    }

  return (
   <div className='py-5 px-5  h-screen flex flex-col justify-between'>
       <div>
        <img className='w-20 mb-2 ' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
      <form onSubmit={(e)=>{
        submitHandler(e);
        
      }}>

        <h3 className='text-lg font-medium mb-2'>
          What's your name
        </h3>
        <div className='flex gap-4 mb-5'>
        <input 
        required
        type="text" 
        className="bg-[#eeeeee]  w-1/2 rounded px-4 py-2 text-lg placeholder:text-base"
        name="firstname" 
        value={firstName}
        onChange={(e)=>{
          setFirstName(e.target.value)
        }}
        placeholder="First name"/>
        <input 
        required type="text" 
        className="bg-[#eeeeee]  w-1/2 rounded px-4 py-2  text-lg placeholder:text-sm"
        name="Lastname" 
        value={lastName}
        onChange={(e)=>{
          setLastName(e.target.value)
        }}

        placeholder="Last name"/>
        </div>



        <h3 className='text-lg font-medium mb-2'>What is you Email</h3>
        <input 
        required type="email" 
        className="bg-[#eeeeee] mb-6 rounded px-4 py-2  w-full text-lg placeholder:text-sm"
        name="email" 
        value={email}
        onChange={(e)=>{
          setEmail(e.target.value)
        }}

        placeholder="email@example.com"/>
        <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
        <input required type="password"
        value={password}
         onChange={(e)=>{
          setPassword(e.target.value)
        }}
        className="bg-[#eeeeee] mb-6 rounded px-4 py-2  w-full text-lg
        placeholder:text-base"
        name="password" 
        placeholder="password"/>
        <button 
         className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-sm"
        type="submit">Login</button>
        
      </form>
      <p className='text-center'>Already have an account?<Link to='/captain-login' className='text-blue-600'>Login Here</Link></p>
       </div>
       <div>
        <p className='text-[10px] leading-tight'>
          This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and 
          <span className='underline'> Terms of Service apply</span>
        </p>
       </div>
    </div>
  )
}

export default CaptainSignup