import { Image } from "antd";
import { WrapperSliderStyle } from "./style";

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
      <WrapperSliderStyle {...settings}>
        {arrImages.map((image) => {
          return <Image src={image} alt="slider" preview={false} />;
        })}
      </WrapperSliderStyle>
    </div>
  );
};

export default SliderComponent;
