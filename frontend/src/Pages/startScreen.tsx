import AboutButton from "../Components/about";
import { EnterTopic } from "../Components/setQuizTopic";

export const StartScreen = () => {
	return (
		<div className="flex flex-col text-center h-full justify-evenly font-default">
			<div className="flex flex-col">
				<h1 className="text-4xl font-bold">quizify</h1>
				<h2 className="font-semibold">a project by PS interns 2023</h2>
			</div>
			<div className="flex flex-col items-center gap-6">
				<EnterTopic />
				<AboutButton />
			</div>
		</div>
	);
};
