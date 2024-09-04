import "./about.css";
import AboutImg from "../../assets/about.jpg";
import CV from "../../assets/John-Cv.pdf";
import Info from "./Info";

function About() {
  return (
    <section className="about section" id="about">
        <h2 className="section__title">
            About Me
        </h2>
        <span className="section__subtitle">
            My Introduction
        </span>
        <div className="container about__container grid">
            <img src={AboutImg} alt="about" className="about__img" />

            <div className="about__data">
              <Info />

              <p className="about__description">
                Frontend developer, I create web pages with UI / UX user interface, I have years of experience and many clients are happy with the projects carried out.
              </p>

              <a href={CV} className="button button__flex">
                Download CV
              <svg
              class="button__icon"
              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18.948 11.112C18.511 7.67 15.563 5 12.004 5c-2.756 0-5.15 1.611-6.243 4.15-2.148.642-3.757 2.67-3.757 4.85 0 2.757 2.243 5 5 5h1v-2h-1c-1.654 0-3-1.346-3-3 0-1.404 1.199-2.757 2.673-3.016l.581-.102.192-.558C8.153 8.273 9.898 7 12.004 7c2.757 0 5 2.243 5 5v1h1c1.103 0 2 .897 2 2s-.897 2-2 2h-2v2h2c2.206 0 4-1.794 4-4a4.008 4.008 0 0 0-3.056-3.888z" fill="var(--container-color)"></path><path d="M13.004 14v-4h-2v4h-3l4 5 4-5z" fill="var(--container-color)"></path></svg>
              </a>
            </div>
        </div>
    </section>
  )
}

export default About