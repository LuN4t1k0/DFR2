import React from 'react'

const MyButton = ({text, id, action}) => {
  return (
    <button id={id} onClick={action}>{text.toUpperCase()}</button>
  )
}

export default MyButton