import './Home.css'
import React from 'react';

function Home() {
  return (
    <div className="image-container">
     <img src="/images/photo.png" alt="Sample" className="overlay-image" style={{ width: 1450}}/>
      <div className="overlay-text">
         <h1>ЛИДЕРЫ В ДОБЫЧЕ И ПРОИЗВОДСТВЕ ЦВЕТНЫХ МЕТАЛЛОВ</h1></div>
    </div>
    // <div className="home-page">
    //   <div className="welcome">
    //     <div className="welcome-block">
    //       <h1>ЛИДЕРЫ В ДОБЫЧЕ И ПРОИЗВОДСТВЕ ЦВЕТНЫХ МЕТАЛЛОВ</h1>
    //       <p > Добро пожаловать в мир качества и надежности!
    //       </p>
    //     </div>
    //   </div>
    //   <div className="image-container">
    //     <img src="/images/photo.png" alt="Изображение" style={{ width: 1450}} />
    //   </div>
    // </div>
  );
}

export default Home;