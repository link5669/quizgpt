import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateQuizData, resetScore } from "../redux";
import { MyQuiz } from "../../types/shared";
import { DEFAULT_DIFFICULTY } from "../config";

export default function SetQuizData() {
  const [quizData, setQuizData] = useState<MyQuiz>({
    numQuestions: 0,
    difficulty: DEFAULT_DIFFICULTY,
    topic: "",
  });
  const [error, setError] = useState("");
  const [dropdownWidth, setDropdownWidth] = useState(6);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const numOptions = (): JSX.Element[] => {
    const options: JSX.Element[] = [];
    for (let i = 1; i <= 20; i++) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return options;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setQuizData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (quizData.topic.length > 0) {
      dispatch(updateQuizData(quizData));
      dispatch(resetScore());
      navigate("/loading");
    } else {
      setError("Please enter a topic!");
    }

    console.log(quizData);
  };

  return (
    <div className="flex flex-col gap-5 text-xl items-center ">
      <form
        onSubmit={handleSubmit}
        name="quiz-form"
        className="flex flex-col gap-5 text-xl text-gray-400"
      >
        <div className="text-xl">
          <p className={"text-red-600"}>{error}</p>
          <div className="bg-gray-200 rounded-full custom-outline shadow-md flex flex-row">
            <input
              className="bg-transparent text-gray-600 placeholder-gray-400 focus-within:placeholder-gray-700 outline-none py-4 mx-4 pl-5 text-xl"
              type="text"
              name="topic"
              value={quizData.topic}
              onChange={handleInputChange}
              onKeyPress={(e) => {
                if (e.key !== "Enter") return;
                handleSubmit(e);
              }}
              placeholder="enter a topic"
            ></input>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-row rounded-full custom-outline shadow-md bg-gray-200 px-10 py-2">
            <p className="pr-3 text-gray-400">Select Difficulty: </p>
            <select
              className="bg-gray-300 rounded drop-shadow-sm text-gray-600 text-left pl-5"
              value={quizData.difficulty}
              onChange={handleInputChange}
              name="difficulty"
              placeholder="select difficulty"
            >
              <option value="easy">easy</option>
              <option value="medium">medium</option>
              <option value="hard">hard</option>
            </select>
          </div>

          <div className="flex flex-row rounded-full custom-outline bg-gray-200 shadow-md px-8 py-2">
            <p className="pr-2">Select # of Questions: </p>
            <select
              className="bg-gray-300 drop-shadow-md rounded text-gray-600 pl-5"
              value={quizData.numQuestions}
              onChange={handleInputChange}
              name="numQuestions"
            >
              {numOptions()}
            </select>
          </div>
        </div>
      </form>
      <button onClick={handleSubmit}>
        <div className="rounded-full bg-gray-200 hover-scale py-1">
          <p className="mx-6 text-gray-500">Start Quiz</p>
        </div>
      </button>
    </div>
  );
}
