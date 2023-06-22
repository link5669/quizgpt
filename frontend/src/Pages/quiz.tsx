import { useNavigate } from "react-router-dom";
import ReturnToStart from "../Components/returnToStart";
import { RootState, incrementIndex } from "../redux/index.ts";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { correctResponse, incorrectResponse } from "../helperFunctions.ts";
import { ANSWER_TIMEOUT } from "../config.ts";

export default function QuizPage() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const questionIndex = useSelector(
		(state: RootState) => state.question.currentQuestionIndex
	);
	const questionData = useSelector((state: RootState) => state.question.data);
	const score = useSelector((state: RootState) => state.user.score);
	const [disableButtons, setDisableButtons] = useState(false);
	const trueAnswerRef = useRef(null);

	// Prevent users from going back to quiz after it is complete
	useEffect(() => {
		if (questionIndex >= questionData.length) {
			navigate("/score");
		}
	}, [navigate, questionData.length, questionIndex]);

	const handleButton = (target: Element) => {
		setDisableButtons(true);
		if (trueAnswerRef.current === target) {
			correctResponse(target, dispatch);
		} else if (trueAnswerRef.current !== null) {
			incorrectResponse(target, trueAnswerRef.current as Element);
		}
		setTimeout(() => {
			if (questionIndex === questionData.length - 1) {
				navigate("/score");
			}
			dispatch(incrementIndex());
			setDisableButtons(false);
		}, ANSWER_TIMEOUT);
	};

	return (
		<div className="flex flex-col gap-3 h-full font-default text-center py-12">
			{questionData[questionIndex] && (
				<>
					<ReturnToStart />
					<h1 className="text-2xl sm:text-3xl md:text-4xl mx-8">
						{"Question #" +
							(questionIndex + 1) +
							": " +
							questionData[questionIndex].question}
					</h1>
					<h2 className="absolute top-4 right-4 text-xl">
						Score: {score}
					</h2>
					<div className="flex flex-col justify-evenly items-center h-full gap-2">
						{questionData[questionIndex] &&
							questionData[questionIndex].answers.map(
								(ans, i) => {
									return (
										<button
											className="bg-gray-200 rounded-full w-3/4 py-4 hover-scale shadow-md"
											key={i}
											onClick={(e) => {
												e.preventDefault();
												handleButton(
													e.currentTarget as Element
												);
											}}
											disabled={disableButtons}
											ref={
												questionData[questionIndex]
													.correctAnswer === i
													? trueAnswerRef
													: null
											}
										>
											<p className="text-2xl mx-3">
												{ans}
											</p>
										</button>
									);
								}
							)}
					</div>
				</>
			)}
		</div>
	);
}
