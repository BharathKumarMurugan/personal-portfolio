import React from "react";

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">FrontEnd</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <box-icon className="skills__icon" type="logo" name="html5"></box-icon>
            <h3 className="skills__name">HTML5</h3>
            <span className="skills__level">Intermediate</span>
          </div>
          <div className="skills__data">
            <box-icon className="skills__icon" type="logo" name="css3"></box-icon>
            <h3 className="skills__name">CSS3</h3>
            <span className="skills__level">Advanced</span>
          </div>
          <div className="skills__data">
            <box-icon className="skills__icon" name="typescript" type="logo"></box-icon>
            <h3 className="skills__name">Typescript</h3>
            <span className="skills__level">Intermediate</span>
          </div>
          <div className="skills__data">
            <box-icon className="skills__icon" name="react" type="logo"></box-icon>
            <h3 className="skills__name">ReactJS</h3>
            <span className="skills__level">Advanced</span>
          </div>
          <div className="skills__data">
            <box-icon className="skills__icon" name="redux" type="logo"></box-icon>
            <h3 className="skills__name">Redux</h3>
            <span className="skills__level">Intermediate</span>
          </div>
          <div className="skills__data">
            <box-icon className="skills__icon" type="logo" name="graphql"></box-icon>
            <h3 className="skills__name">GraphQL</h3>
            <span className="skills__level">Intermediate</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
