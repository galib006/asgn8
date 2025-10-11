import React from 'react'

function Factcount({title,count,productivity}) {
  return (
    <div>
      <p className='text-base text-[##ffffffb0]'>{title}</p>
      <h2 className='text-6xl font-bold my-3'>{count}</h2>
      <p className='text-base text-[##ffffffb0]'>{productivity}</p>
    </div>
  )
}

export default Factcount
