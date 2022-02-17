import React from "react";
import Icon from "../../lip/icon";
import './aboutSection.css'
const AboutSection = () => {
  return (
    <div className="about_section">
      <div className="about_section_logo">
        <img
          src="https://d0.awsstatic.com/logos/powered-by-aws.png"
          alt=""
          className="about_section_img"
        />
          <Icon className = "about_section_icon"/>
      </div>

      <div className="about_section_content">
        <p className="about_section_content_title">
          We use 256 bit SSL technology to encrypt your data.
        </p>
        <button type="text" className="about_section_content_button">
          DISCLOSURES
        </button>
      </div>
    </div>
  );
};

export default AboutSection;
