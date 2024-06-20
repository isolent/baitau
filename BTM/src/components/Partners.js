import './Partners.css'
import Slider from "react-slick";
function Partners() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToScroll: 4,
        slidesToShow: 4
      };
    return (
        <div className="partners-page">
            <h1 className="partners-text"> НАМ ДОВЕРЯЮТ</h1>
                <div className="partners-img">
                <Slider {...settings}>
                            <img src="/images/partner1.png" alt="Изображение" />
                            <img src="/images/partner2.png" alt="Изображение" />
                            <img src="/images/partner3.png" alt="Изображение" />
                </div>
        </div>
    );
}

export default Partners;