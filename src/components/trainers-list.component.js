import React, { Component } from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';

const Trainer = props => (
    <tr>
    <td>{props.trainer.trainerName}</td>
    <td>{props.trainer.trainerSpeciality}</td>
    <td>{props.trainer.yearsOfExperience}</td>    
    <td>
        <Link to={"/edittrainer/"+props.trainer._id}>edit</Link> | <a href='#' onClick={() => {props.deleteTrainer(props.trainer._id)}}>delete</a>
    </td>
    </tr>

)
    

export default class TrainersList extends Component{
    
    constructor(props){
        super(props);
        this.deleteTrainer = this.deleteTrainer.bind(this);
        this.state={trainers: []};
    }
    

    componentDidMount(){
        axios.get('http://localhost:5000/trainers')
        .then(response => {
            this.setState({trainers: response.data})
        })
        .catch((error) => {
            console.log(error);
        })
    }


    deleteTrainer(id){
        axios.delete('http://localhost:5000/trainers/'+id)
        .then(res=> console.log(res.data));
        this.setState({
            trainers: this.state.trainers.filter(el => el._id !== id)
        })
    }


    trainerList(){
        return this.state.trainers.map(currenttrainer =>{
            return <Trainer trainer={currenttrainer} deleteTrainer = {this.deleteTrainer} key ={currenttrainer._id}/>
        });
    }
    
    render() {
    return(
        <div>
                <div className = "row">
                    <div className ="col-md-11"><h3>Logged Trainers</h3></div>         
                    <a className="btn btn-secondary btn-sm" href="/createTrainer" role="button">New</a>       
                </div>    
                
                <table className ="table">
                    <thead className = "thead-light">
                        <tr>
                            <th>Trainer Name</th>
                            <th>Trainer Speciality</th>
                            <th>Experience(years)</th>                            
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.trainerList() }
                    </tbody>
                    </table>
            </div>
    )
}
}

