import BGPH1 from "../../../assets/images/backgrounds/page-header-bg-1-1.jpg";
import BGS1 from "../../../assets/images/services/service-s-1-1.png";
import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Img15 from "../../../assets/images/cdp/img15.jpg";
import Img3 from "../../../assets/images/cdp/img3.png";
import Img21 from "../../../assets/images/cdp/img21.png";
import Img2 from "../../../assets/images/cdp/img2.png";
import Img4 from "../../../assets/images/cdp/img4.png";
import Img18 from "../../../assets/images/cdp/img18.png";
import Img19 from "../../../assets/images/cdp/img19.png";
import Img20 from "../../../assets/images/cdp/img20.png";

const ServiceDetails = () => {
  const [clicked, setClicked] = useState(0);
  const { id } = useParams();
  const [loan, setLoan] = useState(id);
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

  const faqs = [
    {
      question: "Nunc dui massa, porttitor id erat et",
      answer:
        "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable. Phasellus a rhoncus erat.",
    },
    {
      question: "Quisque quis urna consequat, scelerisque",
      answer:
        "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable. Phasellus a rhoncus erat.",
    },
    {
      question: "Mauris a ipsum id libero sodales dapibus",
      answer:
        "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable. Phasellus a rhoncus erat.There are many variations of passages of available but the majority have suffered alteration that some form by injected randomised words which don’t look even as slightly believable now. Phasellus mollis ac augue sed varius. ",
    },
    {
      question: "Nunc dui massa, porttitor id erat et",
      answer:
        "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable. Phasellus a rhoncus erat.",
    },
  ];

  const getOneData = LoanData.filter((data) => data.id == loan);
  return (
    <>
      <div className="stricky-header stricked-menu main-menu">
        <div className="sticky-header__content"></div>
      </div>
      <section className="page-header">
        <img className="page-header__bg" src={Img15}></img>
        {getOneData.map((data) => (
          <>
            <div className="container">
              <ul className="thm-breadcrumb list-unstyled">
                <li>
                  <Link to="index.html">Home</Link>
                </li>
                <li>
                  <span>{data.headcontent}</span>
                </li>
              </ul>
              <h2>{data.headcontent}</h2>
            </div>
          </>
        ))}
      </section>
      <section className="service-details pt-120 pb-120">
        <div className="container">
          <div className="row row-gutter-y-30">
            <div className="col-lg-4">
              <div className="service-sidebar">
                <div className="service-sidebar__item service-sidebar__item--menu">
                  <ul className="service-sidebar__menu">
                    <li
                      className={loan == 'car-loan' ? "active" : ""}
                      onClick={() => setLoan('car-loan')}
                    >
                      <Link to="#">Auto Car Loan</Link>
                    </li>
                    <li
                      className={loan == 'wedding-loan' ? "active" : ""}
                      onClick={() => setLoan('wedding-loan')}
                    >
                      <Link to="#">Wedding Loan</Link>
                    </li>
                    <li
                      className={loan == 'property-loan' ? "active" : ""}
                      onClick={() => setLoan('property-loan')}
                    >
                      <Link to="#">Property Loan</Link>
                    </li>
                    <li
                      className={loan == 'business-loan' ? "active" : ""}
                      onClick={() => setLoan('business-loan')}
                    >
                      <Link to="#">Business Loan</Link>
                    </li>
                    <li
                      className={loan == 'education-loan' ? "active" : ""}
                      onClick={() => setLoan('education-loan')}
                    >
                      <Link to="#">Education Loan</Link>
                    </li>
                    <li
                      className={loan == 'personal-loan' ? "active" : ""}
                      onClick={() => setLoan('personal-loan')}
                    >
                      <Link to="#">Personal Loan</Link>
                    </li>
                  </ul>
                </div>
                <div className="service-sidebar__item service-sidebar__item--contact">
                  <img className="service-sidebar__bg" src={Img3}></img>
                  <div className="service-sidebar__contact">
                    <div className="service-sidebar__icon">
                      <i className="icon-phone-ringing"></i>
                    </div>
                    <h3 className="service-sidebar__title">
                      Quick loan proccess
                    </h3>
                    <hr className="service-sidebar__separator" />
                    <p className="service-sidebar__tagline">
                      Talk to an expert
                    </p>
                    <Link
                      to="tel:+1-(246)333-0089"
                      className="service-sidebar__phone"
                    >
                      + 1- (246) 333-0089
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {getOneData.map((data) => (
              <>
                <div className="col-lg-8">
                  <div className="service-details__image">
                    <img src={data.image} style={{ width: "100%" }} alt="" />
                    <div className="service-details__icon">
                      <i className={data.icon}></i>
                    </div>
                  </div>
                  <div className="service-details__content">
                    <h3 className="service-details__title">
                      {data.headcontent}
                    </h3>
                    <p>
                      Lorem ipsum is simply free text used by copytyping
                      refreshing. Neque porro est qui dolorem ipsum quia quaed
                      inventore veritatis et quasi architecto beatae vitae dicta
                      sunt explicabo. Aelltes port lacus quis enim var sed
                      efficitur turpis gilla sed sit amet finibus eros. Lorem
                      Ipsum is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the ndustry standard dummy
                      text ever since the 1500s.
                    </p>
                    <p>
                      It has survived not only five centuries. Lorem Ipsum is
                      simply dummy text of the new design printng and type
                      setting Ipsum take a look at our round. When an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting.
                    </p>
                    <div className="row row-gutter-y-30">
                      <div className="col-md-6">
                        <img src={data.image} alt="" />
                      </div>
                      <div className="col-md-6">
                        <h3 className="service-details__subtitle">
                          Loan benefits
                        </h3>
                        <p className="service-details__text">
                          Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum.
                        </p>
                        <ul className="list-unstyled ml-0 service-details__list">
                          <li>
                            <i className="fa fa-check-circle"></i>
                            Refresing to get such a personal touch.
                          </li>
                          <li>
                            <i className="fa fa-check-circle"></i>
                            Duis aute irure dolor in in voluptate.
                          </li>
                          <li>
                            <i className="fa fa-check-circle"></i>
                            Velit esse cillum eu fugiat pariatur.
                          </li>
                          <li>
                            <i className="fa fa-check-circle"></i>
                            Duis aute irure dolor in in voluptate.
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="service-calculation">
                      <Link
                        to="/applynow"
                        className="thm-btn"
                        // target="_blank"
                        // rel="nofollow"
                      >
                        Apply For Loan
                      </Link>
                    </div>
                    {/* <div className="row">
                  <div className="col-md-12">
                    <div
                      className="accrodion-grp service-details__accrodion"
                      data-grp-name="service-details__accrodion-1"
                    >
                      {faqs.map((item, index) => (
                        <div
                          className={`accrodion  wow fadeInUp ${
                            index === clicked && "active"
                          }`}
                          key={index}
                          data-wow-delay="0ms"
                        >
                          <div
                            className="accrodion-title"
                            onClick={() => setClicked(index)}
                          >
                            <h4>{item.question}</h4>
                            <span className="accrodion-icon"></span>
                          </div>
                          {index === clicked && (
                            <div className="accrodion-content">
                              <div className="inner">
                                <p>{item.answer}</p>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div> */}
                  </div>
                </div>
              </>
            ))}
            {/* <div className="col-lg-8">
              <div className="service-details__image">
                <img src={Img21} alt="" />
                <div className="service-details__icon">
                  <i className="icon-diamond"></i>
                </div>
              </div>
              <div className="service-details__content">
                <h3 className="service-details__title">{id}</h3>
                <p>
                  Lorem ipsum is simply free text used by copytyping refreshing.
                  Neque porro est qui dolorem ipsum quia quaed inventore
                  veritatis et quasi architecto beatae vitae dicta sunt
                  explicabo. Aelltes port lacus quis enim var sed efficitur
                  turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the ndustry standard dummy text ever since the
                  1500s.
                </p>
                <p>
                  It has survived not only five centuries. Lorem Ipsum is simply
                  dummy text of the new design printng and type setting Ipsum
                  take a look at our round. When an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting.
                </p>
                <div className="row row-gutter-y-30">
                  <div className="col-md-6">
                    <img src={Img3} alt="" />
                  </div>
                  <div className="col-md-6">
                    <h3 className="service-details__subtitle">
                      Service benefits
                    </h3>
                    <p className="service-details__text">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum.
                    </p>
                    <ul className="list-unstyled ml-0 service-details__list">
                      <li>
                        <i className="fa fa-check-circle"></i>
                        Refresing to get such a personal touch.
                      </li>
                      <li>
                        <i className="fa fa-check-circle"></i>
                        Duis aute irure dolor in in voluptate.
                      </li>
                      <li>
                        <i className="fa fa-check-circle"></i>
                        Velit esse cillum eu fugiat pariatur.
                      </li>
                      <li>
                        <i className="fa fa-check-circle"></i>
                        Duis aute irure dolor in in voluptate.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="service-calculation">
                  <Link
                    to="/applynow"
                    className="thm-btn"
                    target="_blank"
                    rel="nofollow"
                  >
                    Apply For Loan
                  </Link>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div
                      className="accrodion-grp service-details__accrodion"
                      data-grp-name="service-details__accrodion-1"
                    >
                      {faqs.map((item, index) => (
                        <div
                          className={`accrodion  wow fadeInUp ${
                            index === clicked && "active"
                          }`}
                          key={index}
                          data-wow-delay="0ms"
                        >
                          <div
                            className="accrodion-title"
                            onClick={() => setClicked(index)}
                          >
                            <h4>{item.question}</h4>
                            <span className="accrodion-icon"></span>
                          </div>
                          {index === clicked && (
                            <div className="accrodion-content">
                              <div className="inner">
                                <p>{item.answer}</p>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
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

export default ServiceDetails;
