import React from 'react'

import "./TextMessage.css"

export default function TextMessage(props) {

  return (
    <div className={`${props.isOpen ? 'message__open' : 'message__close'} message__open_${props.name}`}>
        <p className={`message__title message__title_${props.name}`}>{props.message}</p>
    </div>
  )
}
