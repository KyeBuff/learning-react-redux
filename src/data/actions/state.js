export const addArticle = ({ id, title, article, tags }) => {
	return {
		type: "addArticle",
		id: id,
		title: title,
		tags: tags,
		article: article,
	};
};

export const updateArticle = (updatedArticle) => {
	return {
		type: "updateArticle",
		article: updatedArticle,
	};
};

export const removeArticle = (id) => {
	return {
		type: "deleteArticle",
		id: id,
	};
};

export const setArticles = (articles, tagID) => {
	return {
		type: "setArticles",
		articles,
		tagID,
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

export const setArticlesByTag = tagID => {
	return {
		type: 'setArticlesByTag',
		tagID,
	}
};