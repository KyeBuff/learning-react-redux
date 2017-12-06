import React from "react";

import Form from "../Forms/Form";

// the add article component
const Edit = ({onSubmit, fields}) => (
    <div>
        <h2>Edit Article</h2>

        <Form onSubmit={ onSubmit } className="panel-body" fields={ fields } button="Edit Article" />
    </div>
);

export default Edit;
