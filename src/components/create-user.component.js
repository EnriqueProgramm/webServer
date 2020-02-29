import React, {Component} from "react";
import axios from "axios";


export default class CreateUser extends Component{
    
    constructor(props){
        super(props);
       

    this.onChageUserName = this.onChageUserName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);           
              
    this.state={
            username: '',
        }
    }
    

    onChageUserName(e){
        this.setState({
            username: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
        const user = {
            username: this.state.username
        }
        console.log(user)

        axios.post('http://localhost:5000/users/add', user)
            .then(res => console.log(res.data));

        this.setState({
            username: ''
        })
    }
    
    
    render() {
    return(
        <form onSubmit= {this.onSubmit} className ="form-group">
            
            <div className = "form-group">   
            <label>Create New User</label>
            </div> 

            <div className="form-group">
               
                <input type="text"
                 required                 
                 id="exampleInputPassword1" 
                 placeholder="First name" 
                 value = {this.state.username} 
                 onChange = {this.onChageUserName}
                  className = "form-control col-xs-10"
                  style ={{marginRight: "5px"}}   
                 />                               
                 
                {/* <input type="text"                
                 className="form-control" 
                 id="exampleInputPassword1" 
                 placeholder="Last name"               
                 className = "col-xs-10"   
                 /> */}
                           
    
            </div>  
            <div className = "form-group">   
            <button type="submit" className="btn btn-primary">Submit</button>
            </div>      
        </form>
    )
}
}