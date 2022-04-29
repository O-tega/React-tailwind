import axios from "axios";

export default axios.create({
	baseURL: "https://api.unsplash.com",
	headers: {
		Authorization:
			"Client-ID l3o35pKQhsjRplREkfYa6HGmCZMRHjrUp8MdHvJWk_U",
	},
});
