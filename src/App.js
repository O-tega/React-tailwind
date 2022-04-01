import React from "react";
import SeasonComponent from "./components/SeasonComponent";

// const Season = () => {

// 	window.navigator.geolocation.getCurrentPosition(
// 		(position)=>{
// 			console.log(position)
// 		},
// 		(err)=>{
// 			console.log('Error: ', err)
// 		}
// 	)
// 	return <div><SeasonComponent/></div>;
// };

// Creating a class component
class Season extends React.Component {
	constructor() {
		super();

		this.state = { lat: null, errorMessage: '' };

		console.log(this.state);

		window.navigator.geolocation.getCurrentPosition(
			(position) =>
				// this is where we set our state to update the current state
				this.setState({
					lat: position.coords.latitude,
				}),
			(err) =>
			// diaplay error message on the broswer
				this.setState({errorMessage: err.message})
		);
	}

	render() {
		let lat = this.state.lat;
		let errMessage = this.state.errorMessage;

		return (
			<div>
				<SeasonComponent lat={lat} err={errMessage} />
			</div>
		);
	}
}

export default Season;
