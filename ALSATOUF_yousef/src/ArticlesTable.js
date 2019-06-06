import React, {Component} from 'react';

class ArticlesTable extends Component {
    state = {
        articleTitle: [
            "Marque",
            "Nom",
            "Prix",
            "Action"
        ],
    };

    render() {
        const title = "Articles: ";
        const articleTitle = this.state.articleTitle.map(head => (
            <th>{head}</th>
        ));
        return <div>
                    <h1>{title}</h1>
                    <table>
                        <thead>{articleTitle}</thead>
                        <tbody>{this.props.articlesList}</tbody>
                    </table>
                </div>
    }
}

export default ArticlesTable;