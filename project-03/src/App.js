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
        counter: 0,
        total: 0
    };
    componentDidMount()
    {
        $.ajax({
            url: 'http://localhost:8080/articles.php',
            type: 'GET',
            dataType: 'json',
            success: (data)=>{
                //console.log(data);
                this.setState({
                    isLoaded: true,
                    data: data
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
    handelNewCommand = (id)=>{
        //console.log(id);
        function find(data, id)
        {
            for (let i = 0; i < data.length; i++)
            {
                if (data[i].id === id)
                {
                    return data[i];
                }
            }
            return null;
        }
        const data = this.state.data.slice();
        //console.log(data);
        let insert = find(data, id);
        //console.log(insert);
        this.state.newCommands.push(insert);
        const commands = this.state.newCommands;
            this.setState(commands);
    };

    handelPlus = ()=>{
        this.setState({counter: this.state.counter + 1});
        const count = this.state.counter;
        this.handelPrices(count)
    };

    handelMinus = ()=>{
        this.setState({counter: this.state.counter - 1});
        const count = this.state.counter;
        this.handelPrices(count)
    };

    handelPrices = (newAmount)=>{
        console.log(newAmount);
    };

    render() {
        const {data, newCommands, error, isLoaded, counter, total} = this.state;
        const articles = data.map(data => (
            <tr>
                <td>{data.marque}</td>
                <td>{data.nom}</td>
                <td>{data.prix}</td>
                <td><button onClick={()=>this.handelNewCommand(data.id)}>Ajouter</button></td>
            </tr>
        ));
        const newCommand = newCommands.map(newCommand => (
            <tr>
                <td>{newCommand.marque}</td>
                <td>{newCommand.nom}</td>
                <td>{newCommand.prix}</td>
                <td className="amount">{counter}</td>
                <td className="btn">
                    <button className="plus" onClick={this.handelPlus}>+</button>
                    <button className="minus" onClick={this.handelMinus}>-</button>
                </td>
                <td className="sub-total">0</td>
            </tr>
        ));
        const totalForm =   <tr>
                                 <td className="text-uppercase text-right" colSpan="5">Total</td>
                                 <td className="total">{total}</td>
                            </tr>;

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
                    <CommandsTable newCommandsList={newCommand} totalPrices={totalForm}/>
                </div>
            )
        }
    }
}

export default App;