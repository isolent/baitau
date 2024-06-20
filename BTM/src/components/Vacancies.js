import React from 'react';
import './Vacancies.css';

const vacanciesData = [
  { id: 1, title: 'Менеджер по обработке данных' },
  { id: 2, title: 'Менеджер по обработке данных' },
  { id: 3, title: 'Менеджер по обработке данных' },
  { id: 4, title: 'Менеджер по обработке данных' },
];

function Vacancies() {
  return (
    <div className="vacancies-section">
      <h1>ВАКАНСИИ</h1>
      <div className="vacancies-grid">
        {vacanciesData.map(vacancy => (
          <div key={vacancy.id} className="vacancy-item">{vacancy.title}</div>
        ))}
      </div>
    </div>
  );
}

export default Vacancies;
