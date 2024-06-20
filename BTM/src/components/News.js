import React from 'react';
import './News.css';

const newsData = [
  {
    id: 1,
    image: "/images/news1.png" ,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque neque ligula, volutpat facilisis vehicula nec, aliquet id massa...',
    date: '32.05.2024',
  },
  {
    id: 2,
    image: "/images/news2.png" ,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque neque ligula, volutpat facilisis vehicula nec, aliquet id massa...',
    date: '32.05.2024',
  },
  {
    id: 3,
    image: "/images/news3.png" ,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque neque ligula, volutpat facilisis vehicula nec, aliquet id massa...',
    date: '32.05.2024',
  },
];

function News() {
  const handleViewMore = () => {
    alert('Load more news...');
  };

  return (
    <div className="news-section">
      <div className='head-news'>
        <h1>НОВОСТИ</h1>
        <button className="view-more-button" onClick={handleViewMore}>Смотреть больше</button>
      </div>
      <div className="news-grid">
        {newsData.map(news => (
          <div key={news.id} className="news-item">
            <img src={news.image} alt={`News ${news.id}`} />
            <div className="news-content">
              <p>{news.text}</p>
              <p className="news-date">{news.date}</p>
              <button className="read-more">&rarr;</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
