import { useNavigate } from "react-router-dom";
import { IconButton } from "./iconButton";
import { ImCross } from "react-icons/im";
import { PropsWithChildren } from "react";

interface Props {
	sideEffect: () => void;
}

export default function ReturnToStart({
	sideEffect,
}: PropsWithChildren<Props>) {
	const navigate = useNavigate();

	const action = () => {
		sideEffect ? sideEffect() : null;
		navigate("/");
	};

	return (
		<IconButton
			className="absolute top-4 left-4 text-xl hover-scale"
			action={action}
		>
			<ImCross />
		</IconButton>
	);
}
