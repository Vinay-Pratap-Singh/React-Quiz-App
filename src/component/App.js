import { useState } from "react";
import QuestionList from "./QuestionList.js";

const App = () => {
  const [index, setIndex] = useState(0);
  let [score, setScore] = useState(0);
  const [showResult, setResult] = useState(true);

  // function to check the answer
  const checkAns = (event) => {
    if (event.target.innerText == QuestionList[index].ans) {
      setScore(score + 1);
    }
    if (index + 1 < QuestionList.length) {
      setIndex(index + 1);
    } else {
      setResult(true);
    }
  };

  // function to restart the game
  const restart = () => {
    setIndex(0);
    setScore(0);
    setResult(false);
  };

  return (
    // main wrapper
    <div className="h-screen w-full bg-gray-400 flex items-center justify-center">
      {/* container for game */}
      <div className="bg-gray-600 text-white py-6 px-14 rounded flex flex-col items-center gap-6 w-[80vw]">
        <h1 className="text-3xl font-bold">Quiz App</h1>

        {showResult ? (
          <>
            {/* Answer Card */}
            <div className="flex flex-col gap-2 items-center justify-center font-semibold text-lg">
              <p>
                Your Total Score : <span className="font-bold text-green-500">{score}</span>
              </p>
              <p>
                Score Percentage :{" "}
                <span className="font-bold text-green-500">{(score / QuestionList.length) * 100} %</span>
              </p>
              <button onClick={restart} className="bg-gray-700 px-4 py-1 rounded hover:bg-gray-800 hover:text-green-500">Restart Game</button>
            </div>
          </>
        ) : (
          <>
            {/* question card */}
            <p>
              Question {index + 1} of {QuestionList.length}
            </p>
            <h1 className="text-xl font-semibold border px-4 py-1 rounded bg-gray-700 w-full">
              Question : {QuestionList[index].ques}
            </h1>
            <ul className="w-full">
              {QuestionList[index].option.map((opt, ind) => {
                return (
                  <li
                    className="border px-4 py-1 mb-2 rounded cursor-pointer hover:bg-gray-700 hover:border-black hover:text-green-500"
                    onClick={checkAns}
                    key={ind}
                  >
                    {opt}
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
