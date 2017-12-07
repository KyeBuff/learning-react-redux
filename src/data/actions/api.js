import axios from '../../axios';
import { setArticles } from './state';
import { setArticle } from './state';
import { setComments } from './state';
import { deleteArticle } from './state';
import { addArticle } from './state';

import { fromJS } from 'immutable';

export const fetchArticles = () => dispatch => {
	axios.get("/articles").then(response => {
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

export const fetchComments = id => dispatch => {
	axios.get("/articles/"+id+"/comments").then(response => {
		const comments = fromJS(response.data);
		dispatch(setComments(comments, id));
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

