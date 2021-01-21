import React from "react";
import { Link } from "react-router-dom";
import guy1 from "../images/guy with laptop.jpg";
import guy2 from "../images/guy with laptop2.jpg";
import Footer from "./Footer";

const About = () => {
  return (
    <div className="about">
      <section className="info info1">
        <div className="introduction">
          <p>
            Hello, my name is Michalis Meliopoulos and i am based in the
            beautiful Katerini, Greece. I amm a Full-stack web developer with an
            aptitude for the Frond-end spectrum. I enjoy building everything
            from small business sites to rich interactive web apps, and with
            every line of code, i strive to give you the result you desire. I am
            currently a freelancer aiming to become a member of a large company,
            and i am at your disposal to anwear any questions you might have or
            if you want us to cooperate. <br />
            Feel free to <Link to="/contact">contact</Link> me!
          </p>
        </div>

        <img className="text-img" src={guy1} alt="laptop-guy" />
      </section>
      <section className="moreinfo">
        <img className="text-img" src={guy2} alt="laptop-guy" />

        <div className="introduction">
          <h3>Some more information</h3>
          <p>
            Well-organised person, problem solver, independent employee with
            high attention to detail. In love with Greece and space, fan of
            sports, gaming, TV series and food! I am 25 years old and i have a
            bachelor degree in production and management engineering (Democritus
            University of Thrace). I trully love computer science and I devoted
            3 years in total as a self-taught web developer and in the end as a
            student at Team Treehouse. Interested on working with positive
            people on ambitious projects.
            <br />
            You can download my resume <Link to="/resume">here</Link> .
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
