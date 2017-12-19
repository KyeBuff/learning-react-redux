import {connect} from 'react-redux';
import Comments from '../components/Articles/Comments';
import { fetchComments, postComment } from '../data/actions/api';

const mapDispatchToProps = (dispatch, {id}) => {

	return {
		onSubmit: data => {
			dispatch(postComment(data, id))
		},
		onLoad: () => {
			dispatch(fetchComments(id));
		},
	};
};

export default connect(null, mapDispatchToProps)(Comments);