import React from "react";
import { Grid, Cell } from "react-mdl";

//import image
import me from "../images/me.jpg";
import army from "../images/army.jpg";

//import resume
import resume from "./data/resume.pdf";

//import components
import Education from "./resume_components/Education";
import Experience from "./resume_components/Experience";
import Skills from "./resume_components/Skills";
import Footer from "./Footer";

//import data
import education from "./data/education";
import experience from "./data/experience";
const Resume = () => {
  return (
    <div className="Resume">
      <Grid>
        <Cell className="resume-left-col" col={4}>
          <div className="resumeInfo">
            <div className="img">
              <img src={me} alt="" />
            </div>
            <h2>Michalis Meliopoulos</h2>
            <h4>Full Stack Web Developer</h4>
            <hr className="hr1" />
            <h5>Nationality</h5>
            <p>Greek</p>
            <hr className="hr2" />
            <h5>Date of Birth</h5>
            <p>01/02/1996</p>
            <hr className="hr3" />
            <h5>Address</h5>
            <p>25hs Martiou, Katerini, Greece</p>
            <hr className="hr4" />
            <h5>My Website</h5>
            <a
              href="https://michalis-mel.github.io/portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://michalis-mel.github.io/portfolio
            </a>
            <hr className="hr5" />
            <p>
              You can download my resume {""}
              <a href={resume} download="resume.pdf">
                here.
              </a>
            </p>
          </div>
        </Cell>
        <Cell col={1} />
        <Cell className="resume-right-col" col={7}>
          <h2>Education</h2>

          {education.map((place) => (
            <Education
              school={place.school}
              description={place.description}
              link={place.link}
              grade={place.grade}
              year={place.year}
              key={place.id}
            />
          ))}

          <hr />

          <h2>Work Experience</h2>

          {experience.map((place) => (
            <Experience
              place={place.place}
              title={place.title}
              year={place.year}
              key={place.id}
            />
          ))}

          <hr />

          <h2>Skills</h2>
          <Skills skill="JavaScript" progress={90} />
          <Skills skill="HTML/CSS/Sass" progress={80} />
          <Skills skill="Git/GitHub" progress={80} />
          <Skills skill="React" progress={80} />
          <Skills skill="Responsive Web Design" progress={70} />

          <Skills skill="Redux" progress={60} />
          <Skills skill="NodeJS" progress={60} />
          <Skills skill="Express" progress={60} />
          <Skills skill="MySql/Sequalize Orm" progress={50} />
          <Skills skill="WordPress" progress={50} />
          <hr />

          <h2>Military Service</h2>
          <p>
            I served as a corporal in the 647th Motorized Infantry Battalion in
            Litochoro, Pieria, Greece from 10-10-2019 to 10-7-2020 and I have
            been awarded with the honorary diploma, for participating in the
            efforts of the Greek army to repel the flows of illegal immigrants
            at the borders of Evros.
          </p>
          <div className="img">
            <img src={army} alt="army" />
          </div>
        </Cell>
      </Grid>
      <Footer />
    </div>
  );
};

export default Resume;
