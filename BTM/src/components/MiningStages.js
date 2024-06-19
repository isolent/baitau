import React from 'react';
import StageCard from './StageCard';
import './MiningStages.css'; 

const stages = [
  {
    title: 'Разведка',
    image: '/images/разведка.png',
    description: 'Геологические исследования, геофизика и анализ проб с буровых скважин для оценки потенциала территории',
  },
  {
    title: 'Разработка',
    image: '/images/разработка.png',
    description: 'Разработка буровых проектов, методов добычи, инфраструктуры и экологической оценки воздействия',
  },
  {
    title: 'Добыча',
    image:  '/images/добыча.png',
    description: 'Бурение скважин, добыча, транспортировка и переработка полезных ископаемых, их хранение и распределение',
  },
];

const MiningStages = () => {
  return (
    <div className="mining-stages">
      {stages.map((stage, index) => (
        <StageCard
          key={index}
          title={stage.title}
          image={stage.image}
          description={stage.description}
        />
      ))}
    </div>
  );
};

export default MiningStages;
