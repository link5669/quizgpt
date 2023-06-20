import { Routes, Route } from "react-router-dom";
import QuizPage from "./Pages/quiz";
import StartPage from "./Pages/start";
import AboutPage from "./Pages/about";
import Loading from "./Pages/loading";
import ScorePage from "./Pages/score";

export default function App() {
	return (
		<div className="w-screen h-screen bg-gray-100">
			<Routes>
				<Route path="/" element={<StartPage />} />
				<Route path="/quiz" element={<QuizPage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/loading" element={<Loading />} />
				<Route path="/score" element={<ScorePage topic="Atlanta" score={4} totalQuestions={10} />} />
			</Routes>
		</div>
	);
}
