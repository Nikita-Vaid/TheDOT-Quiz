// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import "../../Styles/TestPage.css"; // Import CSS file

// const TestPage = () => {
//   const [questions, setQuestions] = useState([]);
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [answers, setAnswers] = useState({});
//   const [timeLeft, setTimeLeft] = useState(3600);
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios.get("http://localhost:5000/api/questions").then((res) => {
//       setQuestions(res.data);
//     });

//     const timer = setInterval(() => {
//       setTimeLeft((prev) => {
//         if (prev <= 1) {
//           clearInterval(timer);
//           submitTest();
//         }
//         return prev - 1;
//       });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const handleAnswer = (index) => {
//     setAnswers({ ...answers, [currentQuestion]: index });
//   };

//   const submitTest = async () => {
//     const userId = "user123";
//     await axios.post("http://localhost:5000/api/submit", { userId, responses: answers });
//     navigate("/result");
//   };

//   if (!questions.length) return <p>Loading...</p>;

//   return (
//     <div className="test-container">
//       <h2>Question {currentQuestion + 1}</h2>
//       <p>{questions[currentQuestion].question}</p>
//       <div className="options-container">
//         {questions[currentQuestion].options.map((option, index) => (
//           <button
//             key={index}
//             className={answers[currentQuestion] === index ? "selected" : ""}
//             onClick={() => handleAnswer(index)}
//           >
//             {option}
//           </button>
//         ))}
//       </div>
//       <div className="navigation-buttons">
//         <button onClick={() => setCurrentQuestion(currentQuestion - 1)} disabled={currentQuestion === 0}>
//           Previous
//         </button>
//         <button onClick={() => setCurrentQuestion(currentQuestion + 1)} disabled={currentQuestion === questions.length - 1}>
//           Next
//         </button>
//         <button onClick={submitTest}>Submit</button>
//       </div>
//       <p className="timer">Time Left: {Math.floor(timeLeft / 60)}:{timeLeft % 60}</p>
//     </div>
//   );
// };

// export default TestPage;

