import React from 'react'
import Factcount from './Utilities/Factcount'

function Facts() {
  return (
    <>
    <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] py-20'>
      <h1 className='text-center text-5xl font-bold text-white'>Trusted by Millions, Built for You</h1>
      <div className='grid grid-cols-3 justify-items-center w-2/3 mx-auto mt-10 text-white text-center'>
        <Factcount title={'Total Downloads'} count={'29.6M'} productivity={'21% more than last month'}></Factcount>
        <Factcount title={'Total Reviews'} count={'906K'} productivity={'46% more than last month'}></Factcount>
        <Factcount title={'Active Apps'} count={'132+'} productivity={'31 more will Launch'}></Factcount>
      </div>
    </div>
    </>
  )
}

export default Facts
