import React from "react";
import { Link } from "react-router-dom";

// show each tag - tags passed in by parent
const Tags = ({ tags }) => (
    <div>
        { tags.map((tag, i) => (
            <Link to={'/tags/'+tag.get('id')+'/articles'} className="label label-primary" key={ i }>{ tag.get('name') }</Link>
        ))}
    </div>
);

export default Tags;
