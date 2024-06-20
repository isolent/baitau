import './Advantages.css'
function Advantages() {
    return (
        <div className="advantages-page">
            <h1>ПОЧЕМУ ВЫБИРАЮТ НАС</h1>
            <div className='adv-num'>
                <div className="items">
                    <p1>Применение передовых технологий и инновационных методов в исследовании и добыче</p1>
                    <img src="/images/icon1.png" alt="Изображение завода" />
                </div>
                <div className="items">
                    <p1>Профессионализм для эффективной разведки, разработки и добычи полезных ископаемых</p1>
                    <img src="/images/icon2.png" alt="Изображение завода" />

                </div>
                <div className="items">
                    <p1>Стратегические месторождения и доступ к ресурсам для надежного снабжения рынка</p1>
                    <img src="/images/icon3.png" alt="Изображение завода" />
                </div>
            </div>

            <div className='adv-num'>
                <div className="items">
                    <img src="/images/icon4.png" alt="Изображение завода" />
                    <p1>Соблюдение высоких стандартов безопасности и экологии для устойчивости</p1>
                </div>
                <div className="items">
                    <img src="/images/icon5.png" alt="Изображение завода" />
                    <p1>Гибкость и адаптивность для быстрой реакции на рыночные изменения и потребности клиентов</p1>

                </div>
                <div className="items">
                    <img src="/images/icon6.png" alt="Изображение завода" />
                    <p1>Прозрачность и открытость для доверительных отношений с партнерами и обществом</p1>
                </div>
            </div>
        </div>
    );
}

export default Advantages;