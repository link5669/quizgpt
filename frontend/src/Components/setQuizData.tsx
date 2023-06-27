import { useState, FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateQuizData, resetScore, RootState } from "../redux";
import { MyQuiz, QuizState } from "../../types/shared";
import { twMerge } from "tailwind-merge";

export default function SetQuizData() {
	const reduxQuizData: QuizState = useSelector(
		(state: RootState) => state.question
	);
	const [quizData, setQuizData] = useState<MyQuiz>(reduxQuizData.quizData);
	const [emptyTopicError, setEmptyTopicError] = useState(false);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		if (quizData.topic.length > 0) {
			setEmptyTopicError(false);
		}
	}, [quizData.topic.length]);

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value } = e.target;
		let parsedVal: string | number | boolean;
		switch (name) {
			case "numQuestions":
				parsedVal = parseInt(value);
				break;
			case "gpt4":
				parsedVal = !quizData.gpt4;
				break;
			default:
				parsedVal = value;
		}
		setQuizData((prevState) => ({ ...prevState, [name]: parsedVal }));
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

	return (
		<div className="flex flex-col gap-2 text-xl items-center text-gray-600 px-2">
			{reduxQuizData.data.length > 0 &&
				reduxQuizData.currentQuestionIndex <
					reduxQuizData.quizData.numQuestions && (
					<div>Continue Quiz</div>
				)}
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
						id="difficulty"
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
						id="numQuestions"
					>
						{numOptions()}
					</select>
				</div>
				<div className="flex flex-row justify-between">
					<div className="flex flex-row items-center gap-2 rounded-full bg-gray-200 py-1 px-6 custom-outline shadow-md">
						<input
							type="checkbox"
							name="gpt4"
							id="gpt4"
							className="outline-none"
							onChange={handleInputChange}
							checked={!!quizData.gpt4}
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
