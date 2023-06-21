import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
	message?: string;
}

export default function ErrorModal({ message }: Props) {
	const [show, setShow] = useState(false);

	useEffect(() => {
		if (message === null || message === undefined || message.length === 0) {
			setShow(false);
		} else {
			setShow(true);
			setTimeout(() => {
				setShow(false);
			}, 5000);
		}
	}, [message, message?.length]);

	return (
		<>
			<div
				className={twMerge(
					"absolute top-4 left-[50%] -translate-x-[50%] rounded-full bg-red-200 border-red-500 border-2 px-4 py-2 border-solid opacity-0 transition-opacity duration-300",
					show && "opacity-100"
				)}
			>
				<p className="">{message}</p>
			</div>
		</>
	);
}
