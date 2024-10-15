import { Button } from "antd";
import React from "react";

const MockButton = ({ handleClick }) => {
  return (
    <div style={{ margin: "20px" }}>
      <Button onClick={handleClick} type="primary">
        AskAi
      </Button>
    </div>
  );
};

export default MockButton;
