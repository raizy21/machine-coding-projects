# quiz

this code creates a simple quiz app using react.

here is a breakdown of its functionality:

- state variables:

  - questionNum: tracks the current question number.
  - score: keeps track of the user's score.
  - isQuizFinished: determines if the quiz is over and the result should be shown.
  - selectedOption: stores the option the user selects for the current question.

  - quiz flow: the app displays one question at a time from the quiz questions array. the user selects an answer by clicking on one of the options. after selecting an option, they can click the "next question" button to proceed to the next question. if the selected option matches the correct answer, the score is incremented.

  - end of quiz: when the user answers all the questions, the quiz finishes, and the final score is displayed.

  - rendering: the quiz shows either the current question and options or the final score once the quiz is finished.

    - the "next question" button is disabled until the user selects an option. in essence, this is a basic multiple-choice quiz app where users can answer questions, move to the next one, and view their score at the end.
