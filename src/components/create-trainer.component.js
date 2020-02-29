import React, {Component} from "react";
import axios from "axios";


export default class CreateTrainer extends Component{
 constructor(props){
     super(props);

    this.onChangeTrainerName = this.onChangeTrainerName.bind(this);
    this.onChangeTrainerSpeciality = this.onChangeTrainerSpeciality.bind(this);
    this.onChangeyearsOfExperience = this.onChangeyearsOfExperience.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

     this.state={
        trainerName: '',
        trainerSpeciality:'',
        yearsOfExperience: 0,
      
     }
 }

 

 onChangeTrainerName(e){
       this.setState({
           trainerName: e.target.value
       });
 }

 onChangeTrainerSpeciality(e){
    this.setState({
        trainerSpeciality: e.target.value
    });
}

onChangeyearsOfExperience(e){
    this.setState({
        yearsOfExperience: e.target.value
    });
}

onSubmit(e){
    e.preventDefault();
    const trainer = {
        trainerName: this.state.trainerName,
        trainerSpeciality: this.state.trainerSpeciality,
        yearsOfExperience: this.state.yearsOfExperience
    }

     console.log(trainer);

    axios.post('http://localhost:5000/trainers/add', trainer)
        .then(res => console.log(res.data))

        this.setState({
            trainerName: '',
            trainerSpeciality: '',
            yearsOfExperience: 0
        })
    }

    render() {
    return(
        <div>
                <h3>Create New Trainer Profile</h3>
                <form onSubmit ={this.onSubmit}>
                <div className = "form-group">
                <label>Trainer Name: </label>            
                <input type="text"
                    required
                    className="form-control"
                    value={this.state.trainerName}
                    onChange={this.onChangeTrainerName}
                />                          
                </div>
                <div className="form-group">
                <label>Trainer Speciality: </label>
                <input type="text"
                    required
                    className="form-control"
                    value={this.state.trainerSpeciality}
                    onChange={this.onChangeTrainerSpeciality}
                />
                </div>
                <div className="form-group">
                    <label>Years of Experience: </label>
                    <input
                         type="text"
                         required
                         className="form-control"
                         value={this.state.yearsOfExperience}
                         onChange={this.onChangeyearsOfExperience}/>
                </div>                

                <div className="form-group">
                    <input type="submit" value="Create Trainer" className="btn btn-primary" />
                </div>
                </form>
            </div>
    )
}
}