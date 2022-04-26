import React from "react";

class Clock extends React.Component {


	state = {time: new Date().toLocaleTimeString()}

	componentDidMount(){
		setInterval(()=>{
			this.setState({time: new Date().toLocaleTimeString()})
		}, 1000)
	}
	render() {
		return (
			<div>
				<h1 className='text-2xl time'>
					The time is: {this.state.time}
				</h1>
			</div>
		);
	}
}

export default Clock;
