import { useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { IconButton } from "./iconButton";

const EnterTopic = () => {
	const [topicData, setTopicData] = useState("");

	const handleTextEntry = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTopicData(event.target.value);
	};

	return (
		<div className="bg-gray-200 rounded-full focus-within:border-black border-2 border-solid shadow-md">
			<div className="flex flex-row">
				<input
					className="bg-transparent outline-none mx-4 text-xl"
					type="text"
					value={topicData}
					onChange={handleTextEntry}
					placeholder="enter a topic"
				></input>
				<IconButton
					className="text-[48px]"
					hoverScale={false}
					action={(e) => {
						console.log(e);
					}}
				>
					<BsFillArrowRightCircleFill />
				</IconButton>
			</div>
		</div>
	);
};
export default EnterTopic;
