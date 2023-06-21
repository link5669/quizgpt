import { Link } from "react-router-dom";
import EnterTopic from "../Components/setQuizTopic";
import EnterDifficulty from "../Components/setDifficulty";
import EnterNumQuestions from "../Components/setNumQuestions";

export default function StartPage() {
  return (
    <div className="flex flex-col text-center h-full justify-evenly">
      <div className="flex flex-col">
        <h1 className="text-6xl font-bold tracking-widest">quizify</h1>
        <h2 className="font-semibold">a project by PS interns 2023</h2>
      </div>
      <div className="flex flex-col items-center gap-6 text-gray-400">
		<EnterNumQuestions />
		<EnterDifficulty />
        {/* <div className="flex flex-row">
          <p>Select # of questions</p>
          <EnterNumQuestions />
        </div> */}
		{/* <div className="flex flex-row">
          <p>Select difficulty</p>
          <EnterDifficulty />
        </div> */}
        <EnterTopic />
        <Link to={"/about"}>
          <button>
            <div className="rounded-full bg-gray-200 hover-scale py-1">
              <p className="mx-6">about me</p>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
}
