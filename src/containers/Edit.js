// Tidy up edit
	//dispatch to props should have values passed into ob from props

import { connect } from 'react-redux';
import Edit from "../components/Articles/Edit";
import { putArticle, fetchUpdatedArticle } from "../data/actions/api";

const mapStateToProps = (state, { id } ) => {

	//only do this if an article exists

	let article = 'Unable to retrieve article';
	let tags = [];
	let articles;
	let fields = [];

	if(state.get('articles').count()) {
		articles = state.get('articles');
		article = articles.find(a => a.get('id') === +id);
		console.log(article.toJS());
		tags = article.get('tags').map(tag => tag.get('name')).join(' ');
		fields = [
    	{ name: "title", label: "Title", value: article.get('title') },
    	{ name: "article", label: "Article", value: article.get('article')},
    	{ name: "tags", label: "Tags", value: tags},
		];	
	} 
	return {
		fields: fields,
	}
}

const mapDispatchToProps = (dispatch, { id }) => {

	return {
		onSubmit: (data) => {
			data.id = id;
			dispatch(putArticle(data));
		},
		//on load to fetch article
		onLoad: (data) => dispatch(fetchUpdatedArticle(id)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit);






