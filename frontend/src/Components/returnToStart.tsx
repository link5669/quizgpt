import { Link } from "react-router-dom";
import { IconButton } from "./iconButton";
import { ImCross } from "react-icons/im";

export default function ReturnToStart() {
	return (
		<Link to="/" className="absolute top-4 left-4 text-xl hover-scale">
			<IconButton>
				<ImCross />
			</IconButton>
		</Link>
	);
}
