import React, {Component} from 'react';
import $ from 'jquery';
import ArticlesTable from './ArticlesTable';
import CommandsTable from "./CommandsTable";

class App extends Component
{
    state = {
        data: [],
        newCommands: [],
        error: null,
        isLoading:  false,
    };
    componentDidMount()
    {
        $.ajax({
            url: 'http://localhost:3000/ALSATOUF-yousef/public_html/articles.php',
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
    handelAdd = (id)=>{
        const data = this.state.data.slice();
        const index = data.findIndex((data)=>{
            return data.id === id;
        });
        this.state.newCommands.push(index, 1);
    };

    render() {
        const {data, newCommands, error, isLoaded} = this.state;
        const articles = data.map(data => (
            <tr>
                <td>{data.marque}</td>
                <td>{data.nom}</td>
                <td>{data.prix}</td>
                <td><button onClick={()=>this.handelAdd(this.state.data.id)}>{data.action}</button></td>
            </tr>
        ));
        const newCommand = newCommands.map(data=>(
            <tr>
                <td>{data.marque}</td>
                <td>{data.nom}</td>
                <td>{data.prix}</td>
            </tr>
        ));

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
                    <ArticlesTable articlesList={articles}/>
                    <CommandsTable newCommand={newCommand}/>
                </div>
            )
        }
    }
}
export default App;