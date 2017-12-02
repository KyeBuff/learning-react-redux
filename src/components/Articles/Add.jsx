import React from "react";

import Form from "../Forms/Form";

// the fields the form should have
const fields = [
    { name: "title", label: "Title" },
    { name: "article", label: "Article" },
];

// the add article component
const Add = () => (
    <div>
        <h2>Add Article</h2>

        <Form className="panel-body" fields={ fields } button="Add Article" />
    </div>
);

export default Add;
