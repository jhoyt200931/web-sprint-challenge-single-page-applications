import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Ordering from "./Ordering";
import styled from "styled-components";


const Head = styled.div`
background-color: yellow;
height: 175px;
`;
const Title = styled.h1`
margin-left: 40%;
`;
const SubTitle = styled.p`
margin-left: 40%;
`;
const Links = styled.div`
margin-left: 40%;
margin-bottom: 15px;
`;

const Body = styled.div`
background-image: url("https://images.squarespace-cdn.com/content/v1/5c48aadd506fbeeb5cde5933/1587492133403-G94LDZUTG6SIHJIUI2G9/ke17ZwdGBToddI8pDm48kP-KnnJMxcDblfBnkOICOuJ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mj0jfzTJBct9Y8e08WUVX3RJqdAm5hhGKFzHxD4xok-bsGASW1wu7YQtS8U_RRgCQ/Carryout-delivery.png?format=2500w");
background-repeat: no-repeat;
background-size: contain;
`;

const App = () => {
  return (
    <Body>
      <Head>
        <Title>John's Pizza</Title>
        <SubTitle>The Best NY Style Slice Around!!!</SubTitle>
        <Links>
          <Link to="/">Home</Link>
          <Link data-cy="order" to="/pizza">Place order</Link>
        </Links>
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
