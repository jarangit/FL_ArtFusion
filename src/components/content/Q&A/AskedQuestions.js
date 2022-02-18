import React, { useState } from "react";
import "./askedQuestions.css";
const AskedQuestions = () => {
  const [open, setopen] = useState(false);
  const [data_select, setdata_select] = useState("");
  function Accoding({ title, content }) {
    function onOpen(e) {
      setdata_select(e.target.id);
      setopen(!open);
    }
    return (
      <div className="aq_box_item">
        <p id={title} onClick={onOpen}>
          {title}
        </p>
        <div
          className={`aq_box_item_content ${
            open && title === data_select ? "active" : ""
          }`}
        >
          {content}
        </div>
      </div>
    );
  }
  return (
    <div className="aq">
      <h1 className="aq_title">Frequently Asked Questions</h1>

      <div className="aq_box">
        <Accoding
          title="What is a personal loan?"
          content=" A personal loan is a way for an individual to receive up to $35,000 in
          funding. It is a loan that can be used for home enhancements, luxury
          item purchases, vehicle repairs or large purchases. The length of the
          loan is called the term and can range all the way up to 180 days,
          depending on the lender. Our simple online form does not contain any
          long questions. Instead, it asks for your basic information and a
          location for where you would like the loan to be sent to. It is that
          easy!"
        />
        <Accoding
          title="What are the basic loan requirements?"
          content="Must be at least 18 years old.
          Must be a U.S. citizen or Permanent Resident.
          Currently employed or receive steady income.
          Have a bank account to receive the funds, ideally with direct deposit."
        />
        <Accoding
          title="Are there any fees?"
          content="FastLoanAdvance services will always be provided free of charge, but that is not to say that the lender will give you a loan for free. Your lender will charge you fees and/or interest and must provide you with full disclosure of their loan terms upon approval. It is then your responsibility to read through the terms before signing your loan agreement."
        />
        <Accoding
          title="What are the repayment terms and the APR?"
          content="Annual Percentage Rate (APR) is a measure of the cost of credit, expressed as a nominal yearly rate. It relates to the amount and timing of value received by the consumer to the amount and timing of payments made. FastLoanAdvance cannot guarantee any APR since we are not a lender ourselves. Annual Percentage Rates (APR) start from 5.99% up to a maximum of 35.99%. Personal loans have a 61-day minimum repayment period and a 72-month maximum repayment period. Before accepting a loan from a lender within our network, please read the loan agreement carefully as the APR and repayment terms may differ from what is listed on this site."
        />
      </div>
    </div>
  );
};

export default AskedQuestions;
