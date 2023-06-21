import ReturnToStart from "../Components/returnToStart";

export default function AboutPage() {
	return (
		<div className="flex flex-col gap-5 font-default items-center text-center">
			<ReturnToStart />
			<h1 className="pt-10 mx-4 text-6xl">About Quizify</h1>
			<div className="bg-gray-200 w-4/5 md:w-1/2 py-3 rounded-2xl">
				<p className="px-3 md:px-10 py-5 text-xl">
					Quizify is a project developed by Publicis Sapient interns during
					summer 2023. Quizify uses the PSChat API to dynamically generate
					questions based on the user's chosen topic.
				</p>
			</div>
		</div>
	);
}
