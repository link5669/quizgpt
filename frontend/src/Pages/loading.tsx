import { BsFillLightbulbFill } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import ReturnToStart from "../Components/returnToStart";
import { useEffect } from "react";
import axios from "axios";

export default function Loading() {
	const location = useLocation();
	console.log(location.state);

	useEffect(() => {
		const fetchQuestions = async () => {
			const questionData = await axios.get(
				`http://localhost:5000/api/questions?topic=${location.state}&numQuestions=5&difficulty=medium`
			);
			console.log(questionData);
		};
		fetchQuestions().catch(console.error);
	}, []);

	return (
		<>
			<ReturnToStart />
			<BsFillLightbulbFill className="absolute-center text-[120px] animate-pulse" />
			<h1 className="absolute left-[50%] -translate-x-[50%] bottom-10 text-3xl tracking-wide w-full text-center p-4">
				Generating "{location.state}" questions...
			</h1>
		</>
	);
}
