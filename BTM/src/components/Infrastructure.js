import './Infrastructure.css'
function Infrastructure() {
    return (
        <div className="infrastructure_page">
            <div className="infrastructure_text">
                <h1>ИНФРАСТРУКТУРА</h1>
                <p>Наша компания обладает современной и высокотехнологичной инфраструктурой,<br/>
                    специально разработанной для эффективной добычи полезных ископаемых.</p>
            </div>
            <div className="photo-container">
                <div className="item">
                    <img src="/images/photo1.png" className="img1" alt="Изображение завода" style={{ width: '400px' }} />
                    <div className="imgtext">
                        <p1>КЕРНО СКЛАД</p1><br/>
                        <p2>г.Караганда</p2><br/> <br/>
                        <p2>Современное хранилище с контролем<br/> условий для геологических образцов<br/> и лабораториями для анализа.</p2>
                    </div>
                </div>
                <div className="item">
                    <img src="/images/photo2.png" className="img2" alt="Изображение завода" style={{ width: '400px' }} />
                    <div className="imgtext">
                        <p1>ВАХТОВЫЙ ГОРОДОК</p1><br/>
                        <p2>пос.Береке</p2><br/><br/>
                        <p2>Комфортабельный жилой комплекс<br/> для временного проживания<br/> работников компании вблизи рабочих<br/> мест.</p2>
                    </div>
                </div>
                <div className="item">
                    <img src="/images/photo3.png" className="img3" alt="Изображение завода" style={{ width: '400px' }} />
                    <div className="imgtext">
                        <p1>КЕРНО СКЛАД</p1><br/>
                        <p2>г.Темиртау</p2><br/><br/>
                        <p2>Современное хранилище с контролем<br/> условий для геологических образцов<br/> и лабораториями для анализа.</p2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Infrastructure;