import { BsFillLightbulbFill } from "react-icons/bs";
import ReturnToStart from "../Components/returnToStart";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState, setQuestionData } from "../redux";
import { QuestionData } from "./../../types/shared.d";
import { useNavigate } from "react-router-dom";

export default function Loading() {
	const topic = useSelector((state: RootState) => state.question.topic);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		const fetchQuestions = async () => {
			await axios
				.get<QuestionData[]>("/api/questions", {
					params: {
						topic: topic,
						numQuestions: 10,
						difficulty: "medium",
					},
				})
				.then((response) => {
					console.log(response.data);
					dispatch(setQuestionData(response.data));
					navigate("/quiz");
				});
		};
		fetchQuestions().catch(console.error);
	}, [dispatch, navigate, topic]);

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
