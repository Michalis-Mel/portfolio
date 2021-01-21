//images
import days from "../../images/projects/days.jpg";
import coloors from "../../images/projects/Coloors.jpg";
import beatmaker from "../../images/projects/beatmaker.jpg";
import employee from "../../images/projects/employee.jpg";
import form from "../../images/projects/form.jpg";
import hangman from "../../images/projects/hangman.jpg";
import ignite from "../../images/projects/ignite.jpg";
import Photon from "../../images/projects/Photon.jpg";
import waves from "../../images/projects/waves.jpg";
import portfolio from "../../images/projects/portfolio.jpg";
import database from "../../images/projects/database.png";
import books from "../../images/projects/books.jpg";
import capture from "../../images/projects/capture.jpg";

const data_projects = [
  {
    id: 1,
    name: "Interactive Form",
    image: form,
    description:
      "An interactive registration form for a fictional conference called FullStack Conf.",
    deployed_url: "https://michalis-mel.github.io/TechDegree-Project-3/",
    github_url: "https://github.com/Michalis-Mel/TechDegree-Project-3",
    category: ["JavaScript"],
  },

  {
    id: 2,
    name: "HangMan Game",
    image: hangman,
    description: "A game app made with Object Oriented Programming",
    deployed_url: "https://michalis-mel.github.io/TechDegree-Project-4/",
    github_url: "https://github.com/Michalis-Mel/TechDegree-Project-4",
    category: ["JavaScript"],
  },

  {
    id: 3,
    name: "Public Api Request",
    image: employee,
    description:
      "An app for a fictional company called Awesome Startup, which request 12 employees  from an API and renders them.",
    deployed_url: "https://michalis-mel.github.io/TechDegree-Project-5/",
    github_url: "https://github.com/Michalis-Mel/TechDegree-Project-5",
    category: ["JavaScript"],
  },

  {
    id: 4,
    name: "Portfolio",
    image: portfolio,
    description:
      "A Portfolio made with JavaScript, Static Node.js, Express framework and pug templates",
    deployed_url: "",
    github_url: "https://github.com/Michalis-Mel/TechDegree-Project-6",
    category: ["JavaScript", "Express"],
  },

  {
    id: 5,
    name: "Photon",
    image: Photon,
    description:
      "An image gallery which takes the pictures from an API(with axios) and renders them with react",
    deployed_url: "https://michalis-mel.github.io/TechDegree-Project-7-React/",
    github_url:
      "https://github.com/Michalis-Mel/TechDegree-Project-7-React/tree/gh-pages",
    category: ["React"],
  },

  {
    id: 6,
    name: "SQL Library Manager",
    image: books,
    description:
      "An application that  list, add, update, and delete books using JavaScript, Node.js, Express, Pug, and SQL ORM Sequelize.",
    deployed_url: "",
    github_url: "https://github.com/Michalis-Mel/TechDegree-Project-8",
    category: ["JavaScript", "Express", "SQL"],
  },
  {
    id: 7,
    name: "School Database Manager",
    image: database,
    description:
      "A Full Stack App with Rest API to provide a way for users to administer a school database with information about courses. ",
    deployed_url: "",
    github_url: "https://github.com/Michalis-Mel/TechDegree-Project-10",
    category: ["React"],
  },
  {
    id: 8,
    name: "Capture",
    image: capture,
    description: "Capture is a demo website for a fictional company",
    deployed_url: "",
    github_url: "https://github.com/Michalis-Mel/react-business-website",
    category: ["React"],
  },
  {
    id: 9,
    name: "BeatMaker",
    image: beatmaker,
    description: "BeatMaker is a colorfull app that let you create music.",
    deployed_url: "https://michalis-mel.github.io/BeatMaker/",
    github_url: "https://github.com/Michalis-Mel/BeatMaker",
    category: ["JavaScript"],
  },
  {
    id: 10,
    name: "Ignite",
    image: ignite,
    description: "Ignite is a website which has to do with pc/ps/xbox games",
    deployed_url: "https://michalis-mel.github.io/ignite-movies-redux/#/",
    github_url: "https://github.com/Michalis-Mel/ignite-movies-redux",
    category: ["React", "Redux"],
  },
  {
    id: 11,
    name: "COLOORS",
    image: coloors,
    description: "COLOORS is a website that let you pick a color palette",
    deployed_url: "https://michalis-mel.github.io/COLOORS/",
    github_url: "https://github.com/Michalis-Mel/COLOORS",
    category: ["JavaScript"],
  },
  {
    id: 12,
    name: "days.",
    image: days,
    description: "Travel-Project is a a dynamic sample website",
    deployed_url: "https://michalis-mel.github.io/Travel-Project/",
    github_url: "https://github.com/Michalis-Mel/Travel-Project",
    category: ["JavaScript"],
  },
  {
    id: 13,
    name: "Waves",
    image: waves,
    description: "Waves is a music player website",
    deployed_url: "https://michalis-mel.github.io/waves-music-player/",
    github_url: "https://github.com/Michalis-Mel/waves-music-player",
    category: ["React"],
  },
];

export default data_projects;
