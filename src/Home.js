import React from "react";
import { Link, Route } from "react-router-dom";
import Ordering from "./Ordering";
import styled from "styled-components";

const Container = styled.div`
width: 100%;
height: 500px;
`;
const Greet = styled.h1`
margin-left: 40%;
`;
const Describe = styled.p`
margin-left: 40%;
`;
const Order = styled.div`
margin-left: 40%;
`;

const Home = () => {

    return (
        <Container>
            <Greet>Welcome To John's Pizza!</Greet>
            <Describe>Home of the best slice around!!</Describe>
            <Order>
                <Link to="/pizza">Place Your Order Here!!</Link>
                <Route path="/pizza" component={Ordering}/> 
            </Order>
        </Container>
    )
}

export default Home;