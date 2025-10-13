import React, { useContext } from 'react'
import { AppContext } from '../Components/Utilities/ApiContext'
import Card from '../Components/Utilities/Card'
import Ftitle from '../Components/Utilities/Ftitle';

function Apps() {
  const {appsContext} = useContext(AppContext);
  
  return (
    <div className='bg-[#f5f5f5]'>
      <div className='py-20'>
        <Ftitle
                  title={"Our All Applications"}
                  content={"Explore All Apps on the Market developed by us. We code for Millions"}
                ></Ftitle>
      </div>
      <div className="flex justify-between mx-20 pb-5">
        <div className='text-2xl font-semibold'>({appsContext.length}) Apps Found </div>
        <div><label className="input w-xl">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" required placeholder="search Apps" />
</label></div>
      </div >
     <div className="grid grid-cols-4 mx-20 gap-4">
       {
        appsContext.map((data,index)=>(
          <Card key={index} data={data}></Card>
        ))
      }
     </div>
      
    </div>
  )
}

export default Apps
