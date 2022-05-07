import React from "react";
import { Spring } from "react-spring";
class SearchBar extends React.Component {
	// To control the input we will use state
	state = { term: "" };

	onFormSubmit = (e) => {
		e.preventDefault();

		this.props.onSubmit(
			this.state.term
		);
	};

	render() {
		return (
			<Spring
			from={{opacity: 0, marginTop: -500}}
			to={{opacity: 0, marginTop:0}}
			config={{delay:1000, duration:1000}}>
			{(props)=>(
					<div style={props}>
						<div>
							<div className='flex justify-center'>
								<div></div>
								<form
									className='w-1/2'
									onSubmit={
										this.onFormSubmit
									}
								>
									<input
										value={
											this.setState.term
										}
										onChange={(e) =>
											this.setState({
												term: e.target
													.value,
											})
										}
										type='text'
										placeholder='search'
										className='appearance-none bg-gray-200 py-2 px-4 text-gray-700 leading-tight focus:bg-white border-blue-500 rounded-lg w-full'
									/>
									{this.state.term
										.length < 4 ? (
										<h3 className='text-xs text-red-500'>
											characters must be
											a least 4 letters
										</h3>
									) : (
										""
									)}
								</form>
							</div>
							<h1 className='text-xl text-center text-blue-500'>
								Output is:{" "}
								{this.state.term}
							</h1>
						</div>
					</div>
				)}
			</Spring>
		);
	}
	// new comment
}

export default SearchBar;
