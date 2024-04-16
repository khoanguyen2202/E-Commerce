import { SearchOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import React from "react";

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
      <Input
        size={size}
        placeholder={placeholder}
        style={{
          backgroundColor: backgroundColorInput,
          border: bordered,
          borderRadius: "0px",
        }}
      />
      <Button
        size={size}
        icon={<SearchOutlined />}
        style={{
          backgroundColor: backgroundColorButton,
          color: colorButton,
          border: "none",
          borderRadius: "0px",
        }}
      >
        <span style={{ color: colorButton }}>{textButton}</span>
      </Button>
    </div>
  );
};

export default ButtonInputSearch;
