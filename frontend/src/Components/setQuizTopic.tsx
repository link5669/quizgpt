import { useEffect, useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { IconButton } from "./iconButton";
import { useNavigate } from "react-router-dom";

const EnterTopic = () => {
	const [topicData, setTopicData] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate();

	useEffect(() => {
		if (topicData.length > 0) {
			setError("");
		}
	}, [topicData.length]);

	const handleTextEntry = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTopicData(event.target.value);
	};

	const handleSubmit = () => {
		if (topicData.length > 0) {
			navigate("/quiz", { state: topicData });
		} else {
			setError("Please enter a topic!");
		}
	};

	return (
		<div>
			{error.length > 0 && <p className="text-red-600">{error}</p>}
			<div className="bg-gray-200 rounded-full focus-within:border-black border-0 border-solid shadow-md flex flex-row">
				<input
					className="bg-transparent outline-none mx-4 text-xl"
					type="text"
					value={topicData}
					onChange={handleTextEntry}
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
export default EnterTopic;
