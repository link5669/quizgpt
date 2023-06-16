import { useLocation } from "react-router-dom";
import { QuestionData } from "../../types/shared";
import ReturnToStart from "../Components/returnToStart";

interface Props {
	questionNumber: number;
	questionData: QuestionData[];
}

export default function QuizPage({ questionNumber, questionData }: Props) {
	const currentQuestionData = questionData[questionNumber];
	const location = useLocation();
	console.log(location.state);
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
