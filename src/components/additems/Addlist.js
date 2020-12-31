import React,{Component}from 'react'
import './Addlist.css'
class AddItem extends Component{
    state={ 
       name : '',
       age : ''
    }
    handl=(e) =>{
        this.setState({
            
            [e.target.id]:e.target.value
            
            })
            console.log(e.target.value)
        
    }
    handlsubmit=(e)=>{
        e.preventDefault();
        if(e.target.name.value ===''&& e.target.age.value ===''){
            return false
        }
        else{
        this.props.addItem(this.state)
        this.setState({
            name:'',
            age:''}
        )}
    
    }


    render(){
        return(
            <div>
               <form onSubmit={this.handlsubmit}>
               <input type="text"placeholder="write name...." id="name" onChange={this.handl} value= {this.state.name}/>
               <input type="number"placeholder="write age...." id="age" onChange={this.handl} value= {this.state.age}/>
               <input  type="submit" value="ADD"/>
               </form>
            </div>
        )
    }
};
export default AddItem;