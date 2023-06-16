import { Link } from "react-router-dom";
import EnterTopic from "../Components/setQuizTopic";

export default function StartPage() {
	return (
		<div className="flex flex-col text-center h-full justify-evenly font-default">
			<div className="flex flex-col">
				<h1 className="text-4xl font-bold">quizify</h1>
				<h2 className="font-semibold">a project by PS interns 2023</h2>
			</div>
			<div className="flex flex-col items-center gap-6">
				<EnterTopic />
				<Link to={"/about"}>
					<button>
						<div className="rounded-full bg-gray-200 hover-scale py-1">
							<p className="mx-6">about me</p>
						</div>
					</button>
				</Link>
			</div>
		</div>
	);
}
