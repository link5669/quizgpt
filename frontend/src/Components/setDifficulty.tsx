import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { newDifficulty } from "../redux";
import { DEFAULT_DIFFICULTY } from "../config";

const EnterDifficulty = () => {
	const [difficulty, setDifficulty] = useState(DEFAULT_DIFFICULTY);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(newDifficulty(difficulty));
	}, [difficulty, dispatch]);

	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setDifficulty(event.target.value);
	};

	return (
		<div className="flex flex-row bg-gray-200 rounded-full custom-outline shadow-md px-10 py-1 text-gray-500">
			<p>Select Difficulty: </p>
			<select
				className="bg-transparent outline-none text-left pl-5"
				value={difficulty}
				onChange={handleChange}
				placeholder="select difficulty"
			>
				<option value="easy">easy</option>
				<option value="medium">medium</option>
				<option value="hard">hard</option>
			</select>
		</div>
	);
};

export default EnterDifficulty;
