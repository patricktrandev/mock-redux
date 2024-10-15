import React, { useState } from "react";
import MockButton from "./MockButton";
import MockAI from "./MockAI";
import { render } from "@testing-library/react";
const data = [
  {
    id: 1,
    question: "Mục tiêu kinh doanh cụ thể mà dự án này hướng tới là gì?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiasrepellat eos magnam libero ut enim quaerat molestiae voluptates",
  },
  //   {
  //     id: 2,
  //     question: " cụ thể mà dự án này hướng tới là gì?",
  //     answer:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiasrepellat eos magnam libero ut enim quaerat molestiae voluptates",
  //   },
];
export const MockHover = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const renderButton = () => {
    if (isHovered) {
      return <MockButton handleClick={handleOpen} />;
    }
  };
  const handleOpen = () => {
    setIsVisible(true);
  };

  const renderUI = data.map((item, index) => {
    return (
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {renderButton()}
        <h3>{item.question}</h3>
        <p>{item.answer}</p>
        {isVisible && <MockAI setIsVisible={setIsVisible} />}
      </div>
    );
  });
  return <div>{renderUI}</div>;
};

export default MockHover;
