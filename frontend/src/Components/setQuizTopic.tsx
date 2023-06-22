import { useEffect, useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { IconButton } from "./iconButton";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { newTopic, resetScore } from "../redux";

const SetQuizTopic = () => {
	const [topicData, setTopicData] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		if (topicData.length > 0) {
			setError("");
		}
	}, [topicData.length]);

	const handleSubmit = () => {
		if (topicData.length > 0) {
			dispatch(newTopic(topicData));
			dispatch(resetScore());
			navigate("/loading");
		} else {
			setError("Please enter a topic!");
		}
	};

	return (
		<div>
			<p className={"text-red-600"}>{error}</p>
			<div className="bg-gray-200 rounded-full custom-outline shadow-md flex flex-row">
				<input
					className="bg-transparent placeholder-gray-400 focus-within:placeholder-gray-700 outline-none mx-4 text-xl"
					type="text"
					value={topicData}
					onChange={(e) => setTopicData(e.target.value)}
					onKeyDown={(e) => {
						if (e.key !== "Enter") return;
						handleSubmit();
					}}
					placeholder="enter a topic"
				></input>
			</div>
			<IconButton
					className="text-xl text-gray-700 py-3"
					hoverScale={false}
					action={handleSubmit}
				>
					<button>
						<div className="rounded-full bg-gray-500 hover-scale py-1 px-4">
							<p>start quiz</p>
						</div>
					</button>
				</IconButton>
		</div>
	);
};
export default SetQuizTopic;
