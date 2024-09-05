import React from "react";

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <box-icon className="skills__icon" name="nodejs" type="logo"></box-icon>
            <h3 className="skills__name">NodeJS</h3>
            <span className="skills__level">Intermediate</span>
          </div>
          <div className="skills__data">
            <box-icon className="skills__icon" name="python" type="logo"></box-icon>
            <h3 className="skills__name">Python</h3>
            <span className="skills__level">Intermediate</span>
          </div>
          <div className="skills__data">
            <box-icon className="skills__icon" name="postgresql" type="logo"></box-icon>
            <h3 className="skills__name">PostgreSQL</h3>
            <span className="skills__level">Intermediate</span>
          </div>
          <div className="skills__data">
            <box-icon className="skills__icon" name="mongodb" type="logo"></box-icon>
            <h3 className="skills__name">MongoDB</h3>
            <span className="skills__level">Intermediate</span>
          </div>
          <div className="skills__data">
            <box-icon className="skills__icon" name="data" type="solid"></box-icon>
            <h3 className="skills__name">MySQL</h3>
            <span className="skills__level">Basic</span>
          </div>
          <div className="skills__data">
            <box-icon className="skills__icon" name="network-chart" type="solid"></box-icon>
            <h3 className="skills__name">RESTful APIs</h3>
            <span className="skills__level">Intermediate</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
