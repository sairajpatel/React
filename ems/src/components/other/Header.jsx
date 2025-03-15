import React from 'react'
import { setLocalStoarge } from '../../utils/localstorage'

function Header(props) {
   const Logout=(()=>{
    localStorage.setItem('loggedInUser','');
    window.location.reload();
    props.changeUser('');
   
    })
    return (
        <div className='flex items-end justify-between'>
            <h1 className='text-2xl font-medium'>Hello  <br/><span className='text-3xl font-semibold'>{props.data?.firstName ? props.data.firstName : "Admin"}  😊</span> </h1>
            <button onClick={Logout} className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-xl'>Log Out</button>
        </div>
    )
}

export default Header
