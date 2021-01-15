import { Layout, Header, Navigation, Content } from "react-mdl";
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
              <Link to="/portfolio">
                <img className="logo" src={logo} alt="logo" />
              </Link>
            }
            scroll
          >
            <Navigation>
              <Link className="link" to="/portfolio/resume">
                Resume
              </Link>
              <Link className="link" to="/portfolio/about">
                About Me
              </Link>
              <Link className="link" to="/portfolio/projects">
                Projects
              </Link>
              <Link className="link" to="/portfolio/contact">
                Contact
              </Link>
            </Navigation>
          </Header>

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
