import {connect} from 'react-redux';
import Add from '../components/Articles/Add';
import { addArticle } from "../data/actions";

const mapDispatchToProps = dispatch => {
	return {
		onSubmit: data => dispatch(addArticle(data)),
	};
};

export default connect(null, mapDispatchToProps)(Add);