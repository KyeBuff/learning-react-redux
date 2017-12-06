import React from "react";

import FourOhFour from "../FourOhFour";

import Actions from "../../containers/Actions";
import Tags from "./Tags";
import Comments from "../../containers/Comments";

// if article isn't passed in, that means it's an invalid id, so show FourOhFour
const Article = ({ article }) => !article ? <FourOhFour /> : (
    <div>
        { /* the edit/delete buttons  */ }
        <Actions article={ article } />

        <h2>{ article.get("title") }</h2>

        { /* allows us to set HTML inside an element */ }
        <div dangerouslySetInnerHTML={{ __html: article.get("article") }} />

        { /* use the Tags component to show the tags */ }
        <Tags tags={ article.get("tags") } />

        <hr />

        { /* use the comments component */ }
        <Comments comments={ article.get("comments") } id={article.get('id')}/>
    </div>
);

export default Article;
