import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"


import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import TrainersList from "./components/trainers-list.component";
import CreateTrainer from "./components/create-trainer.component";
import EditTrainer from "./components/edit-trainer.component";

       
function App() {
  return (
    <Router>
    <div className = "container">
      <Navbar />
        <br />
        
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
        <Route path ="/trainer" component ={TrainersList}/>    
        <Route path ="/createTrainer" component ={CreateTrainer}/>
        <Route path ="/edittrainer/:id" component ={EditTrainer} />
        
      </div>
    </Router>
    
  );
}

export default App;
