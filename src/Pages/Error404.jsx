import React from 'react'
import img from '../assets/error-404.png'
import { NavLink } from 'react-router-dom'

function Error404() {
  return (
    <div className='bg-[#f5f5f5] p-20'>
        <img src={img} alt="" className='w-fit m-auto'/>
        <div className='text-center'>
          <h3 className='font-semibold text-5xl text-[#001931]'>Oops, page not found!</h3>
        <p className='text-[#627382] text-xl p-6'>The page you are looking for is not available.</p>
        </div>
        <div className='flex justify-center'>
          <NavLink
            to={"/"}
            className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold text-center mx-auto"
          >
            Go Back!
          </NavLink>
        </div>
    </div>
  )
}

export default Error404
