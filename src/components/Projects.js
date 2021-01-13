import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  CardText,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl";

const Projects = () => {
  const [activeTab, setActiveTab] = useState(0);

  const toggleCategories = () => {
    if (activeTab === 0) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450px", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover",
              }}
            >
              Vanilla Js project 1
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card shadow={5} style={{ minWidth: "450px", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover",
              }}
            >
              Vanilla Js project 2
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card shadow={5} style={{ minWidth: "450px", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover",
              }}
            >
              Vanilla Js project 3
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (activeTab === 1) {
      return (
        <div>
          <h1>This is React</h1>
        </div>
      );
    } else if (activeTab === 2) {
      return (
        <div>
          <h1>This is Redux</h1>
        </div>
      );
    } else if (activeTab === 3) {
      return (
        <div>
          <h1>This is Sequilize</h1>
        </div>
      );
    }
  };

  return (
    <div className="category-tabs">
      <Tabs
        activeTab={activeTab}
        onChange={(tabId) => setActiveTab(tabId)}
        ripple
      >
        <Tab>Vanilla Javascript</Tab>
        <Tab>React</Tab>
        <Tab>Redux</Tab>
        <Tab>Sequalize</Tab>
      </Tabs>

      <Grid>
        <Cell col={12}>
          <div className="content">{toggleCategories()}</div>
        </Cell>
      </Grid>
    </div>
  );
};

export default Projects;
