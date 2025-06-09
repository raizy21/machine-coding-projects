const QuizQuestions = [
  {
    question: "what is react primarily used for?",
    options: [
      "building databases",
      "handling HTTP requests",
      "building user interfaces",
      "data modeling",
    ],
    correctAnswer: "building user interfaces",
  },
  {
    question: "which method is used to update the state in react?",
    options: ["setState()", "updateState()", "modifyState()", "changeState()"],
    correctAnswer: "setState()",
  },
  {
    question: "what is JSX?",
    options: [
      "a CSS framework",
      "a syntax extension for js",
      "a database query language",
      "a library for routing",
    ],
    correctAnswer: "a syntax extension for js",
  },
  {
    question:
      "which of the following is used to pass data to components in React?",
    options: ["state", "functions", "props", "methods"],
    correctAnswer: "props",
  },
  {
    question: "what is the use of `useEffect` in React?",
    options: [
      "to update the state",
      "to perform side effects in function components",
      "to create class-based components",
      "to render the component",
    ],
    correctAnswer: "to perform side effects in function components",
  },
  {
    question: "what is the default state of a React component?",
    options: ["mutable", "immutable", "stateless", "mutable with conditions"],
    correctAnswer: "immutable",
  },
  {
    question:
      "which hook is used to create local component state in function components?",
    options: ["useState", "useEffect", "useContext", "useReducer"],
    correctAnswer: "useState",
  },
  {
    question: "what does the React `render()` method do?",
    options: [
      "it binds the component to the DOM",
      "it manipulates the component's state",
      "it outputs JSX to the DOM",
      "it updates the props",
    ],
    correctAnswer: "it outputs JSX to the DOM",
  },
  {
    question: "what is the purpose of `useMemo` hook?",
    options: [
      "to memoize a function",
      "to memoize a computed value to optimize performance",
      "to manage complex state logic",
      "to trigger side effects after rendering",
    ],
    correctAnswer: "to memoize a computed value to optimize performance",
  },
  {
    question: "what is React's virtual DOM?",
    options: [
      "an actual copy of the real DOM",
      "a lightweight representation of the actual DOM",
      "a plugin for performance enhancement",
      "a part of the backend server",
    ],
    correctAnswer: "a lightweight representation of the actual DOM",
  },
];

export default QuizQuestions;
