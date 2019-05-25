import React, { Component } from 'react';
import ArticlesTable from './ArticlesTable';
import $ from 'jquery';
import './App.css';

class App extends Component
{
    componentDidMount()
    {
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
    }

    render()
      {
        return(
            <div className="container">
              <ArticlesTable />
            </div>
        )
      }
}

export default App;
