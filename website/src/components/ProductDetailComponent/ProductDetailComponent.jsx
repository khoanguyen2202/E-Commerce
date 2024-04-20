import { Col, Image, InputNumber, Row } from "antd";
import React from "react";
import IPhone13_Image from "../../assets/images/iphone_13.webp";
import IPhone13_Image_SM1 from "../../assets/images/iphone_13_sm1.webp";
import IPhone13_Image_SM2 from "../../assets/images/iphone_13_sm2.webp";
import IPhone13_Image_SM3 from "../../assets/images/iphone_13_sm3.webp";
import {
  WrapperAddressProduct,
  WrapperBtnQualityProduct,
  WrapperInputNumber,
  WrapperPriceProduct,
  WrapperPriceTextProduct,
  WrapperQualityProduct,
  WrapperStyleColImage,
  WrapperStyleImageSmall,
  WrapperStyleNameProduct,
  WrapperStyleTextSell,
} from "./style";
import { MinusOutlined, PlusOutlined, StarFilled } from "@ant-design/icons";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const ProductDetailComponent = () => {
  const imageSmall = [
    IPhone13_Image_SM1,
    IPhone13_Image_SM2,
    IPhone13_Image_SM3,
    IPhone13_Image_SM1,
    IPhone13_Image_SM2,
    IPhone13_Image_SM3,
  ];
  const onChange = () => {};
  return (
    <Row style={{ padding: "16px", background: "#fff", borderRadius: "4px" }}>
      <Col
        span={10}
        style={{ borderRight: "1px solid #e5e5e5", paddingRight: "8px" }}
      >
        <Image src={IPhone13_Image} alt="Image product" preview={false} />
        <Row style={{ paddingTop: "10px", justifyContent: "space-between" }}>
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
      <Col span={14} style={{ paddingLeft: "10px" }}>
        <WrapperStyleNameProduct>Apple iPhone 13</WrapperStyleNameProduct>
        <div>
          <StarFilled style={{ fontSize: "12px", color: "yellow" }} />
          <StarFilled style={{ fontSize: "12px", color: "yellow" }} />
          <StarFilled style={{ fontSize: "12px", color: "yellow" }} />
          <StarFilled style={{ fontSize: "12px", color: "yellow" }} />
          <StarFilled style={{ fontSize: "12px", color: "yellow" }} />
          <WrapperStyleTextSell> | Đã bán 1000+</WrapperStyleTextSell>
        </div>
        <WrapperPriceProduct>
          <WrapperPriceTextProduct>13.490.000</WrapperPriceTextProduct>
        </WrapperPriceProduct>
        <WrapperAddressProduct>
          <span>Giao đến </span>
          <span className="address">Q. 1, P. Bến Nghé, Hồ Chí Minh</span> -
          <span className="change-address"> Đổi địa chỉ</span>
        </WrapperAddressProduct>
        <div
          style={{
            margin: "10px 0 20px",
            borderTop: "1px solid #e5e5e5",
            borderBottom: "1px solid #e5e5e5",
            padding: "10px 0",
          }}
        >
          <div style={{ marginBottom: "10px" }}>Số lượng</div>
          <WrapperQualityProduct>
            <button style={{ border: "none", background: "transparent" }}>
              <MinusOutlined style={{ color: "#000", fontSize: "20px" }} />
            </button>

            <WrapperInputNumber
              defaultValue={3}
              onChange={onChange}
              size="small"
            />
            <button style={{ border: "none", background: "transparent" }}>
              <PlusOutlined style={{ color: "#000", fontSize: "20px" }} />
            </button>
          </WrapperQualityProduct>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <ButtonComponent
            size={40}
            styleButton={{
              backgroundColor: "rgb(255,57,69)",
              height: "48px",
              width: "220px",
              border: "none",
              borderRadius: "4px",
            }}
            textButton="Chọn mua"
            styleTextButton={{
              color: "#fff",
              fontSize: "15px",
              fontWeight: "700  ",
            }}
          ></ButtonComponent>
          <ButtonComponent
            size={40}
            styleButton={{
              backgroundColor: "#fff",
              height: "48px",
              width: "220px",
              border: "1px solid rgb(13,92,182)",
              borderRadius: "4px",
            }}
            textButton="Mua trả sau"
            styleTextButton={{ color: "rgb(13,92,182)", fontSize: "15px" }}
          ></ButtonComponent>
        </div>
      </Col>
    </Row>
  );
};

export default ProductDetailComponent;
