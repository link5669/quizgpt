import { useState } from "react";
import { useDispatch } from "react-redux";
import { newDifficulty } from "../redux";

const EnterDifficulty = () => {
  const [difficulty, setDifficulty] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDifficulty(event.target.value);
    dispatch(newDifficulty(difficulty));
  };

  return (
    <div className = "flex flex-row bg-gray-200 rounded-full custom-outline shadow-md">
        <select 
        className="bg-transparent outline-none text-lg text-gray-400 text-left px-20 py-2"
        value = {difficulty}
        onChange = {handleChange}
        placeholder="select difficulty">
          <option value="">select difficulty</option>
          <option value="easy">easy</option>
          <option value="medium">medium</option>
          <option value="hard">hard</option>
        </select>
    </div>
  );
};

export default EnterDifficulty;
