import { Col, Image, Row } from "antd";
import React from "react";
import IPhone13_Image from "../../assets/images/iphone_13.webp";
import IPhone13_Image_SM1 from "../../assets/images/iphone_13_sm1.webp";
import IPhone13_Image_SM2 from "../../assets/images/iphone_13_sm2.webp";
import IPhone13_Image_SM3 from "../../assets/images/iphone_13_sm3.webp";
import { WrapperStyleColImage, WrapperStyleImageSmall } from "./style";

const ProductDetailComponent = () => {
  const imageSmall = [
    IPhone13_Image_SM1,
    IPhone13_Image_SM2,
    IPhone13_Image_SM3,
    IPhone13_Image_SM1,
    IPhone13_Image_SM2,
    IPhone13_Image_SM3,
    
  ];
  return (
    <Row style={{ padding: "16px",background:"#fff" }}>
      <Col span={10}>
        <Image src={IPhone13_Image} alt="Image product" preview={false} />
        <Row style={{ paddingTop: "10px", justifyContent:"space-between" }}>
          {imageSmall.map((image) => {
            return (
              <WrapperStyleColImage span={24 / imageSmall.length}>
                <WrapperStyleImageSmall
                  src={image}
                  alt="image small"
                  preview={false}
                />
              </WrapperStyleColImage>
            );
          })}
        </Row>
      </Col>
      <Col span={14}></Col>
    </Row>
  );
};

export default ProductDetailComponent;
