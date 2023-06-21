import { useNavigate } from "react-router-dom";
import ReturnToStart from "../Components/returnToStart";
import { RootState, incrementScore, incrementIndex } from "../redux/index.ts";
import { useSelector, useDispatch } from "react-redux";

export default function QuizPage() {
	const answerTimeout = 2500;
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const questionIndex = useSelector(
		(state: RootState) => state.question.currentQuestionIndex
	);
	const questionData = useSelector((state: RootState) => state.question.data);
	const score = useSelector((state: RootState) => state.user.score);

	const handleButton = (
		buttonIndex: number,
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		const target = event.currentTarget as Element;
		if (buttonIndex === questionData[questionIndex].correctAnswer) {
			correctResponse(target);
		} else {
			incorrectResponse(target);
		}
		setTimeout(() => {
			if (questionIndex === questionData.length - 1) {
				navigate("/score");
			} else dispatch(incrementIndex());
		}, answerTimeout);
	};

	const correctResponse = (element: Element) => {
		element.classList.add("bg-green-500");
		dispatch(incrementScore());
		setTimeout(() => {
			element.classList.remove("bg-green-500");
		}, answerTimeout);
	};

	const incorrectResponse = (element: Element) => {
		element.classList.add("bg-red-500");
		setTimeout(() => {
			element.classList.remove("bg-red-500");
		}, answerTimeout);
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
								handleButton(i, e);
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
