// import * as React from 'react';
import './Contacts.css'
import MapComponent from './MapComponent';
function Contacts() {
    return(
        <div className="contacts-container">
            <div className="contacts">
                <h1>КОНТАКТЫ</h1>
                <p1>Головной офис</p1><br/><br/>
                <p1>г.Алматы</p1><br/><br/>
                <p1>Пр.Жибек Жолы, 135, офис 2071, 7 этаж</p1>
                <div className="logo-tel">
                    <img src="images/logo-tel.png" alt="Изображение телефона" style={{width: '20px'}}  />
                    <p1 className="logo-text">+7 (707) 777 77 77</p1>
                </div>
                <div className="logo-email">
                    <img src="images/logo-email.png" alt="Изображение сообщения" style={{width: '20px'}} />
                    <p1 className="logo-text">user@baitau.kz</p1>
                </div>
                <div className="buttonContainer">
                    <button className="contactUsButton">
                       Связаться с нами
                    </button>
                </div>
            </div>
            <div>
            <MapComponent />
            </div>
        </div>
    );
}

export default Contacts;