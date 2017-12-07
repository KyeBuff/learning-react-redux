import axios from 'axios';

export default axios.create({
	baseURL: "http://kyebuff.restful.training/api/",
	params: {key: "9b9a23654aaaa2add91bb2abeb9b95656a9eb082"},
	headers: {Accept: "application/json"},
});

