import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux";
import { handlePlayAgain, getScores } from "../helperFunctions";
import axios from "axios";
import { useEffect, useState } from "react";
import { Score } from "../../types/shared";
import { FormEvent } from "react";

export default function ScorePage() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const topic = useSelector((state: RootState) => state.question.topic);
	const totalQuestions = useSelector(
		(state: RootState) => state.question.data.length
	);
	const score = useSelector((state: RootState) => state.user.score);
	const [username, setUsername] = useState("");
	const [scores, setScores] = useState<Score[]>([]);
	/**
	 * scores has an array of scores fetched from Firebase, fetched on page load
	 * scores is an array with a series of objects in the format
	 * {score: int, topic: string, username: string}
	 */

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		const postScore = async () => {
			await axios
				.post(
					`/api/scores?
						username=${username}
						&topic=${topic}
						&score=${score}`
				)
				.then((response) => console.log(response));
		};
		postScore();
	};

	useEffect(() => {
		getScores().then((response) => {
			setScores(response);
		});
	}, []);

	return (
		<div className="flex flex-col gap-3 h-full font-default items-center text-center py-5">
			{/* quiz topic block */}
			<div className="flex flex-row gap-10 flex-wrap basis-1/2">
				<div className="flex flex-col">
					<h1 className="text-2xl text-gray-600 mx-8 pb-3">
						Quiz Topic:
					</h1>
					<div className="outline outline-gray-500 outline-4 py-3 px-16 sm:px-32 rounded-2xl">
						<h2 className="text-center text-4xl">{topic}</h2>
					</div>
				</div>
				{/* final score block */}
				<div className="flex flex-col">
					<h1 className="text-2xl text-gray-800 mx-8 pb-3">
						Final Score:
					</h1>
					<div className="outline outline-gray-500 outline-4 py-3 px-16 sm:px-32 rounded-2xl">
						<h2 className="text-center text-4xl">
							{score + "/" + totalQuestions}
						</h2>
					</div>
				</div>
			</div>
			<div className="flex flex-col">
				<h1 className="text-2xl text-gray-600 mx-8 pb-5">
					Leaderboard:
				</h1>
				<div className="outline outline-gray-500 outline-4 py-6 px-32 sm:px-32 rounded-2xl">
					<h2 className="text-center text-4xl">
						{scores.length === 0 ? (
							<p>Loading...</p>
						) : (
							<table>
								<thead>
									<tr>
										<th>Score</th>
										<th>Topic</th>
										<th>Username</th>
									</tr>
								</thead>
								<br></br>
								<tbody>
									{scores.map((item, index) => {
										return index < 4 ? (
											<tr key={index}>
												<td>{item.score}</td>
												<td>{item.topic}</td>
												<td>{item.username}</td>
											</tr>
										) : null;
									})}
								</tbody>
							</table>
						)}
					</h2>
				</div>
			</div>
			<form className="flex flex-row gap-3 items-center">
				<label className="text-2xl text-gray-600 mx-8 pb-3">
					Enter your name:
				</label>
				<input
					type="text"
					onChange={(e) => setUsername(e.target.value)}
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
		</div>
	);
}
