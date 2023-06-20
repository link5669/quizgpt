import { Link } from "react-router-dom";

interface props {
    topic: string;
    score: number;
    totalQuestions: number;
}

export default function ScorePage({ topic, score, totalQuestions }: props) {
    topic = "Boston";
    score = 10;
    totalQuestions = 10;
    return (
        <div className="flex flex-col gap-3 h-full font-default items-center text-center py-5">
            <div>
                {/* quiz topic block */}
                <p className="text-2xl text-gray-600 mx-8 pb-3 ">
                    {"Quiz Topic: "}
                </p>
                <div className=" outline outline-gray-500 outline-4 py-3 px-14 rounded-2xl">
                    <p className="text-center text-4xl px-20">{topic}</p>
                </div>
            </div>
            <div>
                {/* final score block */}
                <p className="text-2xl pt-8 pb-3  text-gray-600 mx-8">{"Final Score:"}</p>
                <div className="flex flex-col gap-5 outline outline-gray-500 outline-4 text-center py-16 rounded-3xl">
                    <p className="text-8xl  px-20">{score + "/" + totalQuestions}</p>
                </div>
            </div>
            <div className="flex flex-row gap-60 py-5">
                <button className="bg-gray-200 rounded-full hover-scale shadow-md py-5 px-10">
                    <p className="text-l">{"Play Again"}</p>
                </button>
                <Link to = "/">
                    <button className="bg-gray-200 rounded-full hover-scale shadow-md py-5 px-10">
                        <p className="text-l">{"New Topic"}</p>
                    </button>
                </Link>
            </div>

        </div>
    )
}