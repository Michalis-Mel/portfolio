import React from "react";
import { Link } from "react-router-dom";
import guy1 from "../images/guy with laptop.jpg";
import guy2 from "../images/guy with laptop2.jpg";

const About = () => {
  return (
    <div>
      <section className="info">
        <div className="introduction">
          <p>
            Hello, my name is Michalis Meliopoulos and i’m a full-stack web
            developer based in Katerini, Greece. I enjoy building everything
            from small business sites to rich interactive web apps, and with
            every line of code, i strive to give you the result you desire. I am
            currently a freelancer and i am at your disposal to anwear any
            questions you might have or if you want us to cooperate. <br />
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
            sports, gaming, TV series and food! I am 24 years old and i have a
            bachelor degree in production and management engineering (Democritus
            University of Thrace). I trully love computer science and I devoted
            2 years learning on my own several programming languages. Interested
            in the entire frontend and backend spectrum and working on ambitious
            projects with positive people.
            <br />
            You can download my resume <Link to="/">here</Link> .
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
