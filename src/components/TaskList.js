import React, { Component } from 'react';

// import { Container } from './styles';
export default class TaskList extends Component {

createList = () => {
    return this.props.tasks.map((item,index) => {
    return <li key={index}> {item} <button onClick={() => { this.props.remove(index) }}>X</button> </li>
    })
}



  render() {
    return <div className="center">
        <ul>
            {this.createList()}
        </ul>
    </div>
  }
}
