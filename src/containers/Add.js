import {connect} from 'react-redux';
import Add from '../components/Articles/Add';

const mapDispatchToProps = dispatch => {
	return {
		onSubmit: () => dispatch({ type: "addArticle" }),
	};
};

export default connect(null, mapDispatchToProps)(Add);