
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route, Link
} from "react-router-dom";
import { useState, useEffect } from "react";
import ListSportsComponent from './components/ListSportsComponent';
import ListEventComponent from './components/ListEventComponent';
import AddEventComponent from './components/AddEventComponent';
import ViewEventComponent from './components/ViewEventComponent';
import ViewSportsComponent from './components/ViewSportsComponent';
import AuthService from "./services/AuthService";
import ListPlayersComponent from './components/ListPlayersComponent';
import ListParticipationComponent from './components/ListParticipationComponent';
import AddPlayerComponent from './components/AddPlayerComponent';
import AddParticipationComponent from './components/AddParticipationComponent';
import ListApprovedParticipationComponent from './components/ListApprovedParticipationComponent';
import ListDeclinedParticipationComponent from './components/ListDeclinedParticipationComponent';
import ListPendingParticipationComponent from './components/ListPendingParticipationComponent';
import UpdateParticipationStatusComponent from './components/UpdateParticipationStatusComponent';
import Footer from './Layout/Footer';
import Navbar from './Layout/Navbar';
import Home from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Appbar from './Layout/Appbar';
import Header from './Layout/Header';
function App() {
 /* const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };
  <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to={"/home"} className="nav-link">
            Home
          </Link>
        </li>
      </div>

      {currentUser ? (
        <div className="navbar-nav ms-auto">
          <li className="nav-item">
            <a href="/login" className="nav-link" onClick={logOut}>
              Logout
            </a>
          </li>
        </div>
      ) : (
        <div className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link to={"/login"} className="nav-link">
              Login
            </Link>
          </li>

          <li className="nav-item">
            <Link to={"/signup"} className="nav-link">
              Sign up
            </Link>
          </li>
        </div>
      )}
    </nav>*/
  return (
    <div>
    <Router>
          <Navbar/>
            <div className="App">
                <Routes> 
                      <Route exact path = "/SignUp" element = {<SignUp/>}></Route>
                      <Route exact path = "/" element = {<Login/>}></Route>
                      <Route exact path = "/Home" element = {<Home/>}></Route>
                      <Route exact path = "/sports" element = {<ListSportsComponent/>}></Route>
                      <Route exact path = "/getSportsByName/:sportsName" component = {<ListSportsComponent/>}></Route>
                      <Route exact path = "/events" element = {<ListEventComponent/>}></Route>
                      <Route exact path = "/addEvent" element = {<AddEventComponent/>}></Route>
                      <Route exact path = "/eventByName/:eventName" element = {<ViewEventComponent/>}></Route>
                      <Route exact path = "/players" element = {<ListPlayersComponent/>}></Route>
                      <Route exact path = "/addPlayer" element = {<AddPlayerComponent/>}></Route>
                      <Route exact path = "/getParticipations" element = {<ListParticipationComponent/>}></Route>
                      <Route exact path = "/getApprovedParticipations/Approved" element = {<ListApprovedParticipationComponent/>}></Route>
                      <Route exact path = "/getDeclinedParticipations/Declined" element = {<ListDeclinedParticipationComponent/>}></Route>
                      <Route exact path = "/getPendingParticipations/Pending" element = {<ListPendingParticipationComponent/>}></Route>
                      <Route exact path = "/updateStatus/:id" element = {<AddParticipationComponent/>}></Route>
                      <Route exact path = "/addParticipation" element = {<AddParticipationComponent/>}></Route>
                </Routes>
            </div>
            <Footer/>
    </Router>
</div>
  )
}
export default App;
