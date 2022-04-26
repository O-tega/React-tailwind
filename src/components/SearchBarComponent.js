import React from "react";

class SearchBar extends React.Component {
	// To control the input we will use state
	state = { term: "" };

	render() {
		return (
			<div>
				<div className='flex justify-center'>
                <div>
                </div>
					<form className='w-1/2'>
						<input
                            value={this.setState.term}
							onChange={(e)=>this.setState({term:e.target.value})}
							type='text'
							placeholder='search'
							className='appearance-none bg-gray-200 border-gray-200 py-2 px-4 text-gray-700 leading-tight focus:bg-white rounded-lg w-full'
						/>
					</form>
                    </div>
                    <h1 className="text-xl text-center text-blue-500">Output is: {this.state.term}</h1>
			</div>
		);
	}
}

export default SearchBar;
