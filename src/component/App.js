import { useState } from "react";
import QuestionList from "./QuestionList";

const App = () => {
  const [index, setIndex] = useState("0");

  const [ques, setQues] = useState({ ...QuestionList[index] });
  let defaultOption = ques.option[index];
  const [userOption, setUserOption] = useState({ defaultOption });

  const checkAns = (event) => {
    event.preventDefault();
    if (userOption == ques.ans) {
      console.log("Correct ans");
    } else {
      console.log("Incorrect Ans");
    }

    // moving the program to the next question
    let newIndex = Number(index) + 1;
    setIndex(newIndex);
    console.log(index);
    setUserOption(ques.option[index]);
    setQues({ ...QuestionList[index] });
  };

  const optionClicked = (event) => {
    setUserOption(event.target.value);
  };

  // console.log(QuestionList[0]);

  return (
    <div className="border border-black w-full p-4 bg-cyan-800 text-white flex flex-col gap-4">
      <h1>Question 1: {ques.ques}</h1>
      {/* options section */}
      <form className="flex flex-col gap-4" onSubmit={checkAns}>
        <div>
          <input
            onChange={optionClicked}
            type="radio"
            id="option1"
            name="options"
            value={ques.option[0]}
          />
          <label htmlFor="option1"> {ques.option[0]}</label>
        </div>

        <div>
          <input
            onChange={optionClicked}
            type="radio"
            id="option2"
            name="options"
            value={ques.option[1]}
          />
          <label htmlFor="option2"> {ques.option[1]}</label>
        </div>

        <div>
          <input
            onChange={optionClicked}
            type="radio"
            id="option3"
            name="options"
            value={ques.option[2]}
          />
          <label htmlFor="option3"> {ques.option[2]}</label>
        </div>

        <div>
          <input
            onChange={optionClicked}
            type="radio"
            id="option4"
            name="options"
            value={ques.option[3]}
          />
          <label htmlFor="option4"> {ques.option[3]}</label>
        </div>

        {/* button section for next and previous */}
        <section className="flex items-center gap-6">
          <button className="px-4 py-1 border">Prev</button>
          <button className="px-4 py-1 border">Next</button>
        </section>
      </form>
    </div>
  );
};

export default App;
