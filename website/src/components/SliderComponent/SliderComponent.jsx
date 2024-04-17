import { Image } from "antd";
import Slider from "react-slick";

const SliderComponent = ({ arrImages }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
  };
  return (
    <div>
      <Slider {...settings}>
        {arrImages.map((image) => {
          return <Image src={image} alt="slider" preview={false} />;
        })}
      </Slider>
    </div>
  );
};

export default SliderComponent;
