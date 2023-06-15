import { FormEvent, PropsWithChildren } from "react";

interface Props {
	hoverScale?: boolean;
	action?: (e: FormEvent<HTMLFormElement>) => void;
	className?: string;
}

export const IconButton = ({
	children,
	hoverScale,
	action,
	className,
}: PropsWithChildren<Props>) => {
	const getClass = () => {
		let cls = "";
		if (hoverScale) {
			cls += "hover-scale";
		}
		return className ? cls.concat(" ", className) : cls;
	};

	const submitHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		action ? action(e) : null;
	};

	return (
		<form onSubmit={submitHandler} className="items-center flex">
			<button type="submit" className={getClass()}>
				{children}
			</button>
		</form>
	);
};
