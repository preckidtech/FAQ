import React from "react";
import Data from "./Data";

const Faq = () => {
  const faqDetails = [
    {
      id: 1,
      question: "What is your TechStack",
      answer: "MERN STACK",
    },
    {
      id: 2,
      question: "What's your favorite framework",
      answer: "React",
    },
    {
      id: 3,
      question: "Which Social media do you use more frequently",
      answer: "Linkedin",
    },
    {
      id: 4,
      question: "Whats' your favorite colour",
      answer: "Blue",
    },
  ];
  return (
    <>
      <p className="text-3xl font-bold text-white bg-green-500 py-2 text-center">
        FAQ
          </p>
          <section className="faq-section">
              {
                  faqDetails.map((item => <Data  question={item.question} answer={item.answer} key={item.id}/>))
              }
          </section>
    </>
  );
};

export default Faq;
