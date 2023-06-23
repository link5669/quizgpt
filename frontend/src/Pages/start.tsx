import { Link, useLocation } from "react-router-dom";
import SetQuizData from "../Components/setQuizData";
import { useEffect } from "react";
import { ERROR_TIMEOUT } from "../config";
import ErrorModal from "../Components/errorModal";

export default function StartPage() {
	const location = useLocation();
	const errorMessage = location.state;
	useEffect(() => {
		setTimeout(() => {
			// Clears error message on page reload
			window.history.replaceState({}, document.title);
		}, ERROR_TIMEOUT);
	}, [errorMessage]);
	return (
		<>
			<Link to="/about">
				<button className="rounded-full bg-gray-200 text-gray-700 hover-scale py-1 px-3 absolute top-5 right-5 custom-outline">
					about quizify
				</button>
			</Link>
			<div className="flex flex-col text-center h-full justify-evenly">
				<div className="flex flex-col">
					<h1 className="text-7xl font-bold tracking-widest">
						quizify
					</h1>
					<h2 className="font-semibold">
						a project by PS interns 2023
					</h2>
				</div>
				<SetQuizData />
			</div>
			<ErrorModal message={errorMessage} />
		</>
	);
}
