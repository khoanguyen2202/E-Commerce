import { SearchOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import React from "react";

const ButtonInputSearch = (props) => {
  const { size, placeholder, textButton } = props;
  return (
    <div style={{ display: "flex", backgroundColor: "#fff" }}>
      <Input
        size={size}
        placeholder={placeholder}
        bordered={false}
        style={{ backgroundColor: "#fff" }}
      />
      <Button
        size={size}
        icon={<SearchOutlined bordered={false} />}
        style={{ backgroundColor: "#fff",borderRadius:"0px" }}
      >
        {textButton}
      </Button>
    </div>
  );
};

export default ButtonInputSearch;
