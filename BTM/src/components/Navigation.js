import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <nav className='navigation'>
      <div className='text'>
      <div className='lang'>
      <ul>
        <li>
          <Link to="/">ҚАЗ </Link>
        </li>
        <li>
          <Link to="/">РУС  </Link>
        </li>
        <li>
          <Link to="/">ENG</Link>
        </li>
        </ul>
      </div>
      <div>
        <ul>
        <li>
          <Link to="/"> Введение</Link>
        </li>
        <li>
          <Link to="/">Преимущества</Link>
        </li>
        <li>
          <Link to="/">Инфраструктура</Link>
        </li>
        <li>
          <Link to="/">Партнеры</Link>
        </li>
        <li>
          <Link to="/">Новости</Link>
        </li>
        <li>
          <Link to="/">Вакансии</Link>
        </li>
        <li>
          <Link to="/">Контакты</Link>
        </li>
      </ul>
      </div>
    </div>

    </nav>
  );
}

export default Navigation;