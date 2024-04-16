import { SearchOutlined } from "@ant-design/icons";
import React from "react";
import InputComponent from "../InputComponent/InputComponent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const ButtonInputSearch = (props) => {
  const {
    size,
    placeholder,
    textButton,
    bordered,
    backgroundColorInput = "#fff",
    backgroundColorButton = "rgb(13,92,182)",
    colorButton = "#fff",
  } = props;
  return (
    <div style={{ display: "flex" }}>
      <InputComponent
        size={size}
        placeholder={placeholder}
        style={{
          backgroundColor: backgroundColorInput,
          border: bordered,
          borderRadius: "0px",
        }}
      />
      <ButtonComponent
        size={size}
        icon={<SearchOutlined />}
        styleButton={{
          backgroundColor: backgroundColorButton,
          color: colorButton,
          border: "none",
          borderRadius: "0px",
        }}
        textButton={textButton}
        styleTextButton={{ color: colorButton }}
      ></ButtonComponent>
    </div>
  );
};

export default ButtonInputSearch;
