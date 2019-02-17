class List extends React.Component {
  constructor(){
    super()
    this.changeHandler = this.changeHandler.bind( this );
    this.clickHandler = this.clickHandler.bind( this );
    this.deleteHandler = this.deleteHandler.bind( this );
  }

  state = {
    list : [],
    word : "",
    error: ""
  }

  changeHandler(event){
      this.setState({word:event.target.value});
      console.log("change", event.target.value);
      
    }

  clickHandler(event) {
    if (this.state.word.length > 1 && this.state.word.length < 200) { 
    let newList = this.state.list.slice();
    newList.push(this.state.word);
    this.setState({list: newList})
    }
    else {
      if (this.state.word.length <= 1) {
        this.setState({error: "Your input is too short, please try again."})
      }
      else if (this.state.word.length >= 200) {
        this.setState({error: "Your input is too long, please try again."})
      }
    }
  }
  
  deleteHandler(x) {
    let list = this.state.list.slice();
    list.splice(x, 1);
    this.setState({list: list})
  }

  render() {
      // render the list with a map() here

      const listSet = this.state.list.map((setList, x) => {return <li key={x}>{setList} <button onClick= {this.deleteHandler}>delete</button></li>}
      )

      console.log("rendering");
      return (
        <div>
        <div className="list">
          <input onChange={this.changeHandler} value={this.state.word}/>
          <button onClick= {this.clickHandler}>add item</button>
          <ul>{listSet}</ul>

        <div className = "error">{this.state.error}</div>
          </div>
        </div>
        
      );
  }
}

ReactDOM.render(
    <List/>,
    document.getElementById('root')
);

