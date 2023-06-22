import { BsFillLightbulbFill } from "react-icons/bs";
import ReturnToStart from "../Components/returnToStart";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState, setQuestionData } from "../redux";
import { QuestionData } from "./../../types/shared.d";
import { useNavigate } from "react-router-dom";
import { getErrorMessage } from "../helperFunctions";

export default function Loading() {
	const questionState = useSelector((state: RootState) => state.question);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		const fetchQuestions = async () => {
			await axios
				.get<QuestionData[]>("/api/questions", {
					params: {
						topic: questionState.topic,
						numQuestions: questionState.numQuestions,
						difficulty: questionState.difficulty,
					},
					headers: {
						Authorization: `Bearer ${import.meta.env.VITE_API_KEY || process.env.VITE_API_KEY || import.meta.env.REACT_APP_API_KEY || process.env.REACT_APP_API_KEY || }`,
					},
				})
				.then((response) => {
					dispatch(setQuestionData(response.data));
					navigate("/quiz");
				})
				.catch((err) => {
					const errorMessage = getErrorMessage(err);
					navigate("/", {
						state: errorMessage,
					});
				});
		};
		fetchQuestions();
	}, [
		dispatch,
		navigate,
		questionState.difficulty,
		questionState.numQuestions,
		questionState.topic,
	]);

	return (
		<>
			<ReturnToStart />
			<BsFillLightbulbFill className="absolute-center text-[120px] animate-pulse" />
			<h1 className="absolute left-[50%] -translate-x-[50%] bottom-10 text-3xl tracking-wide w-full text-center p-4">
				Generating "{questionState.topic}" questions...
			</h1>
		</>
	);
}
