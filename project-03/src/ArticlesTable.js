import React, { Component } from 'react';

const TableHeaderArticles = () =>
{
    return (
        <thead>
            <tr>
                <th>Marque</th>
                <th>Nom</th>
                <th>Prix</th>
                <th>Action</th>
            </tr>
        </thead>
    )
};

const TableBodyArticles = ()=>{
    return(
        $.ajax({
            url: 'http://127.0.0.1:8080/ReactFramework/project-03-react/public_html/articles.php',
            type: 'GET',
            dataType: 'json',
            statusCode: {
                404: f_404,
                501: f_501
            },
            success: ajax_success,
            error: ajax_error,
            timeout: 2000
        })
    )
};


class ArticlesTable extends Component
{
    render()
    {
        return (
            <table>
                <TableHeaderArticles />
                <TableBodyArticles />
            </table>
        )
    }
}

export default ArticlesTable