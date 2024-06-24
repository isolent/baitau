import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Partners.css';
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3
};

function Partners() {
  return (
    <div className="partners-page">
      <h1 className="partners-text"> НАМ ДОВЕРЯЮТ</h1>
      <div className="partners-img">
        <Slider {...settings}>
          <div><img src="/images/partner1.png" alt="Изображение" /></div>
          <div><img src="/images/partner2.png" alt="Изображение" /></div>
          <div><img src="/images/partner3.png" alt="Изображение" /></div>
          <div><img src="/images/partner2.png" alt="Изображение" /></div>
          <div><img src="/images/partner1.png" alt="Изображение" /></div>
          <div><img src="/images/partner3.png" alt="Изображение" /></div>
          <div><img src="/images/partner2.png" alt="Изображение" /></div>
          <div><img src="/images/partner3.png" alt="Изображение" /></div>
          <div><img src="/images/partner1.png" alt="Изображение" /></div>
        </Slider>
      </div>
    </div>
  );
}

export default Partners;
