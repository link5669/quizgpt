import { BsFillLightbulbFill } from "react-icons/bs";
import ReturnToStart from "../Components/returnToStart";
import { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../redux";

export default function Loading() {
	const topic = useSelector((state: RootState) => state.question.topic);

	useEffect(() => {
		const fetchQuestions = async () => {
			const questionData = await axios.get("/api/questions", {
				params: {
					topic: topic,
					numQuestions: 10,
					difficulty: "medium",
				},
			});
			console.log(questionData);
		};
		fetchQuestions().catch(console.error);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<ReturnToStart />
			<BsFillLightbulbFill className="absolute-center text-[120px] animate-pulse" />
			<h1 className="absolute left-[50%] -translate-x-[50%] bottom-10 text-3xl tracking-wide w-full text-center p-4">
				Generating "{topic}" questions...
			</h1>
		</>
	);
}
