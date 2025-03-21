import React, { useState } from "react";

const Data = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer); // this update it to true when the button is clicked 
  };

  return (
    <>
      <section className="faq-section w-[500px] m-auto mt-2">
        <section className="question-section bg-blue-500 text-white p-4 flex justify-between align-middle rounded-md">
          <p>{question}</p>
          <button className="text-red-500 text-3xl" onClick={toggleAnswer}>
            {showAnswer ? "-" : "+"}
          </button>
        </section>
        {showAnswer && (
          <section className="answer-section p-4 bg-gray-100 rounded-md mt-2">
            <p>{answer}</p>
          </section>
        )}
      </section>
    </>
  );
};

export default Data;
