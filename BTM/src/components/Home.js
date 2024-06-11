import './Home.css'
import React from 'react';

function Home() {
  return (
    <div className="image-container">
     <img src="/images/photo.png" alt="Sample" className="overlay-image" />
      <div className="overlay-text">
         <p className='big-text'>ЛИДЕРЫ В ДОБЫЧЕ <br/>
            И ПРОИЗВОДСТВЕ <br/>
            ЦВЕТНЫХ <br/> МЕТАЛЛОВ</p>
            <p className='line'>____________________________________________________</p>
            <p className='welcome-text'> Добро пожаловать в мир качества и <br/> надежности!
          </p>
            </div>
    </div>
  );
}

export default Home;