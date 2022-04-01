const SeasonComponent = ({
	lat,
	err,
}) => {
	// return(
	if (!lat && err) {
		return (
			<div>Error message: {err}</div>
		);
	}
	if (lat && !err) {
		return (
			<div>The latitude is: {lat}</div>
		);
	}
    return <div>loading</div>
	// )
};

export default SeasonComponent;
