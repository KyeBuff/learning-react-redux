import {connect} from 'react-redux';
import Comments from '../components/Articles/Comments';
import { addComment } from "../data/actions/state";
import { fetchComments } from '../data/actions/api';

const mapDispatchToProps = (dispatch, {id}) => {

	return {
		onSubmit: data => {
			data.id = id;
			dispatch(addComment(data))
		},
		onLoad: id => {
			dispatch(fetchComments(id));
		},
	};
};

export default connect(null, mapDispatchToProps)(Comments);