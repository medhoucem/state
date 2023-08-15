import React from 'react'

const Modal = ({els,setshow}) => {
  return (
    <div className='bigmodal'>
      <div className='modal'>
      <button onClick={()=>setshow(false)}>x</button>
            <h1>name: {els.name}</h1>
            <h2>nationality: {els.nationality}</h2>
            
      </div>
    </div>
  )
}

export default Modal
