import { BsFillLightbulbFill } from "react-icons/bs";
import ReturnToStart from "../Components/returnToStart";
import { useEffect } from "react";
import axios, { AxiosError } from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState, setQuestionData } from "../redux";
import { QuestionData } from "./../../types/shared.d";
import { useNavigate } from "react-router-dom";
import { getErrorMessage } from "../helperFunctions";

export default function Loading() {
	const topic = useSelector((state: RootState) => state.question.topic);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		const fetchQuestions = async () => {
			try {
				await axios
					.get<QuestionData[]>("/api/questions", {
						params: {
							topic: topic,
							numQuestions: 3,
							difficulty: "medium",
						},
					})
					.then((response) => {
						dispatch(setQuestionData(response.data));
						navigate("/quiz");
					});
			} catch (err) {
				const errorMessage = getErrorMessage(err as AxiosError);
				navigate("/", {
					state: errorMessage,
				});
			}
		};
		fetchQuestions();
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
