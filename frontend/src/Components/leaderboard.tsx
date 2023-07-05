import { Score } from "../../types/shared";
import 'react-tabs/style/react-tabs.css';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';
import Toggle from 'react-toggle';
import "react-toggle/style.css";
import { useState } from "react";


interface Props {
	scores: Score[];
	limit: number;
	difficulty: string;
}

export default function Leaderboard({ scores, limit, difficulty}: Props) {
	const [toggle, setToggle] = useState(false);
	const difficulties = ["easy", "medium", "hard", "extremely hard"];
	const handleToggle = () => {
		setToggle(!toggle);
	}
	return(
		<div className="flex flex-col mx-4 outline outline-gray-500 outline-4 -outline-offset-1 rounded-2xl">
			<h1 className="text-3xl py-3 text-white bg-gray-500 rounded-t-2xl">
				Leaderboard:
			</h1>	
			<Tabs defaultIndex={difficulties.indexOf(difficulty)}>
				<TabList>
				<Tab>Easy</Tab>
				<Tab>Medium</Tab>
				<Tab>Hard</Tab>
				<Tab>Extremely Hard</Tab>
				</TabList>
				<div className="text-center text-4xl h-60 overflow-y-scroll">
				{difficulties.map(function(difficulty, i){
					const filteredScores = scores.slice(0, limit).filter(obj => obj.difficulty == difficulty);
					return(<TabPanel key={i}>
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
								{filteredScores.length === 0 || filteredScores === undefined ? (
									<tr>
										<td>...</td>
										<td>...</td>
										<td>...</td>
										<td>...</td>
									</tr>
									) : (
									filteredScores.map((item, index) => {return(
										<tr key={index} className="[&>*]:w-fit">
										<td>{index + 1}</td>
										{toggle ?  (<td>{Math.round((item.score / item.total) * 100)}%</td>) : (<td>{item.score} / {item.total}</td>)}		
										<td>{item.topic}</td>
										<td>{item.username}</td>
										</tr>
								)}))}
							</tbody>
							</table>
							</TabPanel>);
				})}
				</div>
			</Tabs>
			<div className="text-left py-3 px-4">
			<label>
			<p>Score format:</p>
			<span> Ratio </span>
			<Toggle defaultChecked={toggle} icons={false} onChange={handleToggle}/>
		 	<span> Percentage </span>
			</label>
			</div>
		</div>	
	)}

		

