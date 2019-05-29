import React, {Component} from 'react';
import $ from 'jquery';
import ArticlesTable from './ArticlesTable';
import CommandsTable from "./CommandsTable";

class App extends Component
{
    state = {
        data: [],
        error: null,
        isLoading:  false,
        newCommand: [],
    };
    componentDidMount()
    {
        $.ajax({
            url: '../public/articles.php',
            type: 'GET',
            dataType: 'json',
            success: (data)=>{
                this.setState({
                    isLoaded: true,
                    data: data.data
                });
            },
            error: (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })},
            timeout: 2000
        });
    }

    render() {
        const { error, isLoaded} = this.state;

        if(error)
        {
            return <div>Error Ajax</div>;
        }else if (!isLoaded)
        {
            return <div>Loading...</div>;
        }else
            {
            return (
                <div className="App">
                    <ArticlesTable/>
                    <CommandsTable/>
                </div>
            )
        }
    }
}
export default App;