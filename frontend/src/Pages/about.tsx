import ReturnToStart from "../Components/returnToStart";

export default function AboutPage() {
	return (
		<div className="flex flex-col font-default items-center text-center">
			<ReturnToStart />
			<p className="pt-10 pb-5 text-6xl">About Quizify</p>
			<div className="bg-gray-200 w-1/2 py-3 px-3 rounded-2xl">
				<p className="px-10 py-5 text-xl">
					Quizify is a project developed my Publicis Sapient interns during summer 2023. Quizify uses blah blah blah API to dynamically generate questions based on the user's chosen topic.
				</p>
			</div>
		</div>
	)
}
