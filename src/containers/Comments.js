import {connect} from 'react-redux';
import Comments from '../components/Articles/Comments';
import { fetchComments, postComment } from '../data/actions/api';

const mapDispatchToProps = (dispatch, {id}) => {

	return {
		onSubmit: data => {
			data.id = id;
			dispatch(postComment(data, id))
		},
		onLoad: id => {
			dispatch(fetchComments(id));
		},
	};
};

export default connect(null, mapDispatchToProps)(Comments);