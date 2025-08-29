import whereItsAt from "../assets/images/where-its-at.jpg";
import movieDatabase from "../assets/images/my-movie-database.jpg";
import bonzaiHotel from "../assets/images/bonzai.jpg";
import nodeExam from "../assets/images/node-exam.jpg";

export const projects = [
  {
    title: "Where It's @",
    description: "A React-based ticket app for local music events. Features routing, state management with Zustand, and API handling. Designed modularly with a focus on responsiveness and accessibility.",
    image: whereItsAt,
    netlify: "https://mmyrmoen-whereitsat.netlify.app/",
    github: "https://github.com/MariMyr/Where-Its-At.git"
  },
  {
    title: "My Movie Database",
    description: "A movie database app where users can search for films via the OMDB API, view detailed information, and save favorites. Built with HTML, CSS, and JavaScript with a focus on modules, API handling, events, and responsive design.",
    image: movieDatabase,
    netlify: "https://mmyrmoen-mymoviedatabase.netlify.app/",
    github: "https://github.com/MariMyr/MyMovieDatabase.git"
  },
  {
    title: "Bonz.ai",
    description: "A responsive website for a futuristic hotel concept. Built entirely with HTML and CSS (grid + flexbox) with a focus on semantic code, accessibility, and modern design.",
    image: bonzaiHotel,
    netlify: "https://bonzaihotel.netlify.app/",
    github: "https://github.com/MariMyr/bonz.ai.git"
  },
  {
    title: "Airbean Admin API",
    description: "A backend project for managing a coffee menu. Built with node.js, express.js & MongoDB. Includes protected admin endpoints (CRUD) with JWT authentication, bcrypt password encryption, error handling, and Swagger documentation.",
    image: nodeExam,
    github: "https://github.com/MariMyr/exam-nodejs.git"
  }
];
