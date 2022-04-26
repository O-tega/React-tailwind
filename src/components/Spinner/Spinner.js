import React from "react";

const Spinner = ({ message }) => {
	return (

		<div class='flex justify-center items-center h-screen'>
			<div>
				<div className="flex justify-center">
					<div
						class='spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-600'
						role='status'
					></div>
				</div>
				<div class='visually-hidden'>
					{message}
				</div>
			</div>
		</div>
	);
};

Spinner.defaultProps = {
	message: "Loading...",
};
export default Spinner;
