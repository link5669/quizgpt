import { Link } from "react-router-dom";
import SetQuizData from "../Components/setQuizData";

export default function StartPage() {
  return (
    <div className="flex flex-col text-center h-full justify-evenly">
      <div className = "fixed top-5 right-5">
        <Link to={"/about"}>
          <button className="">
            <div className="rounded-full bg-gray-200 text-gray-400 hover-scale py-1">
              <p className="mx-3">about quizify</p>
            </div>
          </button>
        </Link>
      </div>
      <div className="flex flex-col">
        <h1 className="text-7xl font-bold tracking-widest">quizify</h1>
        <h2 className="font-semibold">a project by PS interns 2023</h2>
      </div>

      <div>
        <SetQuizData />
      </div>
    </div>
  );
}
