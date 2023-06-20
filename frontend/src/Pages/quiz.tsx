import ReturnToStart from "../Components/returnToStart";
import { RootState } from "../redux/index.ts";
import { useSelector } from "react-redux";

export default function QuizPage() {
	const reduxQuestion = useSelector((state: RootState) => state.question);

	const questionNumber = reduxQuestion.currentQuestion;
	const questionData = reduxQuestion.data;

	const currentQuestionData = questionData[questionNumber];
	return (
		<div className="flex flex-col gap-3 h-full font-default text-center py-12">
			<ReturnToStart />
			<p className="text-4xl mx-8">
				{"Question #" +
					(questionNumber + 1) +
					": " +
					currentQuestionData.question}
			</p>
			<div className="flex flex-col justify-evenly items-center h-full">
				{currentQuestionData.answers.map((ans, i) => {
					return (
						<button
							className="bg-gray-200 rounded-full w-[75%] py-4 hover-scale shadow-md"
							key={i}
						>
							<p className="text-2xl">{ans}</p>
						</button>
					);
				})}
			</div>
		</div>
	);
}
