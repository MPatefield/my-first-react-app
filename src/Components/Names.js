import React from 'react'

const Names = (props) => {
  return (
    <div>
      <h1>Names</h1>
      {props.names.map((name, index) => (
        <p key={index}>{name}</p>
      ))}
    </div>
  )
}

export default Names
