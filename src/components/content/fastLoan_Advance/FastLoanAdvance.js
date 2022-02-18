import React from "react";
import "./fastLoanAdvance.css";
const FastLoanAdvoce = () => {
  return (
    <div className="factor">
      <div className="factor_right">
        <div className="factor_right_title">
          <h1 className="factor_right_title_item">
            Make the Right Decision with
            <span className="factor_right_title_green"> FastLoanAdvance</span>
          </h1>
        </div>

        <div className="factor_content">
          <p className="fast_loan content item">
            FastLoanAdvance was designed to be your fast & simple money solution
            to get a loan in any situation. By providing your information in our
            secure online form, we can help get you the loan you want. We have
            extensive partnerships with large authorized lenders allowing us to
            provide our free service in almost all 50 states from the privacy of
            your own home.
          </p>
        </div>

        <button className="factor_button">GET STARTED NOW!</button>
      </div>
      <div className="factor_left">
        <img
          src="https://fastloanadvance.com/template/2764/img/decision.jpg"
          alt=""
          className="factor_left_img"
        />
      </div>
    </div>
  );
};

export default FastLoanAdvoce;
