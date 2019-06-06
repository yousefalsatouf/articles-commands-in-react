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
        subTotal: [],
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

    handelPlus = (id)=>{
        this.setState({counter: this.state.counter + 1});
        const amount = this.state.counter;
        for (let i = 0; i < this.state.newCommands.length; i++)
        {
            if (this.state.newCommands[i].id === id)
            {
                const price = this.state.newCommands[i].prix;
                this.handelPrices(price, amount);
            }
        }
    };

    handelMinus = (id)=>{
        this.setState({counter: parseInt(this.state.counter)  - 1});
        const amount = this.state.counter;
        for (let i = 0; i < this.state.newCommands.length; i++)
        {
            if (this.state.newCommands[i].id === id)
            {
                const price = this.state.newCommands[i].prix;
                this.handelPrices(price, amount);
            }
        }
    };

    handelPrices = (price, newAmount)=>{
        const result = parseInt(price)*newAmount;
        this.setState({subTotal: this.state.subTotal + parseInt(result)});
        const subTotal = this.state.subTotal;
        for (let counter in subTotal)
        {
            const total = this.state.total;
            this.setState({total: counter + total});
        }
    };

    render() {
        const {data, newCommands, error, isLoaded, counter,subTotal, total} = this.state;
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
                <td>{counter}</td>
                <td>
                    <button onClick={()=>this.handelPlus(newCommand.id)}>+</button>
                    <button onClick={()=>this.handelMinus(newCommand.id)}>-</button>
                </td>
                <td>{subTotal}</td>
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