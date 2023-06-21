import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newNumQuestions } from "../redux";

const EnterNumQuestions = () => {
  const [numQuestions, setNumQuestions] = useState<number>(1);
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setNumQuestions(parseInt(event.target.value));
    dispatch(newNumQuestions(numQuestions));
  };

  const numOptions = (): JSX.Element[] => {
    let options: JSX.Element[] = [];
    for (let i = 1; i <= 20; i++) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return options;
  };

  return (
    <div className="flex flex-row bg-gray-200 rounded-full custom-outline shadow-md px-8 py-1">
      <p>Select # of Questions: </p>
      <select
        className="bg-transparent text-lg text-gray-400 pl-5"
        value={numQuestions}
        onChange={handleChange}
      >
        {numOptions()}
      </select>
    </div>
  );
};

export default EnterNumQuestions;
