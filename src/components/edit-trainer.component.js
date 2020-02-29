import React, {Component} from "react";
import axios from "axios";


export default class EditTrainer extends Component{
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
        trainers: []     
     }
 }

 componentDidMount(){

    axios.get('http://localhost:5000/trainers/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    trainerName: response.data.trainerName,
                    trainerSpeciality: response.data.trainerSpeciality,
                    yearsOfExperience: response.data.yearsOfExperience,                  
                })
            })
            .catch(function(error){
                console.log(error);
            })


    axios.get('http://localhost:5000/trainers')
       .then(response => {
           if(response.data.length > 0){
               this.setState({
                   trainers:response.data.map(trainer =>trainer.trainerName),
                   
               })
           }
       })

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

   

    axios.post('http://localhost:5000/trainers/update/'+this.props.match.params.id, trainer)
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
                <h3>Edit Trainer Profile</h3>
                <form onSubmit ={this.onSubmit}>
                <div className = "form-group">
                <label>Trainer Name: </label>            
                <select ref = "userInput"
                required
                className= "form-control"
                value ={this.state.trainerName}
                onChange={this.onChangeTrainerName}>
                {   this.state.trainers.map(function(trainer){
                    return <option
                     key={trainer}
                     value={trainer}>{trainer}
                     </option>;                     
                })              
                }
                </select>
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
                    <input type="submit" value="Edit Trainer" className="btn btn-primary" />
                </div>
                </form>
            </div>
    )
}
}