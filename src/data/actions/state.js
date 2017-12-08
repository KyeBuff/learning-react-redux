export const addArticle = ({ id, title, article, tags }) => {
	return {
		type: "addArticle",
		id: id,
		title: title,
		tags: tags,
		article: article,
	};
};

export const updateArticle = ({ id, title, article, tags}) => {
	return {
		type: "updateArticle",
		id: id,
		title: title,
		tags,
		article: article,
	};
};

export const deleteArticle = (id) => {
	return {
		type: "deleteArticle",
		id: id,
	};
};

export const setArticles = articles => {
	return {
		type: "setArticles",
		articles,
	};
};

export const setArticle = article => {
	return {
		type: "setArticle",
		article,
	};
};

export const addComment = (comment, id) => {
	return {
		type: "addComment",
		comment,
		id,
	};
};

export const setComments = (comments, id) => {
	return {
		type: "setComments",
		comments,
		id,
	};
};

export const setUpdatedArticle = article => {
	return {
		type: "setUpdatedArticle",
		article,
	};
};