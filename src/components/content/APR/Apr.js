import React from "react";
import "./apr.css";
const Apr = () => {
  return (
    <div className="apr">
      <div className="apr_title">
        <h4 className="apr_small_title">Representative Example</h4>
        <h1 className="apr_big_title">
          APR, Total Loan Costs & All Applicable Fees
        </h1>
      </div>
      <div className="teble_resp">
        <table id="customers">
          <tbody>
            <tr className="text-center">
              <td className="table-titles">Loan Amount</td>
              <td>$1,000</td>
              <td>$2,000</td>
              <td>$5,000</td>
              <td>$10,000</td>
            </tr>
            <tr className="text-center">
              <td className="table-titles">Interest Rate</td>
              <td>24%</td>
              <td>19%</td>
              <td>13%</td>
              <td>8%</td>
            </tr>
            <tr className="text-center">
              <td className="table-titles">Loan Term</td>
              <td>12 Months</td>
              <td>24 Months</td>
              <td>48 Months</td>
              <td>60 Months</td>
            </tr>
            <tr className="text-center">
              <td className="table-titles">Fee</td>
              <td>3%</td>
              <td>5%</td>
              <td>8%</td>
              <td>10%</td>
            </tr>
            <tr className="text-center">
              <td className="table-titles">Fee Cost</td>
              <td>$30</td>
              <td>$100</td>
              <td>$400</td>
              <td>$1,000</td>
            </tr>
            <tr className="text-center">
              <td className="table-titles">Repayment</td>
              <td>$94.56</td>
              <td>$100.82</td>
              <td>$131.67</td>
              <td>$202.28</td>
            </tr>
            <tr className="text-center">
              <td className="table-titles">APR</td>
              <td>29.82%</td>
              <td>24.12%</td>
              <td>18.23%</td>
              <td>9.20%</td>
            </tr>
            <tr className="text-center">
              <td className="table-titles">Total Payments</td>
              <td>$1,134.72</td>
              <td>$2,419.68</td>
              <td>$6,320.12</td>
              <td>$12,136.80</td>
            </tr>
            <tr className="text-center">
              <td className="table-titles">Total Costs</td>
              <td>$164.72</td>
              <td>$519.68</td>
              <td>$1,720.12</td>
              <td>$3,136.80</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Apr;
