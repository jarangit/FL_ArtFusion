import React from "react";
import './step.css'
const Step = () => {
  return (
    <div className="step">
      <div className="step_items">
        <img
          src="https://fastloanadvance.com/template/2764/img/form.png"
          alt=""
          className="step_items_img"
        />
        <div className="step_items_content">
          <h4 className="step_title">FILL OUT THE FORM</h4>
          <div className="p step_text">
            Our safe & secure online form can be completed in just 5 minutes
          </div>
        </div>
      </div>
      <div className="step_items">
        <img
          src="https://fastloanadvance.com/template/2764/img/approval.png"
          alt=""
          className="step_items_img"
        />
        <div className="step_items_content">
          <h4 className="step_title">GET APPROVED</h4>
          <div className="p step_text">
            You can be approved by a lender in just 5 minutes
          </div>
        </div>
      </div>
      <div className="step_items">
        <img
          src="https://fastloanadvance.com/template/2764/img/getfunds.png"
          alt=""
          className="step_items_img"
        />
        <div className="step_items_content">
          <h4 className="step_title">GET YOUR CASH</h4>
          <div className="p step_text">
            Our lenders will directly deposit funds to your account as fast as
            the next business day
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step;
