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

	state = ({lat: null, errorMessage:''}) 

// Using componentDidMount to update class state
	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			(position) => this.setState({lat: position.coords.latitude,}),
			(err) => this.setState({errorMessage: err.message})
		);
	}


	render() {
		let lat = this.state.lat;
		let errMessage = this.state.errorMessage;

		return (
			<div className="border-8 border-red-500">
				<SeasonComponent lat={lat} err={errMessage} />
			</div>
		);
	}
}

export default Season;
