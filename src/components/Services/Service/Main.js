import BGPH1 from "../../../assets/images/backgrounds/page-header-bg-1-1.jpg";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import Img15 from "../../../assets/images/cdp/img15.jpg";
import Img2 from "../../../assets/images/cdp/img2.png";
import Img3 from "../../../assets/images/cdp/img3.png";
import Img4 from "../../../assets/images/cdp/img4.png";
import Img18 from "../../../assets/images/cdp/img18.png";
import Img19 from "../../../assets/images/cdp/img19.png";
import Img20 from "../../../assets/images/cdp/img20.png";

const Service = () => {
  const navigate = useNavigate()
  const LoanData = [
    {
      id: 'car-loan',
      image: Img2,
      headcontent: "Auto Car Loan",
      subcontent:"Car Loan provide low interest many variations of passages of lorem ipsum have some.",
      icon:'icon-car'
    },
    {
      id: 'wedding-loan',
      image: Img3,
      headcontent: "Wedding Loan",
      subcontent:"Wedding loan can be taken to fund the expenses associated with a wedding.",
      icon:'icon-diamond'
    },
    {
      id: 'property-loan',
      image: Img4,
      headcontent: "Property Loan",
      subcontent:"A loan against property is a secured loan that is against the asset pledged as collateral.",
      icon:'icon-loan'
    },
    {
      id: 'business-loan',
      image: Img18,
      headcontent: "Business Loan",
      subcontent:"A business loan is a loan specifically intended for business purposes.",
      icon:'icon-bank'
    },
    {
      id: 'education-loan',
      image: Img19,
      headcontent: "Education Loan",
      subcontent:"An education loan is a sum of money borrowed to finance post-secondary education",
      icon:'icon-education'
    },
    {
      id: 'personal-loan',
      image: Img20,
      headcontent: "Personal Loan",
      subcontent:"A personal loan is an amount of money you can borrow to use for a variety of purposes.",
      icon:'icon-programmer'

    },
  ];

  const servicePage = (id) =>{
    navigate(`/loan/${id}`)
  }

  
  return (
    <>
      <div className="stricky-header stricked-menu main-menu">
        <div className="sticky-header__content"></div>
      </div>
      <section className="page-header">
        <img className="page-header__bg" src={Img15}></img>
        <div className="container">
          <ul className="thm-breadcrumb list-unstyled">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <span>Loans</span>
            </li>
          </ul>
          <h2>Loans</h2>
        </div>
      </section>
      <section className="service-grid pt-120 pb-140">
        <div className="container">
          <div className="row row-gutter-y-50">
            {LoanData.map((data) => (
              <>
                <div className="col-lg-4 col-md-6 col-sm-12" onClick={()=>servicePage(data.id)}>
                  <div className="service-card">
                    <div className="service-card__image">
                      <img src={data.image} alt="Auto Car Loan" />
                      {/* <Link to="/servicedetails"></Link> */}
                    </div>
                    <div className="service-card__content">
                      <div className="service-card__content__inner">
                        <div className="service-card__icon">
                          <i className={data.icon}></i>
                        </div>
                        <h3 className="service-card__title">
                        {data.headcontent}
                          {/* <Link to="/servicedetails"></Link> */}
                        </h3>
                        <p className="service-card__text">
                          {data.subcontent}
                        </p>
                        {/* <Link
                          to="/servicedetails"
                          className="service-card__link"
                        > */}
                          <i className="fa fa-angle-right"></i>
                        {/* </Link> */}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
            {/* <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="service-card">
                <div className="service-card__image">
                  <img src={Img2} alt="Auto Car Loan" />
                  <Link to="/servicedetails"></Link>
                </div>
                <div className="service-card__content">
                  <div className="service-card__content__inner">
                    <div className="service-card__icon">
                      <i className="icon-car"></i>
                    </div>
                    <h3 className="service-card__title">
                      <Link to="/servicedetails">Auto Car Loan</Link>
                    </h3>
                    <p className="service-card__text">
                      Car Loan provide low interest many variations of passages
                      of lorem ipsum have some.
                    </p>
                    <Link to="/servicedetails" className="service-card__link">
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="service-card">
                <div className="service-card__image">
                  <img src={Img3} alt="Wedding Loan" />
                  <Link to="/servicedetails"></Link>
                </div>
                <div className="service-card__content">
                  <div className="service-card__content__inner">
                    <div className="service-card__icon">
                      <i className="icon-diamond"></i>
                    </div>
                    <h3 className="service-card__title">
                      <Link to="/servicedetails">Wedding Loan</Link>
                    </h3>
                    <p className="service-card__text">
                      Car Loan provide low interest many variations of passages
                      of lorem ipsum have some.
                    </p>
                    <Link to="/servicedetails" className="service-card__link">
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="service-card">
                <div className="service-card__image">
                  <img src={Img4} alt="Property Loan" />
                  <Link to="/servicedetails"></Link>
                </div>
                <div className="service-card__content">
                  <div className="service-card__content__inner">
                    <div className="service-card__icon">
                      <i className="icon-house"></i>
                    </div>
                    <h3 className="service-card__title">
                      <Link to="/servicedetails">Property Loan</Link>
                    </h3>
                    <p className="service-card__text">
                      Car Loan provide low interest many variations of passages
                      of lorem ipsum have some.
                    </p>
                    <Link to="/servicedetails" className="service-card__link">
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="service-card">
                <div className="service-card__image">
                  <img src={Img18} alt="Business Loan" />
                  <Link to="/servicedetails"></Link>
                </div>
                <div className="service-card__content">
                  <div className="service-card__content__inner">
                    <div className="service-card__icon">
                      <i className="icon-briefcase"></i>
                    </div>
                    <h3 className="service-card__title">
                      <Link to="/servicedetails">Business Loan</Link>
                    </h3>
                    <p className="service-card__text">
                      Car Loan provide low interest many variations of passages
                      of lorem ipsum have some.
                    </p>
                    <Link to="/servicedetails" className="service-card__link">
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="service-card">
                <div className="service-card__image">
                  <img src={Img19} alt="Education Loan" />
                  <Link to="/servicedetails"></Link>
                </div>
                <div className="service-card__content">
                  <div className="service-card__content__inner">
                    <div className="service-card__icon">
                      <i className="icon-book"></i>
                    </div>
                    <h3 className="service-card__title">
                      <Link to="/servicedetails">Education Loan</Link>
                    </h3>
                    <p className="service-card__text">
                      Car Loan provide low interest many variations of passages
                      of lorem ipsum have some.
                    </p>
                    <Link to="/servicedetails" className="service-card__link">
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="service-card">
                <div className="service-card__image">
                  <img src={Img20} alt="Personal Loan" />
                  <Link to="/servicedetails"></Link>
                </div>
                <div className="service-card__content">
                  <div className="service-card__content__inner">
                    <div className="service-card__icon">
                      <i className="icon-user"></i>
                    </div>
                    <h3 className="service-card__title">
                      <Link to="/servicedetails">Personal Loan</Link>
                    </h3>
                    <p className="service-card__text">
                      Car Loan provide low interest many variations of passages
                      of lorem ipsum have some.
                    </p>
                    <Link to="/servicedetails" className="service-card__link">
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
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

export default Service;
