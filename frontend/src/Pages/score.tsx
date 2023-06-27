import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux";
import { handlePlayAgain, getScores } from "../helperFunctions";
import axios from "axios";
import { useEffect, useState } from "react";
import { Score } from "../../types/shared";
import { FormEvent } from "react";
import swal from 'sweetalert';
import Leaderboard from "../Components/leaderboard";
import { twMerge } from "tailwind-merge";

export default function ScorePage() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const topic = useSelector(
		(state: RootState) => state.question.quizData.topic
	);
	const quizData = useSelector((state: RootState) => state.question.data);
	const quizIndex = useSelector(
		(state: RootState) => state.question.currentQuestionIndex
	);
	const score = useSelector((state: RootState) => state.user.score);
	const [username, setUsername] = useState("");
	const [scores, setScores] = useState<Score[]>([]);
	const [emptyTopicError, setEmptyTopicError] = useState(false);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		if (username == "") {
			swal({
				title: "Please enter a valid username",
				text: "Username cannot be null",
				icon: "warning",
			  })
		}
		else{
		const postScore = async () => {
			await axios
				.post(
					`/api/scores?
						username=${username}
						&topic=${topic}
						&score=${score}`
				)
				.then((response) => {
					console.log(response)
					const newScore: Score = {username: username, topic: topic, score: score}
					setScores([...scores, newScore])
				});
		};
		postScore();
		swal({
			title: "Success!",
			text: "Your score has been submitted to the leaderboard!",
			icon: "success",
		  });
		}
	};

	// Prevent users from going to the score screen before the quiz is complete
	useEffect(() => {
		if (quizIndex < quizData.length) {
			navigate("/quiz");
		}
	}, [navigate, quizData, quizIndex]);

	useEffect(() => {
		getScores().then((response) => {
			setScores(response);
		});
	}, [scores]);

	useEffect(() => {
		if (topic.length === 0) {
			navigate("/", { state: "Please Enter a Topic" });
		}
	});

	useEffect(() => {
		if (username.trim().length > 0) {
			setEmptyTopicError(false);
		}
	}, [username]);

	return (
		<div className="flex flex-col gap-3 justify-between h-full font-default items-center text-center py-5">
			{/* quiz topic block */}
			<div className="flex flex-row md:gap-24 sm:gap-16 gap-3">
				<div className="flex flex-col">
					<h1 className="text-2xl text-gray-600 md:mx-8 pb-3">
						Quiz Topic:
					</h1>
					<div className="outline outline-gray-500 outline-4 py-3 sm:px-16 px-8 rounded-2xl">
						<h2 className="text-center text-3xl">{topic}</h2>
					</div>
				</div>
				{/* final score block */}
				<div className="flex flex-col">
					<h1 className="text-2xl text-gray-600 pb-3">
						Final Score:
					</h1>
					<div className="outline outline-gray-500 outline-4 py-3 sm:px-16 rounded-2xl">
						<h2 className="text-center text-3xl">
							{score + "/" + quizData.length}
						</h2>
					</div>
				</div>
			</div>
			<div className="flex flex-col md:gap-6 gap-2">
				<Leaderboard scores={scores} limit={10} />
				<form className="flex md:flex-row flex-col md:gap-10 gap-2 items-center mx-4">
					<p className="text-xl">Join the leaderboard:</p>
					<div className="translate-y-3">
						<input
							type="text"
							onChange={(e) => setUsername(e.target.value)}
							className=" custom-outline shadow-md text-xl py-2 px-5 mx-4 rounded-full focus-within:placeholder-gray-700"
							placeholder="enter your name"
							required
						/>
						<p
							className={twMerge(
								"opacity-0 text-red-600",
								emptyTopicError && "opacity-100"
							)}
						>
							Please enter a topic!
						</p>
					</div>

					<button
						type="submit"
						onClick={handleSubmit}
						className="bg-gray-200 text-xl rounded-full hover-scale shadow-md py-3 px-6"
					>
						Submit
					</button>
				</form>
			</div>
			<div className="flex flex-row py-5 px-2 gap-3 justify-evenly w-full">
				<button
					onClick={() => handlePlayAgain(dispatch, navigate)}
					className="bg-gray-200 rounded-full hover-scale shadow-md py-3 px-5 sm:px-10"
				>
					<p className="text-lg">Regenerate Questions</p>
				</button>
				<Link to="/">
					<button className="bg-gray-200 rounded-full hover-scale shadow-md py-3 px-5 sm:px-10">
						<p className="text-lg">Select New Topic</p>
					</button>
				</Link>
			</div>
		</div>
	);
}
