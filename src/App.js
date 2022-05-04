import React from "react";
import unsplash from "./apis/unsplash";
import SearchBar from "./components/SearchBarComponent";
import ImageList from "./components/ImageList";

class Pics extends React.Component {
	state = { images: [] };

	onSearchSubmit = async (term) => {
		const response = await unsplash.get(
			"/search/photos",
			{
				params: { query: term },
			}
		);
		console.log(response.data.results);
		this.setState({
			images: response.data.results,
		});
	};

	render() {
		return (
			<div className='mt-5'>
				<SearchBar
					onSubmit={this.onSearchSubmit}
				/>
				<h1 className='text-blue-500 text-xs text-center mb-20 mt-10'>
					found: {this.state.images.length} images
				</h1>

				<ImageList imageList = {this.state.images}/>
			</div>
		);
	}
}

export default Pics;
