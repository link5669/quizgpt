import { Link, useLocation } from "react-router-dom";
import SetQuizTopic from "../Components/setQuizTopic";
import ErrorModal from "../Components/errorModal";

export default function StartPage() {
	const location = useLocation();
	const errorMessage = location.state;
	console.log("error message: " + errorMessage);
	return (
		<div className="flex flex-col text-center h-full justify-evenly">
			<div className="flex flex-col">
				<h1 className="text-4xl font-bold tracking-widest">quizify</h1>
				<h2 className="font-semibold">a project by PS interns 2023</h2>
			</div>
			<div className="flex flex-col items-center gap-6">
				<SetQuizTopic />
				<Link to={"/about"}>
					<button>
						<div className="rounded-full bg-gray-200 hover-scale py-1">
							<p className="mx-6">about me</p>
						</div>
					</button>
				</Link>
			</div>
			<ErrorModal message={errorMessage} />
		</div>
	);
}
