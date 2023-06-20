import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux";

export default function ScorePage() {
	const topic = useSelector((state: RootState) => state.question.topic);
	const totalQuestions = useSelector(
		(state: RootState) => state.question.data.length
	);
	const score = useSelector((state: RootState) => state.user.score);

	return (
		<div className="flex flex-col gap-3 h-full font-default items-center text-center py-5">
			<div>
				{/* quiz topic block */}
				<p className="text-2xl text-gray-600 mx-8 pb-3 ">{"Quiz Topic: "}</p>
				<div className=" outline outline-gray-500 outline-4 py-3 px-14 rounded-2xl">
					<p className="text-center text-4xl px-20">{topic}</p>
				</div>
			</div>
			<div>
				{/* final score block */}
				<p className="text-2xl pt-8 pb-3  text-gray-600 mx-8">
					{"Final Score:"}
				</p>
				<div className="flex flex-col gap-5 outline outline-gray-500 outline-4 text-center py-16 rounded-3xl">
					<p className="text-8xl  px-20">{score + "/" + totalQuestions}</p>
				</div>
			</div>
			<div className="flex flex-row gap-60 py-5">
				<button className="bg-gray-200 rounded-full hover-scale shadow-md py-5 px-10">
					<p className="text-l">{"Play Again"}</p>
				</button>
				<Link to="/">
					<button className="bg-gray-200 rounded-full hover-scale shadow-md py-5 px-10">
						<p className="text-l">{"New Topic"}</p>
					</button>
				</Link>
			</div>
		</div>
	);
}
