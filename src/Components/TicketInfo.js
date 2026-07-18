import React from 'react'
import { useState } from 'react'
const TicketInfo = (props) => {

    const [show,setShow] = useState(false)

  return (
    <div className={props.result}>
        {props.children}<span>: {props.count}</span>
        <img width='50px' src={props.image} alt={props.result}/>
        <button onClick={() => setShow(!show)}>Show Tasks</button>
        {show && props.ticketList.map((ticket) => <li key={ticket.id}>{ticket.name}</li>)}
    </div>
  )
}

export default TicketInfo
