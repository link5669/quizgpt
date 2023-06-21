import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { incrementScore, resetScore } from "./redux";
import { NavigateFunction } from "react-router-dom";
import { FormEvent } from "react";
import { AxiosError } from "axios";
import { ANSWER_TIMEOUT, CORRECT_COLOR, INCORRECT_COLOR } from "./config";

export const correctResponse = (
	element: Element,
	dispatch: Dispatch<AnyAction>
) => {
	element.classList.add(CORRECT_COLOR);
	dispatch(incrementScore());
	setTimeout(() => {
		element.classList.remove(CORRECT_COLOR);
	}, ANSWER_TIMEOUT);
};

export const incorrectResponse = (element: Element) => {
	element.classList.add(INCORRECT_COLOR);
	setTimeout(() => {
		element.classList.remove(INCORRECT_COLOR);
	}, ANSWER_TIMEOUT);
};

export const handlePlayAgain = (
	dispatch: Dispatch<AnyAction>,
	navigate: NavigateFunction
) => {
	dispatch(resetScore());
	navigate("/loading");
};

export const getIconButtonClass = (hoverScale: boolean, className?: string) => {
	let cls = "";
	if (hoverScale) {
		cls += "hover-scale";
	}
	return className ? cls.concat(" ", className) : cls;
};

export const iconButtonSubmitHandler = (
	e: FormEvent<HTMLFormElement>,
	action?: (e: FormEvent<HTMLFormElement>) => void
) => {
	e.preventDefault();
	action ? action(e) : null;
};

export const getErrorMessage = (err: AxiosError) => {
	let status = "";
	if (err.response) {
		// The client was given an error response (5xx, 4xx)
		console.log(err.response.data);
		console.log(err.response.status);
		console.log(err.response.headers);
	} else if (err.request) {
		// The client never received a response, and the request was never left
		status = "Error accessing backend API";
	} else {
		// Anything else
	}
	return status;
};
