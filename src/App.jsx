import React from "react";
import { Redirect,Route,Switch } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./Navbar";
import Clients from "./Clients";
import Products from "./Products";
import Footer from "./footer";
import Address from "./Addeess";

const App =() => {
    return (
        <>
        <Navbar/>
        <Switch>
            <Route exact path="/" component ={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/clients" component={Clients}/>
            <Route exact path="/products" component={Products}/>
            <Route exact path="/address" component={Address}/>
            <Redirect to="/"></Redirect>
        </Switch>
        <Footer/>
        </>
    );
};

export default App;