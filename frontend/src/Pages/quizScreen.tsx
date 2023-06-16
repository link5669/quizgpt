import { QuestionData } from "./../../types/shared.d";

interface Props {
	questionNumber: number;
	questionData: QuestionData[];
}

export default function QuizScreen({ questionNumber, questionData }: Props) {
	const currentQuestionData = questionData[questionNumber];
	return (
		<div className="flex flex-col gap-3 h-full font-default text-center py-12">
			<p className="text-4xl mx-8">
				{"Question #" +
					(questionNumber + 1) +
					": " +
					currentQuestionData.question}
			</p>
			<div className="flex flex-col justify-evenly items-center h-full">
				{currentQuestionData.answers.map((ans) => {
					return (
						<button className="bg-gray-200 rounded-full w-[75%] py-4 hover-scale">
							<p className="text-2xl">{ans}</p>
						</button>
					);
				})}
			</div>
		</div>
	);
}
