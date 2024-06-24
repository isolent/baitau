import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Licencies.css';
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3
};

function Licencies() {
  return (
    <div className="licencies-page">
      <h1 className="licencies-text"> ЛИЦЕНЗИИ</h1>
      <div className="licencies-img">
        <Slider {...settings}>
        <div><img src="/images/lic1.png" alt="Изображение" /></div>
        <div><img src="/images/lic2.png" alt="Изображение" /></div>
        <div><img src="/images/lic3.png" alt="Изображение" /></div>
        <div><img src="/images/lic2.png" alt="Изображение" /></div>
        <div><img src="/images/lic1.png" alt="Изображение" /></div>
        <div><img src="/images/lic3.png" alt="Изображение" /></div>
        <div><img src="/images/lic2.png" alt="Изображение" /></div>
        <div><img src="/images/lic3.png" alt="Изображение" /></div>
        <div><img src="/images/lic1.png" alt="Изображение" /></div>

        </Slider>
      </div>
    </div>
  );
}

export default Licencies;
