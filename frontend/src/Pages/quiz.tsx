import { useNavigate } from "react-router-dom";
import ReturnToStart from "../Components/returnToStart";
import { RootState, incrementScore, setQuestionIndex } from "../redux/index.ts";
import { useSelector, useDispatch } from "react-redux";

export default function QuizPage() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const questionIndex = useSelector(
		(state: RootState) => state.question.currentQuestionIndex
	);
	const questionData = useSelector((state: RootState) => state.question.data);
	const score = useSelector((state: RootState) => state.user.score);

	const handleButton = (buttonIndex: number) => {
		if (buttonIndex === questionData[questionIndex].correctAnswer) {
			correctResponse();
		} else {
			incorrectResponse();
		}
		if (questionIndex === questionData.length) {
			navigate("/score");
		} else dispatch(setQuestionIndex(questionIndex + 1));
	};

	const correctResponse = () => {
		console.log("correct!");
		dispatch(incrementScore());
	};

	const incorrectResponse = () => {
		console.log("WRONG!!!");
	};

	return (
		<div className="flex flex-col gap-3 h-full font-default text-center py-12">
			<ReturnToStart />
			<p className="text-4xl mx-8">
				{"Question #" +
					(questionIndex + 1) +
					": " +
					questionData[questionIndex].question}
			</p>
			<div className="absolute top-4 right-4 text-xl">
				<h2>Score: {score}</h2>
			</div>
			<div className="flex flex-col justify-evenly items-center h-full gap-2">
				{questionData[questionIndex].answers.map((ans, i) => {
					return (
						<button
							className="bg-gray-200 rounded-full w-[75%] py-4 hover-scale shadow-md"
							key={i}
							onClick={(e) => {
								e.preventDefault();
								handleButton(i);
							}}
						>
							<p className="text-2xl">{ans}</p>
						</button>
					);
				})}
			</div>
		</div>
	);
}
