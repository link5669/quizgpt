import { useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { IconButton } from "./iconButton";

export const EnterTopic = () => {
	const [topicData, setTopicData] = useState("");

	const handleTextEntry = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTopicData(event.target.value);
	};

	return (
		<div className="bg-gray-200 rounded-full border-black focus:border-4 border-solid">
			<div className="flex flex-row">
				<input
					className="bg-transparent outline-none m-4 text-xl"
					type="text"
					value={topicData}
					onChange={handleTextEntry}
					placeholder="enter a topic"
				></input>
				<IconButton className="text-[50px] mx-2" hoverScale={false}>
					<BsFillArrowRightCircleFill />
				</IconButton>
			</div>
		</div>
	);
};
