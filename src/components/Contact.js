import React from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

import moon from "../images/blue moon.png";

const Contact = () => {
  const handleEmailMe = () => {
    window.open("mailto:mixalismeliop@gmail.com");
  };
  return (
    <div className="contact-body">
      <Grid className="contact-grid">
        <Cell className="col-left" col={6}>
          <img className="moon-img" src={moon} alt="moon" />
          <p>
            <span>Get in Touch.</span>
            <br />I am at your disposal to anwear any questions you might have
            or if you want us to cooperate. Feel free to contact me in any way!
          </p>
        </Cell>
        <Cell className="col-right" col={6}>
          <h2>Contact Me</h2>
          <hr />
          <div className="contact-list">
            <List>
              <ListItem>
                <ListItemContent className="list-item-content">
                  <i className="fa fa-phone-square" aria-hidden="true"></i>
                  <a href="tel:+306989117005">+30-6989117005</a>
                </ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent
                  className="list-item-content "
                  onClick={handleEmailMe}
                >
                  <i className="fa fa-envelope " aria-hidden="true"></i>
                  mixalismeliop@gmail.com
                </ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent className="list-item-content">
                  <i className="fa fa-github-square" aria-hidden="true"></i>
                  <a
                    href="https://github.com/Michalis-Mel"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Profile
                  </a>
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent className="list-item-content">
                  <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                  <a
                    href="https://www.linkedin.com/in/mixalis-meliopoulos/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Linkedin Profile
                  </a>
                </ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent className="list-item-content">
                  <i className="fa fa-facebook-square" aria-hidden="true"></i>
                  <a
                    href="https://www.facebook.com/mixalis.meliopoulos/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook Profile
                  </a>
                </ListItemContent>
              </ListItem>
            </List>
          </div>
        </Cell>
      </Grid>
    </div>
  );
};

export default Contact;
