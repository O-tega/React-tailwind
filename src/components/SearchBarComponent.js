import React from "react";

class SearchBar extends React.Component {
	// To control the input we will use state
	state = { term:'' };

	onFormSubmit=(e)=>{
		e.preventDefault()
		console.log(this.state.term)
	}

	render() {
		return (
			<div>
				<div className='flex justify-center'>
                <div>
                </div>
					<form className='w-1/2' onSubmit={this.onFormSubmit}>
						<input
                            value={this.setState.term}
							onChange={(e)=>this.setState({term:e.target.value})}
							type='text'
							placeholder='search'
							className='appearance-none bg-gray-200 border-gray-200 py-2 px-4 text-gray-700 leading-tight focus:bg-white rounded-lg w-full'
						/>
						{this.state.term.length < 4 ? <h3 className = "text-xs text-red-500">characters must be a least 4 letters</h3>: ''}
					</form>
                    </div>
                    <h1 className="text-xl text-center text-blue-500">Output is: {this.state.term}</h1>
			</div>
		);
	}
    // new comment
}

export default SearchBar;
