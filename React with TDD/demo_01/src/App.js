import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class App extends Component {
    constructor() {
        super();

        this.state = {
            todos: []
        }
    }

    onClick = () => {
        const { todos } = this.state;

        let ids = todos.map(t => t.id);

        let max_id = ids.length > 0 ? Math.max(...ids) : 0;

        todos.push({ id: max_id + 1 });

        this.setState({ todos });
    }


    render() {
        const { todos } = this.state;

        return (
            <div>
                <h1>TODOS</h1>

                <div className='todos'>
                    {todos.map(todo => {
                        return (
                            <div key={todo.id}>{todo.id}</div>
                        );
                    })}
                </div>
                
                <Button className='add-btn' onClick={this.onClick}>Add Todo</Button>
            </div>
        )
    }
}
