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

const updateArticle = (state, {article}) => {	

	return state.update('articles', articles => {

		return articles.map(a => {

			return a.get('id') === article.get('id') ? article : a ;

		});

	});

}

const addComment = (state, { id, email, comment }) => {	

	const newComment = Map(comment);

	return state.update('articles', articles => {

		return articles.map(a => {

			return a.get('id') === id ? 
				a.update('comments', comments => comments.push(newComment)) : a;

		});

	});

}

const setArticles = (state, { articles, tagID }) => state.set("articles", articles);

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

const setUpdatedArticle = (state, {article}) => {
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

const setArticlesByTag = (state, { tagID }) => {	

	const articles = state.get('articles');
	const articlesByTag = articles.filter(a => {
  	return a.get('tags').some(tagOb => tagOb.get('id') === tagID); 
	});

	//Update tags map,
	//Loop articles 
	//Loop each tags list in article
	//if tagID matches any IDs in the tags array of objects, add article to tags map 
	return state.set('tags', articlesByTag);
}

const reducer = (state, action) => {
	switch (action.type) {
		case 'setArticles': return setArticles(state, action);
		case 'setComments': return setComments(state, action);
		case 'setArticle': return setArticle(state, action);
		case 'setUpdatedArticle': return setUpdatedArticle(state, action);
		case 'addArticle': return addArticle(state, action);
		case 'updateArticle': return updateArticle(state, action);
		case 'addComment': return addComment(state, action);
		case 'deleteArticle': return deleteArticle(state, action);
		case 'setArticlesByTag': return setArticlesByTag(state, action);
		default: return state;
	}
}

export default reducer;

