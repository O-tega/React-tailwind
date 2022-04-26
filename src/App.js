import React from "react";
import SearchBar from "./components/SearchBarComponent";

class Pics extends React.Component {
	render() {
		return (
			<div>
				<h1 className='text2xl'>
					This app displays pictures
				</h1>
				<SearchBar/>
			</div>
		);
	}
}

export default Pics;
