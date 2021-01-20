import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";

//import components
import About from "./About";
import Contact from "./Contact";
import Landing from "./Landing";
import Projects from "./Projects";
import Resume from "./Resume";
import NotFound from "./NotFound";

const Main = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Switch>
      <Route path="/portfolio" component={Landing}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/contact" component={Contact}></Route>
      <Route path="/resume" component={Resume}></Route>
      <Route path="/projects" component={Projects}></Route>
      <Route component={NotFound} />
    </Switch>
  );
};

export default Main;
