import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux";
import { handlePlayAgain, getScores } from "../helperFunctions";
import axios from "axios";
import { useEffect, useState } from "react";

export default function ScorePage() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const topic = useSelector((state: RootState) => state.question.topic);
	const totalQuestions = useSelector(
		(state: RootState) => state.question.data.length
	);
	const score = useSelector((state: RootState) => state.user.score);
	const [name, setName] = useState("");
	const [scores, setScores] = useState([]);
	/**
	 * scores has an array of scores fetched from Firebase, fetched on page load
	 * scores is an array with a series of objects in the format
	 * {score: int, topic: string, username: string}
	 */

	const handleSubmit = (e) => {
		e.preventDefault();
		const postScore = async () => {
			await axios
				.post(
					`/api/scores?
						username=${name}
						&topic=${topic}
						&score=${score}`
				)
				.then((response) => console.log(response));
		};
		postScore();
	};

	useEffect(() => {
		getScores().then((response) => {
			setScores(response)
		});
	}, []);

		return (
			<div className="flex flex-col gap-3 h-full font-default items-center text-center py-5">
				{/* quiz topic block */}
				<h1 className="text-2xl text-gray-600 mx-8 pb-3">
					Quiz Topic:
				</h1>
				<div className="outline outline-gray-500 outline-4 py-3 px-16 sm:px-32 rounded-2xl">
					<h2 className="text-center text-4xl">{topic}</h2>
				</div>
				{/* final score block */}
				<h1 className="text-2xl pt-8 pb-3 text-gray-600 mx-8">
					Final Score:
				</h1>
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
							<p className="text-lg">Select New Topic</p>
						</button>
					</Link>
				</div>
				<form className="flex flex-col gap-3 items-center">
					<label className="text-2xl text-gray-600 mx-8 pb-3">
						Enter your name:
					</label>
					<input
						type="text"
						onChange={(e) => setName(e.target.value)}
						className="outline outline-gray-500 outline-4 py-3 px-16 sm:px-32 rounded-2xl"
						required
					/>
					<button
						type="submit"
						onClick={handleSubmit}
						className="bg-gray-200 rounded-full hover-scale shadow-md py-5 px-5 sm:px-10"
					>
						Submit to leaderboard
					</button>
				</form>
			</div>
		);
	}
