import {connect} from 'react-redux';
import Actions from '../components/Articles/Actions';
import { deleteArticleAPI } from "../data/actions/api";

const mapDispatchToProps = dispatch => {
	return {
		onDelete: data => dispatch(deleteArticleAPI(data)),
	};
};

export default connect(null, mapDispatchToProps)(Actions);