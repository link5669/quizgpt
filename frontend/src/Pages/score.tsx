import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux";
import { handlePlayAgain } from "../helperFunctions";

export default function ScorePage() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const topic = useSelector((state: RootState) => state.question.topic);
	const totalQuestions = useSelector(
		(state: RootState) => state.question.data.length
	);
	const score = useSelector((state: RootState) => state.user.score);

	return (
		<div className="flex flex-col gap-3 h-full font-default items-center text-center py-5">
			{/* quiz topic block */}
			<h1 className="text-2xl text-gray-600 mx-8 pb-3">Quiz Topic:</h1>
			<div className="outline outline-gray-500 outline-4 py-3 px-16 sm:px-32 rounded-2xl">
				<h2 className="text-center text-4xl">{topic}</h2>
			</div>
			{/* final score block */}
			<h1 className="text-2xl pt-8 pb-3 text-gray-600 mx-8">Final Score:</h1>
			<div className="flex flex-col gap-5 outline outline-gray-500 outline-4 text-center py-16 rounded-3xl">
				<p className="text-8xl mx-10 sm:mx-20">
					{score + "/" + totalQuestions}
				</p>
			</div>
			<div className="flex flex-row py-5 px-2 gap-3 justify-evenly w-full">
				<button
					onClick={() => handlePlayAgain(dispatch, navigate)}
					className="bg-gray-200 rounded-full hover-scale shadow-md py-5 px-5 sm:px-10"
				>
					<p className="text-lg">Regenerate Questions</p>
				</button>
				<Link to="/">
					<button className="bg-gray-200 rounded-full hover-scale shadow-md py-5 px-5 sm:px-10">
						<p className="text-lg">Select a New Topic</p>
					</button>
				</Link>
			</div>
		</div>
	);
}
