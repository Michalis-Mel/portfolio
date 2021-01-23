import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

//import components
import About from "./About";
import Contact from "./Contact";
import Landing from "./Landing";
import Projects from "./Projects";
import Resume from "./Resume";
import NotFound from "./NotFound";

const Main = () => (
  <Switch>
    <Redirect exact from="/" to="/portfolio" />
    <Route path="/portfolio" component={Landing}></Route>
    <Route path="/about" component={About}></Route>
    <Route path="/contact" component={Contact}></Route>
    <Route path="/resume" component={Resume}></Route>
    <Route path="/projects" component={Projects}></Route>
    <Route component={NotFound} />
  </Switch>
);

export default Main;
