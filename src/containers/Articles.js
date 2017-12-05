import { connect } from 'react-redux';

import Articles from "../components/Articles/Articles";

const mapStateToProps = state => {
	return {
		articles: state.get('articles'),
	}
}

export default connect(mapStateToProps)(Articles);






