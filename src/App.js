import './App.css';
import {Component} from 'react';
import FormOutput from './input';

class Form extends Component{
  state={
    showComponent:false,
    arr:[],
    Name:[],
    Department:[],
    Rating: [],
  };
  updateName=($event)=>{
    const updateName=$event.target.value;
    this.setState({Name:updateName});
  };
  updateDepartment=($event)=>{
    const updateDepartment=$event.target.value;
    this.setState({Department:updateDepartment});
  };
  updateRating=($event)=>{
    const updateRating=$event.target.value;
    this.setState({Rating:updateRating});
  };
  arr=(e)=>{
    e.preventDefault();
    const userDetails={
      Name:this.state.Name,
      Department:this.state.Department,
      Rating: this.state.Rating,
    };
    this.setState({Name:'',Department:'',Rating:''});
    const updateDetails=[...this.state.arr];
    updateDetails.push(userDetails);
    this.setState({arr:updateDetails});
    this.setState({showComponent:true});
  }
  updateComponent=()=>{
    this.setState({showComponent:!this.state.showComponent});
  }

  render(){
    
    console.log(this.updateName);
    return(
      <center>
        
          {this.state.showComponent ?
        <FormOutput arr={this.state.arr} updateComponent={this.updateComponent}></FormOutput>
        :
        <div className='main'>
        <h1>EMPLOYEE FEEDBACK FORM</h1>
        <div>Name : 
          <input type='text' name='Name' value={this.state.Name} className='inputField' onChange={this.updateName}></input></div>
        <br/>
        <div>Department : 
          <input type='text' name='Department' value={this.state.Department} className='inputField' onChange={this.updateDepartment}></input></div>
        <br/>
        <div>Rating : 
          <input type='text' name='Rating' value={this.state.Rating} className='inputField' onChange={this.updateRating}></input></div>
        <br/><br/>
        <button onClick={this.arr}>Submit</button>
        <div className='container'></div>
      </div>}
     
          
      </center>
    );
  }
}

export default Form;