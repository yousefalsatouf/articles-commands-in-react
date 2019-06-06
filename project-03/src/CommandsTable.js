import React, {Component} from 'react';

class CommandsTable extends Component
{
    state = {
        commandTitle: [
            "Marque",
            "Nom",
            "Prix",
            "Quantité",
            "Compteur",
            "Sous-total"
        ],
    };

    render() {
        const title = "Commands: ";
        const commandTitle = this.state.commandTitle.map(head => (
            <th>{head}</th>
        ));
        return  <div>
                    <h1>{title}</h1>
                    <table>
                        <thead>{commandTitle}</thead>
                        <tbody>{this.props.newCommandsList}</tbody>
                        <tfoot>{this.props.totalPrices}</tfoot>
                    </table>
                </div>;
    }
}

export default CommandsTable;