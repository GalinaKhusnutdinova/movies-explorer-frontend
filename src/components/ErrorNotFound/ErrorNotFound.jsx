import React from 'react'
import './ErrorNotFound.css'

export default function ErrorNotFound() {
  return (
    <div className="error">
      <div className="error__container">
        <p className="error__status">404</p>
        <p className="error__title">Страница не найдена</p>
        <button type="button" className="error__back">Назад</button>
      </div>

    </div>
  )
}
