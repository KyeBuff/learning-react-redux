import axios from '../../axios';
import { 
	setArticles,
	setArticle,
	setComments,
	deleteArticle,
	addArticle,
	updateArticle,
	setUpdatedArticle,
	addComment,
} from './state';

import { fromJS } from 'immutable';

export const fetchArticles = (tagID) => dispatch => {
	
	const url = tagID ? "tags/"+tagID+"/articles" : "/articles";

	axios.get(url).then(response => {
		const articles = fromJS(response.data);
		dispatch(setArticles(articles));
	}); 	
};

export const fetchArticle = id => dispatch => {
	axios.get("/articles/"+id).then(response => {
		const article = fromJS(response.data);
		dispatch(setArticle(article));
	}); 
};

export const deleteArticleAPI = id => dispatch => {
	axios.delete("/articles/"+id).then(response => {
		dispatch(deleteArticle(id));
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
		// Unable to uses fromJS?
		dispatch(updateArticle(fromJS(response.data)));
	});
};

export const fetchUpdatedArticle = id => dispatch => {
	axios.get("/articles/"+id).then(response => {
		const article = fromJS(response.data);
		dispatch(setUpdatedArticle(article));
	}); 
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