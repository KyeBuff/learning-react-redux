import { Map, List } from "immutable";

let lastID = 2;

const addArticle = (state, { title, article, tags }) => {
	
	lastID += 1;

	tags = List(tags.split(', '));

	return state.update('articles', articles => {
		return articles.push(Map({
			id: lastID,
			title: title,
			article: article,
			comments: List(),
			tags: tags,

		}));
	}) 
};

const updateArticle = (state, { id, title, article, tags }) => {	

	tags = List(tags.split(', '));

	return state.update('articles', articles => {

		return articles.map(a => {

			return a.get('id') === id ? a.set('title', title).set('article', article).set('tags', tags) : a ;

		});

	});

}

const addComment = (state, { id, email, comment }) => {	

	const newComment = Map({
		email: email,
		comment: comment,
	});
	
	return state.update('articles', articles => {

		return articles.map(a => {

			return a.get('id') === id ? 
				a.update('comments', comments => comments.push(newComment)) : a;

		});

	});

}

const deleteArticle = (state, { id }) => {	

	return state.update('articles', articles => articles.filter(a => a.get('id') !== id));

}

const reducer = (state, action) => {
	switch (action.type) {
		case 'addArticle': return addArticle(state, action);
		case 'updateArticle': return updateArticle(state, action);
		case 'addComment': return addComment(state, action);
		case 'deleteArticle': return deleteArticle(state, action);
		default: return state;
	}
}

export default reducer;