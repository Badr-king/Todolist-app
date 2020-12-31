import React,{Component} from 'react'
import Todo from './components/Items/Items'
import AddItem from './components/additems/Addlist'
import './App.css';

class App extends Component {
  state={
    items:[
    {id:1, name:"ahmed", age:33},
    {id:2, name:"Ali", age:22},
    {id:3, name:"Jammal", age:39}
  ]
  };
  deleteitem = (id) =>{
    let items =this.state.items;
    let i=items.findIndex(item =>item.id === id)
    items.splice(i,1)
    this.setState({items})

  };
 addItem = (item) =>{
   item.id=Math.random()
   let items = this.state.items;
   items.push(item);
   this.setState({items})
 };

  
  render(){
  return (
    <div className="App container">
    <h1 className="text-center"> Todo List </h1>
     <Todo items={this.state.items} delet={this.deleteitem} />
     <AddItem addItem={this.addItem}/>
    
    </div>
  );
}}

export default App;
