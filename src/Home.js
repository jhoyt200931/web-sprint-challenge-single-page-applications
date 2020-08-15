import React from "react";
import { Link, Route } from "react-router-dom";
import Ordering from "./Ordering";
const Home = () => {

    return (
        <div>
            <h1>Welcome To John's Pizza!</h1>
            <p>Home of the best slice around!!</p>
            <Link to="/pizza">Place Your Order Here!!</Link>
            <Route path="/pizza" component={Ordering}/> 
        </div>
    )
}

export default Home;