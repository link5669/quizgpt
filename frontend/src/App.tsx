import QuizScreen from "./Pages/quizScreen";
import StartScreen from "./Pages/startScreen";

function App() {
	return (
		<div className="w-screen h-screen bg-gray-100">
			{/* <StartScreen /> */}
			<QuizScreen questionNumber={1} questionData={placeholderData} />
		</div>
	);
}

const placeholderData = {
	question: "Which of the following is NOT a popular attraction in Boston?",
	answers: [
		"Fenway Park",
		"Freedom Trail",
		"Statue of Liberty",
		"USS Constitution",
	],
	correctAnswer: 2,
};

export default App;
