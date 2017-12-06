import {connect} from 'react-redux';
import Comments from '../components/Articles/Comments';
import { addComment } from "../data/actions";

const mapDispatchToProps = (dispatch, {id}) => {

	return {
		onSubmit: data => {
			data.id = id;
			dispatch(addComment(data))
		},
	};
};

export default connect(null, mapDispatchToProps)(Comments);