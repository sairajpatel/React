import React, { useState } from 'react'

function Login({handleLogin}) {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
   const submitHandler=(e)=>{
      e.preventDefault();
      handleLogin(email,password);
      
    }
    return (
        <div className='flex  h-screen w-screen items-center justify-center'>
            <div className='border-2 rounded-xl border-emerald-600 p-20 '>
                <form
                onSubmit={(e)=>{
                    submitHandler(e);
                }}
                 className='flex flex-col items-center justify-center'>
                    <input required value={email} onChange={(e)=>{setEmail(e.target.value)}} className='outline-none  bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter Your Email' />
                    <input required value={password} onChange={(e)=>{setPassword(e.target.value)}}type="password"className=' outline-none  bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400 mt-10 '  placeholder='Enter Your Password' />
                    <button className='text-white  outline-none   border-none bg-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-white mt-10'>Login</button>

                </form>

            </div>

        </div>
    )
}

export default Login
