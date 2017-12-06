export const addArticle = ({ title, article, tags }) => {
	return {
		type: "addArticle",
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
