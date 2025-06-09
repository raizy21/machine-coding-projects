import { useState } from "react"; // useState is a React hook that allows you to add state to functional components
import QuizQuestions from "./QuizQuestions.js"; // importing quiz questions from a separate file

const Quiz = () => {
  const [questionNum, setQuestionNum] = useState(0); // track the current question number
  const [score, setScore] = useState(0); // track the score
  const [isQuizFinished, setIsQuizFinished] = useState(false); // track if quiz is finished
  const [selectedOption, setSelectedOption] = useState(null); // track selected option

  // proceed to the next question
  const handleNextQuestion = () => {
    // check if the selected option is correct before moving to the next question
    if (selectedOption === QuizQuestions[questionNum].correctAnswer) {
      setScore(score + 1); // update the score if correct
    }

    // move to the next question or finish the quiz
    if (questionNum < QuizQuestions.length - 1) {
      setQuestionNum(questionNum + 1);
      setSelectedOption(null); // reset the selected option for the next question
    } else {
      setIsQuizFinished(true); // end quiz and show result
    }
  };

  // handle option selection
  const handleClick = (option) => {
    setSelectedOption(option); // allow the user to change the selected option
  };

  return (
    <>
      <h1>quiz app</h1>

      {isQuizFinished ? (
        // show result after the last question
        <div>
          <h2>quiz finished!</h2>
          <p>
            your score is: {score} out of {QuizQuestions.length}
          </p>
        </div>
      ) : (
        // show the current question
        <div>
          <h2>{QuizQuestions[questionNum].question}</h2>
          {QuizQuestions[questionNum].options.map((option, index) => (
            <p
              key={index}
              className={selectedOption === option ? "selected" : ""}
              onClick={() => handleClick(option)}
            >
              {option}
            </p>
          ))}

          <button onClick={handleNextQuestion} disabled={!selectedOption}>
            {questionNum < QuizQuestions.length - 1
              ? "next question"
              : "show result"}
          </button>
        </div>
      )}
    </>
  );
};

export default Quiz;
