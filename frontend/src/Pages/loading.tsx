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
	const quizData = useSelector((state: RootState) => state.question.quizData);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const controller = new AbortController();

	useEffect(() => {
		const fetchQuestions = async () => {
			await axios
				.get<QuestionData[]>("/api/questions", {
					params: {
						topic: quizData.topic,
						numQuestions: quizData.numQuestions,
						difficulty: quizData.difficulty,
					},

					signal: controller.signal,
				})
				.then((response) => {
					dispatch(setQuestionData(response.data));
					navigate("/quiz");
				})
				.catch((err) => {
					const errorMessage = getErrorMessage(err);
					navigate("/", {
						state: controller.signal.aborted ? "" : errorMessage,
					});
				});
		};
		fetchQuestions();
	}, [
		controller.signal,
		dispatch,
		navigate,
		quizData.difficulty,
		quizData.numQuestions,
		quizData.topic,
	]);

	return (
		<>
			<ReturnToStart
				sideEffect={() => {
					controller.abort();
				}}
			/>
			<BsFillLightbulbFill className="absolute-center text-[120px] animate-pulse" />
			<h1 className="absolute left-[50%] -translate-x-[50%] bottom-10 text-3xl tracking-wide w-full text-center p-4">
				Generating "{quizData.topic}" questions...
			</h1>
		</>
	);
}
