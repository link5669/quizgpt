import { useState, FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateQuizData, resetScore } from "../redux";
import { MyQuiz } from "../../types/shared";
import { twMerge } from "tailwind-merge";
import { initialQuizState } from "../redux/slices/questionSlice";

export default function SetQuizData() {
	const [quizData, setQuizData] = useState<MyQuiz>(initialQuizState.quizData);
	const [emptyTopicError, setEmptyTopicError] = useState(false);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		if (quizData.topic.length > 0) {
			setEmptyTopicError(false);
		}
	}, [quizData.topic.length]);

	const numOptions = (): JSX.Element[] => {
		const options: JSX.Element[] = [];
		for (let i = 20; i > 0; i--) {
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
			setEmptyTopicError(true);
		}
	};

	return (
		<div className="flex flex-col gap-2 text-xl items-center text-gray-600 px-2">
			<form
				onSubmit={handleSubmit}
				name="quiz-form"
				className="flex flex-col gap-2"
			>
				<div className="text-xl">
					<p
						className={twMerge(
							"opacity-0 text-red-600",
							emptyTopicError && "opacity-100"
						)}
					>
						Please enter a topic!
					</p>
					<div className="bg-gray-200 rounded-full custom-outline shadow-md flex flex-row">
						<input
							className="bg-transparent w-full text-gray-700 placeholder-gray-400 focus-within:placeholder-gray-700 outline-none py-5 mx-4 pl-5 text-xl"
							type="text"
							name="topic"
							value={quizData.topic}
							onChange={handleInputChange}
							// onKeyDown={(e) => {
							// 	if (e.key !== "Enter") return;
							// 	handleSubmit(e);
							// }}
							placeholder="enter a topic"
						></input>
					</div>
				</div>
				<div className="flex flex-row rounded-full custom-outline shadow-md bg-gray-200 px-8 py-2">
					<label className="pr-3" htmlFor="difficulty">
						Select Difficulty:
					</label>
					<select
						className="bg-gray-300 rounded drop-shadow-sm text-left ml-5 pl-2 outline-none"
						value={quizData.difficulty}
						onChange={handleInputChange}
						name="difficulty"
					>
						<option value="extremely hard">hard+</option>
						<option value="hard">hard</option>
						<option value="medium">medium</option>
						<option value="easy">easy</option>
					</select>
				</div>

				<div className="flex flex-row rounded-full custom-outline bg-gray-200 shadow-md px-8 py-2">
					<label className="pr-2" htmlFor="numQuestions">
						Select # of Questions:
					</label>
					<select
						className="bg-gray-300 drop-shadow-md rounded pl-2 ml-3 outline-none"
						value={quizData.numQuestions}
						onChange={handleInputChange}
						name="numQuestions"
					>
						{numOptions()}
					</select>
				</div>
				<div className="flex flex-row justify-between">
					<div className="flex flex-row items-center gap-2 rounded-full bg-gray-200 py-1 px-6 custom-outline shadow-md">
						<input
							type="checkbox"
							name="gpt4"
							className="outline-none"
							onChange={handleInputChange}
						/>
						<label htmlFor="gpt4">Use GPT-4</label>
					</div>
					<button
						onClick={handleSubmit}
						className="rounded-full bg-gray-200 hover-scale py-1 px-6 custom-outline shadow-md"
					>
						Start Quiz
					</button>
				</div>
			</form>
		</div>
	);
}
