import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer_logo">
          <h3 className="logo">FAST LOAN</h3>
        </div>

        <div className="footer_contact">
          <strong className="footer_contact_title">Contact Us.</strong>
          <ul className="footer_contact_ul">
            <li className="footer_contact_item">
              Fastloanadvance.com is powered by TPOLTECH, Inc.
            </li>
            <li className="footer_contact_item">
              Address: 25855 McBean Pkwy #61 Valencia, CA 91355{" "}
            </li>
            <li className="footer_contact_item">
              Telephone Number: (747) 204-3441
            </li>
            <li className="footer_contact_item">
              Email Address: info@fastloanadvance.com
            </li>
          </ul>
        </div>

        <hr />

        <div className="footer_contact_about">
          <p className="about_iten">
            fastloanadvance.com (the "website") is not an offer or solicitation
            to lend. The website only provides a service and is not an agent,
            representative, or broker of any lender and does not endorse or
            charge you for any loan or product. The website operators are not
            lenders, do not make loans of any type, and do not make credit
            decisions. The website collects personal information provided by you
            and forwards it to partners in our lender network. You are under no
            obligation to use this website or service to initiate, contact, nor
            apply for credit or any loan product with any service provider or
            lender.
          </p>
          <p className="about_iten">
            Loan amounts vary from $500 and $35,000 but not all lenders can
            provide up to $35,000. Providing your information on the website
            does not guarantee you will be approved for a loan or credit
            product. Cash transfer times may vary between lenders and may depend
            on your individual financial institution. In some circumstances
            faxing may be required.
          </p>
          <p className="about_iten">
            If you have any questions, contact your lender directly for details,
            questions, or concerns regarding your loan or credit product.
            Short-term cash loans are meant to provide you with short-term
            financing to solve immediate cash needs and should not be considered
            a long-term solution. This service and lenders are not available in
            all states. Lenders may perform credit checks with the three credit
            reporting bureaus: Experian, Equifax, or Trans Union or may perform
            alternative credit checks or consumer reports through alternative
            providers.
          </p>
          <p className="about_iten">
            By submitting your request, you acknowledge, agree, and authorize
            that (a) your information may be sent to lenders and/or third-party
            partners on your behalf, and (b) such lenders may obtain consumer
            reports and related information about you from one or more consumer
            reporting agencies, such as TransUnion, Experian and Equifax to
            evaluate your creditworthiness.
          </p>
          <p className="about_item">
            Copyright © 2015 - 2022 fastloanadvance.com - all rights reserved
          </p>
        </div>

        {/* <div className="footer_contact_menu">
          <div className="menu_item">
            <a href="/">Terms & Conditions</a>
            <a href="/">Lending Policy</a>
            <a href="/">Do Not Sell My Personal Information</a>
            <a href="/">Loan Information</a>
            <a href="/">Credit Authorization</a>
            <a href="/">Privacy Policy</a>
            <a href="/">Unsubscribe</a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
