import { useState } from "react";
import { useDispatch } from "react-redux";
import { newNumQuestions } from "../redux";

const EnterNumQuestions = () => {
	const [numQuestions, setNumQuestions] = useState(10);
	const dispatch = useDispatch();

	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setNumQuestions(parseInt(event.target.value));
		dispatch(newNumQuestions(numQuestions));
	};

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

	return (
		<div className="flex flex-row bg-gray-200 rounded-full custom-outline shadow-md px-8 py-1 text-gray-500">
			<p>Select # of Questions: </p>
			<select
				className="bg-transparent text-lg pl-5 outline-none"
				value={numQuestions}
				onChange={handleChange}
			>
				{numOptions()}
			</select>
		</div>
	);
};

export default EnterNumQuestions;
