import { PropsWithChildren } from "react";

interface Props {
	hoverScale?: boolean;
	action?: (doSomething: any) => void;
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
	return (
		<button onSubmit={action} className={getClass()}>
			{children}
		</button>
	);
};
