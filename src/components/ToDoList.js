import React, { Component } from 'react';

class ToDoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            task : "",
            items : []
        };
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    addItem  = (event) => {
        event.preventDefault();
        this.setState({
            task: "",
            items : [...this.state.items,this.state.task]
        });
    }

    onChange = (event) => {
        this.setState({
            task: event.target.value
        });
    }

    removeItem = (event) => {
        const k = event.target.id;
        console.log(k);
        this.setState(prevState=>({
            items : prevState.items.filter(item=> item!=k)
        }));
    }

    render() {

        const todos = this.state.items.map((item,index) => {
                return(
                    <div key={index} className="task-card">
                    <div>{item}</div>
                    <button id={item} onClick={this.removeItem}>Done</button>
                    </div>
                );
        });
        return(
            <div className="todolist">
                <div className="header">
                    <form onSubmit={this.addItem}>
                    <input value={this.state.task} placeholder="Enter task" onChange={this.onChange}>
                    </input>
                    <button type="submit">Add</button>
                    </form>
                    {todos}
                </div>
            </div>
        );
    }
}


export default ToDoList;