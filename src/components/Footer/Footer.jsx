import React from 'react'
import './Footer.css';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__container'>
      <p className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__border"></div>
      <div className='footer__info'>
        <p className='footer__date'>© 2022</p>
        <ul className="footer__links">
          <li>
            <a className="footer__link" href="https://practicum.yandex.ru" target="_blank" rel="noreferrer" >Яндекс.Практикум</a>
          </li>
          <li>
          <a className="footer__link " href="https://github.com/GalinaKhusnutdinova" target="_blank" rel="noreferrer" >Github</a>
          </li>
          <li>
          <a className="footer__link" href="." target="_blank" rel="noreferrer" >Facebook</a>
          </li>
        </ul>
      </div>
      </div>
    </footer>
  )
}

