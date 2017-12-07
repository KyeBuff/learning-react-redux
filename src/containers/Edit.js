// Tidy up edit
	//dispatch to props should have values passed into ob from props

import { connect } from 'react-redux';
import Edit from "../components/Articles/Edit";
import { updateArticle } from "../data/actions/state";

const mapStateToProps = (state, { id } ) => {

	const articles = state.get('articles');
	const article = articles.find(a => a.get('id') === +id);
	const tags = article.get('tags').join(', ');

	const fields = [
    { name: "title", label: "Title", value: article.get('title') },
    { name: "article", label: "Article", value: article.get('article')},
    { name: "tags", label: "Tags", value: tags},
	];

	return {
		fields: fields,
	}
}

const mapDispatchToProps = (dispatch, { id }) => {

	return {
		onSubmit: (data) => {
			data.id = +id;
			dispatch(updateArticle(data));
		},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit);






