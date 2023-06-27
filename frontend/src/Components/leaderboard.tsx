import { Score } from "../../types/shared";

interface Props {
	scores: Score[];
	limit: number;
}

export default function Leaderboard({ scores, limit }: Props) {
	return (
		<div className="flex flex-col mx-4 outline outline-gray-500 outline-4 -outline-offset-1 rounded-2xl">
			<h1 className="text-3xl py-3 text-white bg-gray-500 rounded-t-2xl">
				Leaderboard:
			</h1>
			<div className="text-center text-4xl h-60 overflow-y-scroll">
				<table className="w-full table-auto text-2xl border-separate border-spacing-x-1 lg:border-spacing-x-16 border-spacing-y-3">
					<thead>
						<tr>
							<th>Rank</th>
							<th>Score</th>
							<th>Topic</th>
							<th>Username</th>
						</tr>
					</thead>
					<tbody>
						{scores === null || scores === undefined ? (
							<tr>
								<td>...</td>
								<td>...</td>
								<td>...</td>
								<td>...</td>
							</tr>
						) : (
							scores.slice(0, limit).map((item, index) => {
								return (
									<tr key={index} className="[&>*]:w-fit">
										<td>{index + 1}</td>
										<td>{item.score}</td>
										<td>{item.topic}</td>
										<td>{item.username}</td>
									</tr>
								);
							})
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
}
