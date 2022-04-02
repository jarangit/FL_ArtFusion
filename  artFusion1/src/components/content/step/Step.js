import React from "react";
import './step.css'
const Step = () => {
  return (
    <div className="step">
      <div className="step_items">
        <img
          src={window.location.origin + "/step1.png"}
          alt=""
          className="step_items_img"
        />
        <div className="step_items_content">
          <h4 className="step_title">FILL OUT THE FORM</h4>
          <div className="step_text">
            Our safe & secure online form can be completed in just 5 minutes
          </div>
        </div>
      </div>
      <div className="step_items">
        <img
          src={window.location.origin + "/step2.png"}
          alt=""
          className="step_items_img"
        />
        <div className="step_items_content">
          <h4 className="step_title">GET APPROVED</h4>
          <div className="step_text">
            You can be approved by a lender in just 5 minutes
          </div>
        </div>
      </div>
      <div className="step_items">
        <img
          src={window.location.origin + "/step3.png"}
          alt=""
          className="step_items_img"
        />
        <div className="step_items_content">
          <h4 className="step_title">GET YOUR CASH</h4>
          <div className="step_text">
            Our lenders will directly deposit funds to your account as fast as
            the next business day
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step;
