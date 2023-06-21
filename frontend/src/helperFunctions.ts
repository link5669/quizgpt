import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { incrementScore, resetScore } from "./redux";
import { NavigateFunction } from "react-router-dom";
import { FormEvent } from "react";

export const correctResponse = (
	element: Element,
	dispatch: Dispatch<AnyAction>,
	answerTimeout: number
) => {
	element.classList.add("bg-green-500");
	dispatch(incrementScore());
	setTimeout(() => {
		element.classList.remove("bg-green-500");
	}, answerTimeout);
};

export const incorrectResponse = (element: Element, answerTimeout: number) => {
	element.classList.add("bg-red-500");
	setTimeout(() => {
		element.classList.remove("bg-red-500");
	}, answerTimeout);
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
