import React from "react";


const Spinner = (props) => {
	return (
		<div>
			<div className='flex justify-center pt-64 items-center'>
				<div>
					<div
						class='spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full text-blue-500'
						role='status'
					></div>
					<div class='visually-hidden'>
						{props.message}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Spinner;
