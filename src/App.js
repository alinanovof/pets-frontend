import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import HomePage from './components/HomePage'
import ProfilePage from './components/ProfilePage';
 import MyPets from './components/MyPets';
import Search from './components/Search/Search';
import Navbar from './components/Navbar';
// import PetPage from './components/PetPage';
import AddPet from './components/Admin/AddPet';


function App() {
    
  return (
    <Router>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route path="/profile">
                    <ProfilePage/>
                </Route>
                <Route path="/my-pets">
                    <MyPets/>
                </Route>
                <Route path="/search">
                    <Search/>
                </Route>
                <Route path="/admin/add-pet">
                    <AddPet/>
                </Route>
                {/* <Route path="/my-pets/:id">
                    <PetPage/>
                </Route> */}
            </Switch>
        </Router>
  );
}

export default App;
