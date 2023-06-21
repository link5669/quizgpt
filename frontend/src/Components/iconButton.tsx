import { FormEvent, PropsWithChildren } from "react";
import {
	getIconButtonClass,
	iconButtonSubmitHandler,
} from "../helperFunctions";

interface Props {
	hoverScale?: boolean;
	action?: (e: FormEvent<HTMLFormElement>) => void;
	className?: string;
}

export const IconButton = ({
	children,
	hoverScale = true,
	action,
	className,
}: PropsWithChildren<Props>) => {
	return (
		<form
			onSubmit={(e) => iconButtonSubmitHandler(e, action)}
			className="items-center flex"
		>
			<button
				type="submit"
				className={getIconButtonClass(hoverScale, className)}
			>
				{children}
			</button>
		</form>
	);
};
