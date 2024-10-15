import React from "react";
const items = [
  {
    id: 2,
    category: "Overview",
    questions: [
      {
        id: 149,
        question: "Mục tiêu kinh doanh cụ thể mà dự án này hướng tới là gì?",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias repellat eos magnam libero ut enim quaerat molestiae voluptates, corrupti, magni saepe necessitatibus nobis, id quia. Distinctio fugiat ad deleniti perferendis quod tenetur consectetur facere sunt optio nostrum tempore numquam similique porro, vero impedit aliquam commodi sequi necessitatibus? Sapiente, voluptates libero.",
        note: "note 1",
        subQuestions: [
          {
            id: 218,
            question: "Ước tính số lượng User? sfsdf",
            answer: "new answer",
            note: "new note",
            questionAndAnswer: {
              id: 1160,
              question: "new Q&A",
              isSelected: false,
            },
          },
        ],
        questionAndAnswer: {
          id: 1092,
          question: "Q&A 1",
          isSelected: false,
        },
      },
    ],
  },
  {
    id: 3,
    category: "Project Type",
    subCategories: [
      {
        id: 4,
        category: "Loại Project",
        questions: [
          {
            id: 159,
            question:
              "Loại project cần thực hiện lần này là gì ?(Ví dụ: Phát triển mới, Upate tính năng, Upgrade/Migration,…)",
            answer: "",
            note: "",
            questionAndAnswer: {
              id: 1102,
              question: "",
              isSelected: false,
            },
          },
        ],
      },
    ],
  },
];
const MainUI = () => {
  console.log(items);
  return (
    <div>
      {items.map((category) => (
        <div key={category.id} className="category">
          <h2>{category.category}</h2>

          {category.questions &&
            category.questions.map((question) => (
              <div key={question.id} className="question">
                <h3>{question.question}</h3>
                <p> {question.answer}</p>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default MainUI;
