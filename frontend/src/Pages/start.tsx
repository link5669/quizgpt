import { Link, useLocation } from "react-router-dom";
import EnterTopic from "../Components/setQuizTopic";
import EnterDifficulty from "../Components/setDifficulty";
import EnterNumQuestions from "../Components/setNumQuestions";
import ErrorModal from "../Components/errorModal";
import { useEffect } from "react";
import { ERROR_TIMEOUT } from "../config";

export default function StartPage() {
	const location = useLocation();
	const errorMessage = location.state;
	useEffect(() => {
		setTimeout(() => {
			// Clears error message on page reload
			window.history.replaceState({}, document.title);
		}, ERROR_TIMEOUT);
	});
	return (
		<div className="flex flex-col text-center h-full justify-evenly">
			<div className="flex flex-col">
				<h1 className="text-6xl font-bold tracking-widest">quizify</h1>
				<h2 className="font-semibold">a project by PS interns 2023</h2>
			</div>
			<div className="flex flex-col items-center gap-6">
				<EnterTopic />
				<EnterNumQuestions />
				<EnterDifficulty />
				<Link to={"/about"}>
					<button className="rounded-full bg-gray-200 hover-scale py-1 text-gray-500">
						<p className="mx-6">about me</p>
					</button>
				</Link>
			</div>
			<ErrorModal message={errorMessage} />
		</div>
	);
}
