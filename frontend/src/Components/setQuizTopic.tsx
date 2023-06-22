import { useEffect, useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { IconButton } from "./iconButton";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { newTopic, resetScore } from "../redux";
import { twMerge } from "tailwind-merge";

const SetQuizTopic = () => {
	const [topicData, setTopicData] = useState("");
	const [emptyTopicError, setEmptyTopicError] = useState(false);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		if (topicData.length > 0) {
			setEmptyTopicError(false);
		}
	}, [topicData.length]);

	const handleSubmit = () => {
		if (topicData.length > 0) {
			dispatch(newTopic(topicData));
			dispatch(resetScore());
			navigate("/loading");
		} else {
			setEmptyTopicError(true);
		}
	};

	return (
		<div>
			<p
				className={twMerge(
					"opacity-0 text-red-600",
					emptyTopicError && "opacity-100"
				)}
			>
				Please enter a topic!
			</p>
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

				<IconButton
					className="text-[50px] text-gray-700"
					hoverScale={false}
					action={handleSubmit}
				>
					<BsFillArrowRightCircleFill />
				</IconButton>
			</div>
		</div>
	);
};
export default SetQuizTopic;
