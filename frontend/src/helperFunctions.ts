import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { incrementScore, resetScore, resetIndex } from "./redux";
import { NavigateFunction } from "react-router-dom";
import { FormEvent } from "react";
import { AxiosError } from "axios";
import {
	ANSWER_TIMEOUT,
	CORRECT_COLOR,
	INCORRECT_COLOR,
	TRUE_COLOR,
} from "./config";

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

export const incorrectResponse = (element: Element, trueAnswer: Element) => {
	element.classList.add(INCORRECT_COLOR);
	trueAnswer.classList.add(TRUE_COLOR);
	setTimeout(() => {
		element.classList.remove(INCORRECT_COLOR);
		trueAnswer.classList.remove(TRUE_COLOR);
	}, ANSWER_TIMEOUT);
};

export const handlePlayAgain = (
	dispatch: Dispatch<AnyAction>,
	navigate: NavigateFunction
) => {
	dispatch(resetScore());
	dispatch(resetIndex());
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
		switch (err.response.status) {
			case 400:
				status = "Bad Request";
				break;
			case 401:
				status = "Unauthorized (No Auth Provided)";
				break;
			case 403:
				status = "Forbidden";
				break;
			case 404:
				status = "Not Found";
				break;
			case 500:
				status = "Internal Server Error";
				break;
			default:
				status = "Unhandled Error";
		}
		status = "(" + err.response.status + ") " + status;
	} else if (err.request) {
		// The client never received a response, and the request was never left
		status = "Error accessing backend API";
	} else {
		status = "Unknown Error";
	}
	return status;
};
