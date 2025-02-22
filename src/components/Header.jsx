import React, { useState } from 'react'

function Header(props) {

  const handlelogout = (e)=>{
    // localStorage.clear()
    localStorage.setItem('loggedinuser','');
    props.changeUser('')
    // window.location.reload();
  }
  // console.log(props.data)
  const userName = props.data?.name || 'Admin';
  return (
    <div className='bg-slate-800 px-8 py-2 flex items-center justify-between w-full mt-3'>
      <div>
        <p className='text-slate-200 font-semibold'>Hello Admin,</p>
        <span className='text-zinc-50 font-semibold text-2xl'>{userName}🤖</span>
        {/* <span className='text-zinc-50 font-semibold text-xs'> Admin</span> */}
      </div>

      <button onClick={handlelogout}
      className='text-slate-50 p-2 bg-red-400 rounded-lg font-semibold'>Log out</button>
    </div>
  )
}

export default Header
