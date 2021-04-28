import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import ProfilePage from "./components/ProfilePage";
import MyPets from "./components/MyPets";
import Search from "./components/Search/Search";
import Navbar from "./components/Navbar";
import PetPage from "./components/PetPage";
import AddPet from "./components/Admin/AddPet";
import AuthProvider, { useAuth } from "./context/AuthContext";
import AdminDash from "./components/Admin/AdminDash";
import AllPets from "./components/Admin/AllPets";

function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

const AppRouter = () => {
  let auth = useAuth();
  if (!auth.isInitiallyLoaded) {
    return <div></div>;
  }
  return (
    <Router>
      <Navbar />
      <Switch>
        <PrivateRoute path="/profile">
          <ProfilePage />
        </PrivateRoute>
        <PrivateRoute path="/my-pets/:petId">
          <PetPage />
        </PrivateRoute>
        <PrivateRoute path="/my-pets">
          <MyPets />
        </PrivateRoute>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/admin/add-pet">
          <AddPet />
        </Route>
        <Route path="/admin/all-pets">
          <AllPets />
        </Route>
        <PrivateRoute path="/admin">
          <AdminDash />
        </PrivateRoute>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
};

function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default App;
