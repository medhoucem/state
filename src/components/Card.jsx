import { useState } from "react"
import Modal from "./Modal"


const Card = ({els}) => {
  const [show, setshow] = useState(false)
  return (
    
    <div className='card'>
      {show?<Modal setshow={setshow} els={els}/>:null}

       <img onClick={()=>setshow(true)} src={els.post} alt="" />
      

    </div>
  )
}

export default Card
