import { Layout, Header, Navigation, Content, Drawer } from "react-mdl";
import { Link } from "react-router-dom";

//import styles
import "./styles/app.scss";
import logo from "./images/logo.svg";

//import components
import Main from "./components/Main";

function App() {
  const hideToggle = () => {
    const selectorId = document.querySelector(".mdl-layout");
    selectorId.MaterialLayout.toggleDrawer();
  };
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
            className="drawer"
            title={
              <Link to="/portfolio" onClick={() => hideToggle()}>
                <img className="logo" src={logo} alt="logo" />
              </Link>
            }
            scroll
          >
            <Navigation>
              <Link className="link" to="/resume" onClick={() => hideToggle()}>
                Resume
              </Link>
              <Link className="link" to="/about" onClick={() => hideToggle()}>
                About Me
              </Link>
              <Link
                className="link"
                to="/projects"
                onClick={() => hideToggle()}
              >
                Projects
              </Link>
              <Link className="link" to="/contact" onClick={() => hideToggle()}>
                Contact
              </Link>
              <button onClick={() => hideToggle()}>
                <i class="fa fa-times" aria-hidden="true"></i>
              </button>
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
