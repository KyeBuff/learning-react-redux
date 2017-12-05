export const addArticle = ({ title, article }) => {
	return {
		type: "addArticle",
		title: title,
		article: article,
	};
};