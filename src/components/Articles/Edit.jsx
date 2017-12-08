import React, { Component } from "react";

import Form from "../Forms/Form";

// the add article component
class Edit extends Component {

	componentDidMount() {
		this.props.onLoad();
	}

	render() {

		const {onSubmit, fields} = this.props;

		return (
	    <div>
	        <h2>Edit Article</h2>
	        { fields.length ? (

		        <Form onSubmit={ onSubmit } className="panel-body" fields={ fields } button="Edit Article" />
	        	) : <p>Loading...</p>}
	    </div>
  	);
	}
}

export default Edit;
