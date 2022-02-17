import React from "react";
import "./importantFactors.css";
const ImportantFactors = () => {
  return (
    <div className="factor">
      <div className="factor_left">
        <img
          src="https://fastloanadvance.com/template/2764/img/123.png"
          alt=""
          className="factor_left_img"
        />
      </div>
      <div className="factor_right">
        <div className="factor_right_title">
          <h1 className="factor_right_title_item">
            <span className="factor_right_title_green">
              3 Important Factors
            </span>
            <br />
            You Need to Know when Applying for a Loan
          </h1>
        </div>

        <div className="factor_content">
          <ul className="factor_content_ul">
            <li className="factor_content_item">
              Checking Rates Won’t Affect Your Credit
            </li>
            <li className="factor_content_item">
              APR Ranges From 5.99% up to 35.99%
            </li>
            <li className="factor_content_item">
              61 Day Minimum up to 72 Month Maximum Repayment Period
            </li>
          </ul>
        </div>

        <button className="factor_button">GET STARTED NOW!</button>
      </div>
    </div>
  );
};

export default ImportantFactors;
