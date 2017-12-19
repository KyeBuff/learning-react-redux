import { connect } from 'react-redux';
import { fetchArticles } from '../data/actions/api';
import { setArticlesByTag } from '../data/actions/state';

import Articles from "../components/Articles/Articles";

const mapStateToProps = (state, {tagID}) => {
	return tagID ? {
		articles: state.get('tags')
	} : {
		articles: state.get('articles')
	};
}

const mapDispatchToProps = (dispatch, {tagID}) => {
	return {
		onLoad: () => {
			dispatch(fetchArticles(+tagID));
			dispatch(setArticlesByTag(+tagID))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Articles);






