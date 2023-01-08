import BGPH1 from "../../../assets/images/backgrounds/page-header-bg-1-1.jpg";
import { Link } from "react-router-dom";
import React from "react";
import { useState, useEffect, useRef } from "react";
const MonthlyLoan = () => {
  const [loanMoney, setLoanMoney] = useState(16000);
  const [loanMonth, setLoanMonth] = useState(8);
  const [interestRate, setInterestRate] = useState(15);

  const [Money, setMoney] = useState(0);
  const [Month, setMonth] = useState(0);
  const countRange = useRef();
  useEffect(() => {
    if (loanMoney > 0 && loanMonth > 0) {
      emiCalculate();
    }
  }, [loanMoney, loanMonth]);

  const emiCalculate = () => {
    const interestRatePercent = parseInt(interestRate, 10) / 100;
    const totalPay = loanMoney * interestRatePercent + parseInt(loanMoney, 10);
    const monthlyPay = totalPay / parseInt(loanMonth, 10);

    setMoney(parseInt(monthlyPay, 10));
    setMonth(parseInt(totalPay, 10));
  };

  return (
    <>
      <div className="stricky-header stricked-menu main-menu">
        <div className="sticky-header__content"></div>
      </div>
      <section className="page-header">
        <div
          className="page-header__bg"
          style={{ backgroundImage: `url(${BGPH1})` }}
        ></div>
        <div className="container">
          <ul className="thm-breadcrumb list-unstyled">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <span>Loan Calculator</span>
            </li>
          </ul>
          <h2>Loan Calculator</h2>
        </div>
      </section>
      <section className="loan-calculator pt-120 mb--190">
        <div className="container">
          <div className="loan-calculator__top">
            <div className="row">
              <div className="col-md-6">
                <div className="block-title text-left">
                  <p className="block-title__tagline">calculate your rate</p>
                  <h2 className="block-title__title">
                    How much do you need loan for you?
                  </h2>
                </div>
              </div>
              <div className="col-md-6">
                <p className="loan-calculator__top__text">
                  Nullam vel nibh facilisis lectus fermentum ultrices quis non
                  risus. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. In hac habitasse platea dictumst.
                </p>
              </div>
            </div>
          </div>

          <div className="loan-calculator__box">
            <div className="row row-gutter-x-0">
              <div className="col-lg-6">
                <form
                  className="loan-calculator__form"
                  action="contact.html"
                  id="loan-calculator"
                  data-interest-rate="15"
                >
                  <div className="input-box__top">
                    <span>$10000</span>
                    <span>$500000</span>
                  </div>

                  <div class="input-box">
                    <div
                      class="range-slider-count"
                      id="range-slider-count"
                      ref={countRange}
                    ></div>
                    <div>
                      <input
                        style={{ color: "orange-50" }}
                        className="w-100 slider"
                        type="range"
                        id="volume"
                        min="0"
                        max="40000"
                        onChange={(e) => {
                          setLoanMoney(e.target.value);
                          console.log(e);
                        }}
                      />
                      <h6> ${loanMoney} </h6>
                    </div>
                    <input
                      type="hidden"
                      value=""
                      id="min-value-rangeslider-count"
                    />
                    <input
                      type="hidden"
                      value=""
                      id="max-value-rangeslider-count"
                    />
                  </div>
                  <div className="input-box__top">
                    <span>1 Month</span>
                    <span>12 Months</span>
                  </div>
                  <input
                    style={{ color: "orange-50" }}
                    className="w-100 slider"
                    type="range"
                    id="volume"
                    min="1"
                    max="12"
                    value={loanMonth}
                    onChange={(e) => {
                      setLoanMonth(e.target.value);
                      console.log(e);
                    }}
                  />
                  <h6>{loanMonth} Months</h6>
                  <div className="input-box">
                    <div
                      className="range-slider-month"
                      id="range-slider-month"
                    ></div>
                    <input
                      type="hidden"
                      value=""
                      id="min-value-rangeslider-month"
                    />
                    <input
                      type="hidden"
                      value={loanMonth}
                      id="max-value-rangeslider-month"
                    />
                  </div>
                  <p>
                    <span>Pay Monthly</span>
                    <b>
                      $<i id="loan-monthly-pay">{Money}</i>
                    </b>
                  </p>
                  <p>
                    <span>Term of Use</span>
                    <b>
                      <i id="loan-month">{loanMonth}</i> Months
                    </b>
                  </p>
                  <p>
                    <span>Total Pay Back</span>
                    <b>
                      $<i id="loan-total">{Month}</i>
                    </b>
                  </p>
                  <Link to="/applynow" className="thm-btn thm-btn--dark-hover">
                    Apply For Loan
                  </Link>

                  <div className="loan-calculator__form__terms">
                    *These calculators are provided only as general self-help
                    Planning Tools. Results depend on other factors.
                  </div>
                </form>
              </div>
              <div className="col-lg-6">
                <div className="loan-calculator__image">
                  <img
                    src="assets/images/resources/loan-calculator-1-1.png"
                    alt=""
                  />
                  <div
                    className="loan-calculator__image__caption wow fadeInUp"
                    data-wow-duration="1500ms"
                  >
                    <div className="loan-calculator__image__caption__inner">
                      <h3 className="loan-calculator__image__title">
                        98<span>%</span>
                      </h3>
                      <p className="loan-calculator__image__text">
                        Satisfied Customers
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="faq-form pt-310 pb-120">
        <div className="container">
          <div className="block-title text-center">
            <p className="block-title__tagline">contact</p>
            <h2 className="block-title__title">
              Feel free to get in touch <br /> with our team
            </h2>
          </div>
          <form
            action="assets/sendemail.php"
            className="form-one contact-form-validated"
          >
            <div className="row row-gutter-y-20 row-gutter-x-20">
              <div className="col-md-6">
                <input type="text" placeholder="Full name" name="name" />
              </div>
              <div className="col-md-6">
                <input type="email" placeholder="Email address" name="email" />
              </div>
              <div className="col-md-6">
                <input type="text" placeholder="Phone number" name="phone" />
              </div>
              <div className="col-md-6">
                <input type="text" placeholder="Subject" name="subject" />
              </div>
              <div className="col-md-12">
                <textarea placeholder="Message" name="message"></textarea>
              </div>
              <div className="col-md-12 text-center">
                <button type="submit" className="thm-btn">
                  Send a Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
      <Link
        to="#"
        data-target="html"
        className="scroll-to-target scroll-to-top"
      >
        <i className="fa fa-angle-up"></i>
      </Link>
    </>
  );
};

export default MonthlyLoan;
