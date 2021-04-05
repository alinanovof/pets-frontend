import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import HomePage from './components/HomePage'
import ProfilePage from './components/ProfilePage';
// import MyPets from './components/MyPets';
// import Search from './components/Search';
import Navbar from './components/Navbar';


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
                {/* 
                <Route path="/my-pets">
                    <MyPets/>
                </Route>
                <Route path="/search">
                    <Search/>
                </Route> */}
            </Switch>
        </Router>
  );
}

export default App;
