import React, { Component } from "react";
import { Link } from "react-router-dom";

// shows a list of articles
class Articles extends Component {

    componentDidMount() {
        this.props.onLoad();
    }

    render() {
        const {articles} = this.props;
        return (
            <div>
            { /* check there are articles to show */ }
            { articles.count() ?
                <ul className="list-group">
                    { /* map over each article and display a list item for each one */ }
                    { articles.map(article => (
                        <li className="list-group-item" key={ article.get("id") }>
                            { /* link to the article using its id */ }
                            <Link to={ "/articles/" + article.get("id") }>{ article.get("title") }</Link>
                        </li>
                    ))}
                </ul>
                :
                <p>No articles found</p>
            }
            </div>
        )     
    }
    
};

export default Articles;
