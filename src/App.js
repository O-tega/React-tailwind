import { react } from "react";
import CommentDetails from "./components/CommentDetail";
// import {react-router-dom} from 'react-dom'

const comments = [
	{
		author: "james",
		time: "6:00pm",
		info: "Nice blog post!",
	},
	{
		author: "Mary",
		time: "1:00am",
		info: "Beautifully written!",
	},
	{
		author: "Andrew",
		time: "5:00am",
		info: "What is this!!",
	},
];

const New = () => {
	return comments.map(
		({ author, time, info }, index) => {
			return (
				<div key={index}>
					<CommentDetails
						author={author}
						time={time}
						info={info}
					/>
				</div>
			);
		}
	);
};

export default New;
