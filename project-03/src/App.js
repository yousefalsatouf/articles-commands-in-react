import React, {Component} from 'react';
import ArticlesTable from './ArticlesTable';
import CommandsTable from "./CommandsTable";

class App extends Component
{
    state = {
        data: [
            {"id": 1, "marque": "stop dust", "nom": "aspirateur 5000", "prix": "150", "action": "Add"},
            {"id": 2, "marque": "toupropre", "nom": "machine lessiver 2000", "prix": "500", "action": "Add"},
            {"id": 3, "marque": "vitaminix", "nom": "blender 1000", "prix": "250", "action": "Add"},
            {"id": 4, "marque": "hal computer", "nom": "peer", "prix": "1500", "action": "Add"}
        ],
        newCommand: [],
    };
    handelAdd = (id)=>{
        const data = this.state.data.slice();
        const index = data.findIndex((data)=>{
            return data.id === id;
        });
        this.state.newCommand.push(index, 1);
    };

    render() {
        const articles = this.state.data.map(data => (
            <tr>
                <td>{data.marque}</td>
                <td>{data.nom}</td>
                <td>{data.prix}</td>
                <td><button onClick={()=>this.handelAdd(this.state.data.id)}>{data.action}</button></td>
            </tr>
        ));
        const newCommand = this.state.newCommand.map(data=>(
            <tr>
                <td>{data.marque}</td>
                <td>{data.nom}</td>
                <td>{data.prix}</td>
            </tr>
        ));

        return (
            <div className="App">
                <ArticlesTable articlesList={articles}/>
                <CommandsTable addNew={newCommand}/>
            </div>
        )
    }
}
export default App;