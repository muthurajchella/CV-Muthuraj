import React from "react";
import Profile from "../../assets/Home.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./home.css";

const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Muthuraj ChellaDuari.</span> Software Engineer
          </h1>

          <p className="home__description">
            <ul>
              <li>
                Front-End Developer with 3+ years of experience specializing in
                React.js, building scalable and high-performance web
                applications.
              </li>
              <li>
                Strong expertise in Vite, GraphQL, Redux, and Context API for
                efficient state management and optimized development workflows.
              </li>
              <li>
                Developed a fully automated, dynamic IoT admin dashboard with
                real-time data visualization, similar to Facebook’s dashboard.
              </li>
              <li>
                Prior 2 years of experience in mechanical engineering,
                contributing to a total of 5+ years of overall work experience.
              </li>
              {/* <li>
                Aspiring MERN stack developer, currently expanding skills in
                Node.js and MongoDB for full-stack proficiency.
              </li> */}
            </ul>
          </p>

          <Link to={"/about"} className="button">
            More About Me{" "}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"> </div>
    </section>
  );
};

export default Home;
