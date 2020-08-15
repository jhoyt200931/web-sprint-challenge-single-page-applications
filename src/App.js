import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Ordering from "./Ordering";
const App = () => {
  return (
    <div>
      <h1>John's Pizza</h1>
      <p>The Best NY Style Slice Around!!!</p>
      <Link to="/">Home</Link>
      <Link to="/ordering">Place order</Link>
    <Switch>
      <Route path="/ordering" component={Ordering}/>
      <Route path="/" component={Home}/>
    </Switch>
    </div>

  );
};
export default App;
