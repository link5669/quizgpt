import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState, resetScore } from "../redux";

export default function ScorePage() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const topic = useSelector((state: RootState) => state.question.topic);
	const totalQuestions = useSelector(
		(state: RootState) => state.question.data.length
	);
	const score = useSelector((state: RootState) => state.user.score);

	const handlePlayAgain = () => {
		dispatch(resetScore());
		navigate("/loading");
	};

	return (
		<div className="flex flex-col gap-3 h-full font-default items-center text-center py-5">
			{/* quiz topic block */}
			<h1 className="text-2xl text-gray-600 mx-8 pb-3">Quiz Topic:</h1>
			<div className="outline outline-gray-500 outline-4 py-3 px-14 rounded-2xl">
				<p className="text-center text-4xl px-20">{topic}</p>
			</div>
			<div>
				{/* final score block */}
				<h2 className="text-2xl pt-8 pb-3 text-gray-600 mx-8">Final Score:</h2>
				<div className="flex flex-col gap-5 outline outline-gray-500 outline-4 text-center py-16 rounded-3xl">
					<p className="text-8xl px-20">{score + "/" + totalQuestions}</p>
				</div>
			</div>
			<div className="flex flex-row gap-60 py-5">
				<button
					onClick={handlePlayAgain}
					className="bg-gray-200 rounded-full hover-scale shadow-md py-5 px-10"
				>
					<p className="text-lg">Play Again</p>
				</button>
				<Link to="/">
					<button className="bg-gray-200 rounded-full hover-scale shadow-md py-5 px-10">
						<p className="text-lg">New Topic</p>
					</button>
				</Link>
			</div>
		</div>
	);
}
