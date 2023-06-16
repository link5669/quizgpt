import { BsFillLightbulbFill } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import ReturnToStart from "../Components/returnToStart";

export default function Loading() {
	const location = useLocation();
	console.log(location.state);

	return (
		<>
			<ReturnToStart />
			<BsFillLightbulbFill className="absolute-center text-[120px] animate-pulse" />
			<h1 className="absolute left-[50%] -translate-x-[50%] bottom-10 text-3xl tracking-wide w-full text-center p-4">
				Generating "{location.state}" questions...
			</h1>
		</>
	);
}
