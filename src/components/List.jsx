import React from 'react'
import Card from './Card'
import Modal from './Modal'

const List = ({players}) => {
  return (
    <div className='list'>
   
      {players.map(el=><Card els ={el}/>)}

    </div>
  )
}

export default List
