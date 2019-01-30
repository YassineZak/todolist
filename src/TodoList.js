import React, { Component } from 'react';

class TodoList extends Component{
  constructor(){
    super();
    this.state = {
      userInput: '',
      items: []
    }
  }
  onChange(event){
    this.setState({
      userInput: event.target.value
    })
  }
  addTodo(event){
      event.preventDefault(); // evite de reload le formulaire
      this.state.items.push(this.state.userInput);
      this.setState({
        userInput: ''
      });
      console.log(this.state.items);
  }
  renderTodos(){
    return this.state.items.map((item) => {
      if (!item.replace(/\s/g, '').length) {
        alert("vous devez saisir un mot");
      }
      else {
        return (
          <div style={{margin: 20}} className="card card-body bg-light" key={item}>
            {item}
          </div>
        );
      }

    });
  }


  render(){
    return (
      <div className="container" style={{width: "50%", margin: "auto"}}>
        <h1 align="center" style={{marginBottom: 100, marginTop: 40}}>TodoList</h1>
        <input type="text" value={this.state.userInput} style={{textAlign: "center", marginLeft: "25%"}} onChange={this.onChange.bind(this)}/>
        <button className="btn btn-primary" style={{marginLeft: 12}} onClick={this.addTodo.bind(this)}> Ajouter </button>
        <div style={{marginTop: 40}} >{this.renderTodos()}</div>
      </div>
    );
  }
}
export default TodoList;
