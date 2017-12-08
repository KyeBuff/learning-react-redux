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

export const addComment = ({ id, email, comment }) => {
	return {
		type: "addComment",
		email: email,
		comment: comment,
		id: id,
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