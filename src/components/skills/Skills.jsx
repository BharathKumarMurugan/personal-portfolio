import Backend from "./Backend";
import Devops from "./Devops";
import Frontend from "./Frontend";
import "./skills.css";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">
            Skills
        </h2>
        <span className="section__subtitle">
            Technical Expertise
        </span>

        <div className="skills__container container grid">
            <Frontend />
            <Backend />
            <Devops />
        </div>
    </section>
  )
}

export default Skills