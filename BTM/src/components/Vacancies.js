import React from 'react';
import './Vacancies.css';

const vacanciesData = [
  { id: 1, title: 'Менеджер по обработке данных' },
  { id: 2, title: 'Эксперт по развитию производства ' },
  { id: 3, title: 'Ведущий геолог' },
  { id: 4, title: 'Инженер геомеханик' },
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
