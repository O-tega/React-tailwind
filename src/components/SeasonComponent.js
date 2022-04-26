import React from "react";
import Spinner from "./Spinner/Spinner";
import {
	UilSnowflake,
	UilSun,
} from "@iconscout/react-unicons";

const getSeason = (lat, month) => {
	if (month > 2 && month < 9) {
		return lat > 0
			? "summer"
			: "winter";
	} else {
		return lat > 0
			? "winter"
			: "summer";
	}
};

const seasonConfig = {
	winter: {
		text: "burr, it's chilly",
		iconName: (
			<UilSnowflake
				size='100'
				color='#61DAFB'
			/>
		),
	},
	summer: {
		text: "let's hit the beach",
		iconName: (
			<UilSun
				size='100'
				color='#FFF563'
			/>
		),
	},
};

const SeasonComponent = ({
	lat,
	err,
}) => {
	const season = getSeason(
		lat,
		new Date().getMonth()
	);
	console.log(lat);
	console.log(season);

	// write a tenary operation that check if the season is winter or summer
	// const checker =
	// 	season === "winter"
	// 		? "burr, its chilly"
	// 		: "lets hit the beach";

	// simplifying the use of tenary expression
	const { text, iconName } =
		seasonConfig[season];

	if (!lat && err) {
		return (
			<div>Error message: {err}</div>
		);
	}
	if (lat && !err) {
		return (
			<div className='justify-center flex'>
				<div className='w-9/12'>
					<span className='flex mb-10'>
						{iconName}
					</span>
					<h1 className='text-2xl text-red-700 text-center'>
						{text}
					</h1>
					<span className='float-right flex mt-10'>
						{iconName}
					</span>
				</div>
			</div>
		);
	}
	return <Spinner message = "Please accept location request"/>
};

export default SeasonComponent;
