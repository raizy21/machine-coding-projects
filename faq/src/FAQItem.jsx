import { useState, useEffect } from "react"; //useState and useEffect are React hooks

const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false); // useState is used to manage the open/close state of the FAQ item

  // useEffect is used to set the initial state of the FAQ item based on the index
  useEffect(() => {
    if (index === 0) {
      setIsOpen(true);
    }
  }, [index]);

  // toggleAnswer function toggles the open/close state of the FAQ item
  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container">
      <button
        onClick={toggleAnswer}
        aria-expanded={isOpen}
        aria-controls={`answer-${question}`}
        className="button"
      >
        {isOpen ? "▼" : "▶"}
      </button>
      <span className="question">{question}</span>
      {isOpen && (
        <p id={`answer-${question}`} className="answer">
          {answer}
        </p>
      )}
    </div>
  );
};

export default FAQItem;
