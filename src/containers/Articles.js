import { connect } from 'react-redux';
import { fetchArticles } from '../data/actions/api';

import Articles from "../components/Articles/Articles";

const mapStateToProps = state => {
	return {
		articles: state.get('articles'),
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onLoad: (tagID) => dispatch(fetchArticles(tagID))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Articles);






