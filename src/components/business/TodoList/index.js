import React from 'react';
import './styles.scss';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            text: ''
        };
        this.count = 0;
    }

    changeHandle = (event) => {
        const { value } = event.target;
        this.setState({ text: value });
    };

    add = (event) => {
        if (event.which === 13) {
            const { todos, text } = this.state;
            if (text.trim() === '') return;
            this.count += 1;
            const newTodo = {
                id: this.count,
                text
            };
            this.setState({
                todos: [...todos, newTodo],
                text: ''
            });
        }
    };

    del(id) {
        const { todos } = this.state;
        const newTodos = todos.filter((item) => item.id !== id);
        this.setState({ todos: newTodos });
    }

    render() {
        const { todos, text } = this.state;
        return (
            <div className="todolist-wrap">
                <div className="todo-content-wrap">
                    <div>
                        <input
                            type="text"
                            value={text}
                            onKeyDown={this.add}
                            onChange={this.changeHandle}
                        />
                    </div>
                    <ul>
                        {todos.map((item) => {
                            return (
                                <li key={item.id} className="todo-item">
                                    {item.text}
                                    <span
                                        className="todo-delete-icon"
                                        onClick={this.del.bind(this, item.id)}
                                    >
                                        x
                                    </span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default TodoList;
