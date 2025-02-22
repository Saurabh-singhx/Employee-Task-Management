import React from 'react'
import Taskcreate from '../task/Taskcreate'
import Aalltask from '../task/Aalltask'
import Header from '../Header'

function Authdashboard(props) {
  // console.log(props)
  return (
    <div className='h-auto'>
        <Header changeUser={props.changeUser} data={props.data}/>
      <Taskcreate/>
      <Aalltask/>
    </div>
  )
}

export default Authdashboard
