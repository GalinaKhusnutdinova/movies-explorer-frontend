import React from 'react'
import './ErrorNotFound.css'

import { useHistory } from 'react-router-dom'; 

export default function ErrorNotFound() {
  const history = useHistory(); 

  return (
    <div className="error">
      <div className="error__container">
        <p className="error__status">404</p>
        <p className="error__title">Страница не найдена</p>
        <button onClick={() => history.goBack()} type="button" className="error__back">Назад</button>
      </div>

    </div>
  )
}
