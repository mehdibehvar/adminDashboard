import React from 'react'

export default function Error({error}) {
  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
    <div>
        <span className="material-icons text-primary">
        warning
        </span>
        <p>{error?error:"something went wrong"}</p>
 </div>
</div>

  )
} 
