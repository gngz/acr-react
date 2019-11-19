import React from 'react';
import './App.css';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';


export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      list : []
    }
  }

  createTask = (task) => {
    var list = this.state.list;

    list.push(task);

    this.setState({"list" : list})

  }

  removeTask = (id) => {
    var list = this.state.list;
    list.splice(id,1);
    this.setState({
      list : list,
    })

  }


  render() {
    return <div className="title">
      <h1> TO DO List </h1>
      <TaskForm create={this.createTask} />
      <TaskList remove={this.removeTask} tasks={this.state.list} />
    </div>
  }
}


