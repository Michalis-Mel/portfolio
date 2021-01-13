import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import { Link } from "react-router-dom";

//import styles
import "./styles/app.scss";
import logo from "./images/logo.svg";

//import components
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <div className="demo-big-content">
        <Layout>
          <Header
            className="header-color"
            title={
              <Link to="/">
                <img className="logo" src={logo} alt="logo" />
              </Link>
            }
            scroll
          >
            <Navigation>
              <Link className="link" to="/resume">
                Resume
              </Link>
              <Link className="link" to="/about">
                About Me
              </Link>
              <Link className="link" to="/projects">
                Projects
              </Link>
              <Link className="link" to="/contact">
                Contact
              </Link>
            </Navigation>
          </Header>
          <Drawer
            title={
              <Link style={{ textDecoration: "none", color: "black" }} to="/">
                My Portfolio
              </Link>
            }
          >
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/about">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    </div>
  );
}

export default App;
