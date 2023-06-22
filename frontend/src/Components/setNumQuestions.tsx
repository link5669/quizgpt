import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { newNumQuestions } from "../redux";
import { DEFAULT_NUM_QUESTIONS } from "../config";

const EnterNumQuestions = () => {
	const [numQuestions, setNumQuestions] = useState(DEFAULT_NUM_QUESTIONS);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(newNumQuestions(numQuestions));
	}, [dispatch, numQuestions]);

	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setNumQuestions(parseInt(event.target.value));
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
				className="bg-transparent text-lg pl-5 outline-none cursor-pointer"
				value={numQuestions}
				onChange={handleChange}
			>
				{numOptions()}
			</select>
		</div>
	);
};

export default EnterNumQuestions;
