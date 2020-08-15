import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Ordering from "./Ordering";
import styled from "styled-components";


const Head = styled.div`
background-color: yellow;

`;

const Body = styled.div`
background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQjjwoiXS7Mbd6gCU8O8eN4a7r3qL7iMl7Vyg&usqp=CAU);
background-repeat: no-repeat;
background-size: cover;


`;

const App = () => {
  return (
    <Body>
      <Head>
        <h1>John's Pizza</h1>
        <p>The Best NY Style Slice Around!!!</p>
        <Link to="/">Home</Link>
        <Link data-cy="order" to="/pizza">Place order</Link>
      </Head>
      <div>
      <Switch>
        <Route path="/pizza" component={Ordering}/>
        <Route path="/" component={Home}/>
      </Switch>
      </div>
    </Body>

  );
};
export default App;
