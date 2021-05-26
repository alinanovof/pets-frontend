
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
import AllUsers from "./components/Admin/AllUsers";

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

function AdminRoute({ children, ...rest }) {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.token && auth.admin ? (
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
        <PrivateRoute path="/profile/:userId">
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
        <AdminRoute path="/admin/all-users">
          <AllUsers />
        </AdminRoute>
        <AdminRoute path="/admin/add-pet">
          <AddPet />
        </AdminRoute>
        <AdminRoute path="/admin/all-pets">
          <AllPets />
        </AdminRoute>
        <AdminRoute path="/admin">
          <AdminDash />
        </AdminRoute>
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
