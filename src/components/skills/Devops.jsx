import React from "react";

const Devops = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Devops</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <box-icon className="skills__icon" type="logo" name="github"></box-icon>
            <h3 className="skills__name">Git</h3>
            <span className="skills__level">Advanced</span>
          </div>
          <div className="skills__data">
            <box-icon className="skills__icon" name="docker" type="logo"></box-icon>
            <h3 className="skills__name">Docker</h3>
            <span className="skills__level">Advanced</span>
          </div>
          <div className="skills__data">
            <box-icon className="skills__icon" name="kubernetes" type="logo"></box-icon>
            <h3 className="skills__name">Kubernetes</h3>
            <span className="skills__level">Intermediate</span>
          </div>
          <div className="skills__data">
            <box-icon className="skills__icon" name="aws" type="logo"></box-icon>
            <h3 className="skills__name">AWS</h3>
            <span className="skills__level">Intermediate</span>
          </div>
          <div className="skills__data">
            <box-icon className="skills__icon" name="google-cloud" type="logo"></box-icon>
            <h3 className="skills__name">GCP</h3>
            <span className="skills__level">Basic</span>
          </div>
          <div className="skills__data">
            <box-icon className="skills__icon" name="cloud-upload"></box-icon>
            <h3 className="skills__name">Cloud Infrastructure</h3>
            <span className="skills__level">Basic</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Devops;
