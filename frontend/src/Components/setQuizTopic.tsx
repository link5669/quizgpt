import { useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

export const EnterTopic = () => {
	const [topicData, setTopicData] = useState("");

	const handleTextEntry = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTopicData(event.target.value);
	};

	return (
		<div className="bg-gray-200 rounded-full border-black focus:border-4 border-solid">
			<div className="flex flex-row">
				<input
					className="bg-transparent outline-none m-4"
					type="text"
					value={topicData}
					onChange={handleTextEntry}
				></input>
				<button className="text-[50px] mx-2 text-gray-800">
					<BsFillArrowRightCircleFill />
				</button>
			</div>
		</div>
	);
};
