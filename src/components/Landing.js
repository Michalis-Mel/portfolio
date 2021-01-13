import React from "react";
import { Cell, Grid } from "react-mdl";
import me from "../images/me.jpg";

const Landing = () => {
  return (
    <div className="landing-container">
      <Grid className="landing-grid">
        <Cell className="animation" col={12}>
          <img src={me} alt="me" className="me-img" />
          <div className="banner-text">
            <h1>Full Stack Web Developer</h1>
            <hr />
            <p>
              <span>HTML/CSS/Sass</span> | <span>Bootstrap </span> |
              <span>JavaScript</span> |<span>NodeJS</span> |
              <span> Express </span> |<span>React</span> |<span>Redux</span> |
              <span>Sequalize</span>
            </p>

            <div className="social-links">
              {/* Github Link */}
              <a
                href="https://github.com/Michalis-Mel"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github-square" aria-hidden="true" />
              </a>
              {/* Linkeding Link */}
              <a
                href="https://www.linkedin.com/in/mixalis-meliopoulos/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-linkedin-square" aria-hidden="true" />
              </a>
              {/* Facebook Link */}
              <a
                href="https://www.facebook.com/mixalis.meliopoulos/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-facebook-square" aria-hidden="true" />
              </a>
            </div>
          </div>
        </Cell>
      </Grid>
    </div>
  );
};

export default Landing;
