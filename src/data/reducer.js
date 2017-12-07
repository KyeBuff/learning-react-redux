import { Map, List } from "immutable";

const addArticle = (state, { id, title, article, tags }) => {

	return state.update('articles', articles => {
		return articles.push(Map({
			id: id,
			title: title,
			article: article,
			comments: List(),
			tags: List(tags),

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

const setArticles = (state, { articles }) => {
	return state.set("articles", articles);
};

const setArticle = (state, {article}) => {
	//search articles 
		//if article exists
	if(state.get('articles').find(a => a.get('id') === article.get('id'))) {
		//update the missing properties title
		return state.update('articles', articles => articles.map(a => {
			return a.get('id') === article.get('id') ? a.set('article', article.get('article')) : a ;
		}));
	} else {
		//push the article
		return state.update('articles', articles => articles.push(article));
	}
};

const setComments = (state, {comments, id}) => {
	return state.update('articles', articles => articles.map(a => {
			return a.get('id') === id ? a.set('comments', comments) : a ;
	}));
};

const deleteArticle = (state, { id }) => {	
	return state.update('articles', articles => articles.filter(a => a.get('id') !== id));
}

const reducer = (state, action) => {
	switch (action.type) {
		case 'setArticles': return setArticles(state, action);
		case 'setComments': return setComments(state, action);
		case 'setArticle': return setArticle(state, action);
		case 'addArticle': return addArticle(state, action);
		case 'updateArticle': return updateArticle(state, action);
		case 'addComment': return addComment(state, action);
		case 'deleteArticle': return deleteArticle(state, action);
		default: return state;
	}
}

export default reducer;

