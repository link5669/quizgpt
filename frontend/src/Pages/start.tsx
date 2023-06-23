import { Link } from "react-router-dom";
import SetQuizData from "../Components/setQuizData";

export default function StartPage() {
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
		</>
	);
}
