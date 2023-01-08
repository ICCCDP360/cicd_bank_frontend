// import React from "react";
// import { useState } from "react";

// const New = (props) => {

//   const loancalculate = (principal_rate, interest_rates, loan_year) => {
//     var loanAmount = principal_rate;
//     // console.log(principal_rate)
//     var numberOfMonths = loan_year * 12;
//     var rateOfInterest = interest_rates;
//     var monthlyInterestRatio = rateOfInterest / 100 / 12;
//     var top = Math.pow(1 + monthlyInterestRatio, numberOfMonths);
//     var bottom = top - 1;
//     var sp = top / bottom;
//     var emi = loanAmount * monthlyInterestRatio * sp;
//     var full = numberOfMonths * emi;
//     var interest = full - loanAmount;
//     var int_pge = (interest / full) * 100;
//     // $("#tbl_int-pge").html(int_pge.toFixed(2) + " %");
//     // $("#tbl_loan_pge").html(100 - int_pge.toFixed(2) + " %");
//     var emi_str = emi
//       .toFixed(2)
//       .toString()
//       .replace(/,/g, "")
//       .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

//     return emi_str;
//   };

//   if (props.principalrate > 0 && props.loanyear > 0) {
//     if (props.lowInt && props.highInt) {
//       console.log(props.principalrate, props.lowInt, props.loanyear);
//       const low_emi = loancalculate(
//         props.principalrate,
//         props.lowInt,
//         props.loanyear
//       );
//       const high_emi = loancalculate(
//         props.principalrate,
//         props.highInt,
//         props.loanyear
//       );
//       const pristr = `${low_emi} - ${high_emi}`;
//       setdata(pristr)
//     } else if (!props.lowrate && props.highrate) {
//       const high_emi = loancalculate(
//         props.principalrate,
//         props.highrate,
//         props.loanyear
//       );
//       return ".calculated-emi".html(
//         'Up to $<span class="high_emi">' + high_emi + "</span>"
//       );
//     } else if (props.lowrate && !props.highrate) {
//       const low_emi = loancalculate(
//         props.principalrate,
//         props.lowrate,
//         props.loanyear
//       );
//       return ".calculated-emi".html(
//         '$<span class="low_emi">' + low_emi + "</span> Onwards"
//       );
//     }
//   }
//   return <div>{amount}</div>;
// };

// export default New;
