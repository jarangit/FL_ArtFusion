import React from "react";

const AskedQuestions = () => {
  return (
    <div className="aq">
      <h1 className="aq_title">Frequently Asked Questions</h1>

      <div className="aq_box">
        <div className="aq_box_item">
          <a href="/">What is a personal loan?</a>
          <p className="aq_box_item_content">
            A personal loan is a way for an individual to receive up to $35,000
            in funding. It is a loan that can be used for home enhancements,
            luxury item purchases, vehicle repairs or large purchases. The
            length of the loan is called the term and can range all the way up
            to 180 days, depending on the lender. Our simple online form does
            not contain any long questions. Instead, it asks for your basic
            information and a location for where you would like the loan to be
            sent to. It is that easy!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AskedQuestions;
