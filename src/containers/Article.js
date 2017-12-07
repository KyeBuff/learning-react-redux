import { connect } from 'react-redux';
import { fetchArticle } from '../data/actions/api';

import Article from "../components/Articles/Article";

const mapStateToProps = (state, { id } ) => {

	const articles = state.get('articles');
	const article = articles.find(a => a.get('id') === +id);

	return {
		article: article,
	}
}

const mapDispatchToProps = (dispatch, { id } ) => {
	return {
		onLoad: () => dispatch(fetchArticle(id)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Article);

// Map api action to props




