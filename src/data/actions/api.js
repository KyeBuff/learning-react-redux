import axios from '../../axios';
import { 
	setArticles,
	setArticle,
	setComments,
	removeArticle,
	addArticle,
	updateArticle,
	setUpdatedArticle,
	setArticlesByTag,
	addComment,
} from './state';

import { fromJS } from 'immutable';

export const fetchArticles = (tagID) => (dispatch, getState) => {
	
	axios.get("/articles").then(response => {
		const articles = fromJS(response.data);
		dispatch(setArticles(articles));
		if(tagID) {
			dispatch(setArticlesByTag(tagID));
		}
	});	
	 	
};

export const fetchArticle = id => (dispatch, getState) => {

	const article = getState().get('articles').find(a => {
		return a.get('id') === +id;
	});

	const axiosFetchArticle = () => {
		axios.get("/articles/"+id).then(response => {
			const article = fromJS(response.data);
			dispatch(setArticle(article));
		}); 
	}

	if(article) {
		if(article.get('article')) {
			dispatch(setArticle(article));
		} else {
			axiosFetchArticle();
		}
	} else {
		axiosFetchArticle();
	}
};

export const deleteArticle = id => dispatch => {
	axios.delete("/articles/"+id).then(response => {
		dispatch(removeArticle(id));
	}); 
};

export const postArticle = ({ title, article, tags }) => dispatch => {
	const newArticle = {
		title: title,
		article: article,
		tags: tags.split(' '),
	};
	axios.post("/articles", newArticle).then(response => {
		dispatch(addArticle(response.data));
	});
};

// Can only edit once?
export const putArticle = ({ id, title, article, tags }) => dispatch => {
	const updatedArticle = {
		title: title,
		article: article,
		tags: tags.trim().split(' '),
	};

	axios.put("/articles/"+id, updatedArticle).then(response => {
		const updatedArticle = fromJS(response.data);
		dispatch(updateArticle(fromJS(updatedArticle)));
	});
};

//Reuseable function with fetch article?
export const fetchUpdatedArticle = id => (dispatch, getState) => {

	const article = getState().get('articles').find(a => {
		return a.get('id') === +id;
	});

	const axiosFetchArticle = () => {
		axios.get("/articles/"+id).then(response => {
			const article = fromJS(response.data);
			dispatch(setUpdatedArticle(article));
		}); 
	}

	if(article) {
		dispatch(setArticle(article));
	} else {
		axiosFetchArticle();
	}
	
};

export const fetchComments = (id) => dispatch => {
	axios.get("/articles/"+id+"/comments").then(response => {
		const comments = fromJS(response.data);
		dispatch(setComments(comments, id));
	}); 
};

export const postComment = ({ email, comment }, id) => dispatch => {
	const newComment = {
		email,
		comment,
	};
	axios.post("/articles/"+id+"/comments", newComment).then(response => {
		dispatch(addComment(fromJS(response.data), id));
	});
};

