// Reusable components to be used n the app js
import React from "react";
import { Fragment } from "react";
import  faker from '@faker-js/faker';

const CommentDetails = ({
	author,
	time,
	info}
) => {
	return (
		<Fragment>
			<div className="flex">
				<div className='rounded mr-4'>
					<a href='/'>
						<img src={faker.image.avatar}
							alt='profile_img'
						/>
					</a>
				</div>
				<div >
					<a href='./' className="text-xl text-red-500">{author}</a>
					<span className="ml-2">
						Today at {time}
					</span>
					<p>{info}</p>
				</div>
			</div>
		</Fragment>
	);
};

export default CommentDetails;
