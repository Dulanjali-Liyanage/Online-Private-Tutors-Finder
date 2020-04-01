import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import News from "./Components/News";
import Navbar from "./Components/CustomNavBar";
import AdminLogin from "./Components/AdminLogin";
import StudentLogin from "./Components/StudentLogin";
import TutorLogin from "./Components/TutorLogin";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/news" component={News} />
        <Route path="/adminlogin" component={AdminLogin} />
        <Route path="/studentlogin" component={StudentLogin} />
        <Route path="/tutorlogin" component={TutorLogin} />
      </div>
    </Router>
  );
}

export default App;
