import {connect} from 'react-redux';
import Actions from '../components/Articles/Actions';
import { deleteArticle } from "../data/actions";

const mapDispatchToProps = dispatch => {
	return {
		onDelete: data => dispatch(deleteArticle(data)),
	};
};

export default connect(null, mapDispatchToProps)(Actions);