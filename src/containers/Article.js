import { connect } from 'react-redux';

import Article from "../components/Articles/Article";

const mapStateToProps = (state, { id } ) => {

	const articles = state.get('articles');
	const article = articles.find(a => a.get('id') === +id);

	return {
		article: article,
	}
}

export default connect(mapStateToProps)(Article);






