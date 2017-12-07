import {connect} from 'react-redux';
import Add from '../components/Articles/Add';
import { postArticle } from "../data/actions/api";

const mapDispatchToProps = dispatch => {
	return {
		onSubmit: data => dispatch(postArticle(data)),
	};
};

export default connect(null, mapDispatchToProps)(Add);