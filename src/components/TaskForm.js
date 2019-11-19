import React, { Component } from 'react';

// import { Container } from './styles';



export default class TaskForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            textbox : ""
        }
    }

    textHandler = (event) => {
        var valor = event.target.value;

        this.setState({textbox: valor})
    }

    buttonHandler = () => {
        var valor = this.state.textbox;

        if(valor.length > 0) {
            this.props.create(valor)
            this.setState({
                "textbox" : ""
            })
        } else {
            alert("Input vazio!")
        }
    }

    


  render() {
    return <div className="title">
        <input onChange={this.textHandler} type="text" value={this.state.textbox}></input>
        <button onClick={this.buttonHandler}>Inserir Tarefa</button>
    </div>
  }
}
