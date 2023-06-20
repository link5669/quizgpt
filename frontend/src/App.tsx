import { Routes, Route } from "react-router-dom";
import QuizPage from "./Pages/quiz";
import StartPage from "./Pages/start";
import AboutPage from "./Pages/about";
import ScorePage from "./Pages/score";

function App() {
	return (
		<div className="w-screen h-screen bg-gray-100">
			<Routes>
				<Route path="/" element={<StartPage />} />
				<Route
					path="/quiz"
					element={
						<QuizPage questionNumber={0} questionData={placeholderData} />
					}
				/>
				<Route path="/about" element={<AboutPage />} />
				<Route path="/score" element={<ScorePage />} />
			</Routes>
		</div>
	);
}

const placeholderData = [
	{
		question: "Which of the following is NOT a popular attraction in Boston?",
		answers: [
			"Fenway Park",
			"Freedom Trail",
			"Statue of Liberty",
			"USS Constitution",
		],
		correctAnswer: 2,
	},
	{
		question:
			"Example really long question Example really long question Example really long question Example really long question Example really long question Example really long question Example really long question Example really long question Example really long question Example really long question Example really long question Example really long question Example really long question?",
		answers: [
			"Example really long answer Example really long answer Example really long answer Example really long answer Example really long answer ",
			"Freedom Trail",
			"Statue of Liberty",
			"USS Constitution",
		],
		correctAnswer: 2,
	},
];

export default App;
