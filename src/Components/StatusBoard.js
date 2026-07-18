import React from 'react'
import completedImg from '../images/checked.png'
import inProgressImg from '../images/processing-time.png'
import failedImg from '../images/failed.png'
import TicketInfo from './TicketInfo'
import '../StatusBoard.css'
import { useState } from 'react'
const StatusBoard = () => {

    const [tickets, setTicket] = useState([
  { id: 1, name: 'Fix login bug', status: 'completed' },
  { id: 2, name: 'Update docs', status: 'in-progress' },
  { id: 3, name: 'Server crash', status: 'failed' },
  { id: 4, name: 'Add dark mode', status: 'completed' },
])

  return (
    <div className='status-board'>
      <TicketInfo ticketList={tickets.filter(ticket => ticket.status === 'completed')} count={tickets.filter(ticket => ticket.status === 'completed').length} result="completed" image={completedImg}>
        Completed
      </TicketInfo>
      <TicketInfo ticketList={tickets.filter(ticket => ticket.status === 'in-progress')} count={tickets.filter(ticket => ticket.status === 'in-progress').length} result="in-progress" image={inProgressImg}>
        In Progress
      </TicketInfo>
      <TicketInfo ticketList={tickets.filter(ticket => ticket.status === 'failed')} count={tickets.filter(ticket => ticket.status === 'failed').length} result="failed" image={failedImg}>
        Failed
      </TicketInfo>
    </div>
  )
}

export default StatusBoard
