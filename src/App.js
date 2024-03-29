import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Navbar from "./components/navbar.component";
import ExerciseList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercises.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";


function App() {
  return (
    <Router>
      <div className='container'>
        <Navbar />
        <br/>
        <Routes>
          <Route path="/" exact element={<ExerciseList/>} />
          <Route path="/edit/:id" exact element={<EditExercise/>} />
          <Route path="/create" exact element={<CreateExercise/>} />
          <Route path="/user" exact element={<CreateUser/>} />    
        </Routes>
      </div>      
    </Router>
  );
}

export default App;
