import BGSLI1 from "../../assets/images/backgrounds/slider-2-1.png";
import BGSLI2 from "../../assets/images/backgrounds/slider-2-2.png";
import BGVImg1 from "../../assets/images/backgrounds/video-bg-1-1.jpg";
import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import OwlCarousel from "react-owl-carousel";
import { jarallax } from "jarallax";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Logo from "../../assets/images/cdp360.png";

const Home02 = () => {
  const [ytShow, setytShow] = useState(false);
  const activeRef = useRef(null);
  const [sticky, setSticky] = useState(false);
  const location = useLocation();
  const path = location.pathname;
  const [menu, setmenu] = useState({});
  const carouselRef = useRef();

  const activeMenu = () => {
    if (path === "/" || path === "/home-02" || path === "/home-03") {
      setmenu({ home: true });
    } else if (path === "/about") {
      setmenu({ about: true });
    } else if (path === "/service" || path === "/servicedetails") {
      setmenu({ services: true });
    } else if (
      path === "/team" ||
      path === "/teamdetails" ||
      path === "/creditaudit" ||
      path === "/creditrepair" ||
      path === "/careers" ||
      path === "/faqs" ||
      path === "/applynow"
    ) {
      setmenu({ pages: true });
    } else if (
      path === "/personalloan" ||
      path === "/loaneligibility" ||
      path === "/homeloan" ||
      path === "/homeloaneligibility" ||
      path === "/compareEMI" ||
      path === "/monthlyloan"
    ) {
      setmenu({ features: true });
    } else if (path === "/newsmain" || path === "/newsdetails") {
      setmenu({ news: true });
    } else if (path === "/contact") {
      setmenu({ contact: true });
    } else {
      setmenu({ home: true });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    const scrollTop = window.scrollY;
    scrollTop >= 250 ? setSticky(true) : setSticky(false);
  };

  useEffect(() => {
    window.scroll(0, 0);
    activeMenu();
  }, [path]);

  useEffect(() => {
    jarallax(activeRef.current, {
      speed: 0.1,
    });
  }, []);

  const sliderOptionsOne = {
    loop: true,
    items: 1,
    navText: ["", ""],
    margin: 0,
    dots: false,
    nav: true,
    animateOut: "slideOutDown",
    animateIn: "fadeIn",
    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 7000,
    autoplayHoverPause: false,
  };
  const sliderCard = {
    loop: true,
    items: 1,
    navText: ["", ""],
    margin: 30,
    dots: true,
    nav: true,
    animateOut: "slideOutDown",
    animateIn: "fadeIn",
    smartSpeed: 1000,
    autoplay: true,
    items: 1,
    smartSpeed: 700,
    responsive: {
      0: {
        margin: 0,
        items: 1,
      },
      576: {
        margin: 30,
        items: 1,
      },
      768: {
        margin: 30,
        items: 2,
      },
      992: {
        margin: 30,
        items: 3,
      },
      1200: {
        margin: 30,
        items: 4,
      },
    },
  };

  return (
    <>
      <div className="topbar topbar--two">
        <div className="container">
          <div className="topbar__info">
            <Link to="#">
              <i className="icon-pin"></i> 88 Road Broklyn Golden Street. New
              York
            </Link>
            <Link to="mailto:needhelp@company.com">
              <i className="icon-email"></i> needhelp@company.com
            </Link>
          </div>

          <div className="topbar__social">
            <Link to="#">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link to="#">
              <i className="fab fa-facebook"></i>
            </Link>
            <Link to="#">
              <i className="fab fa-pinterest"></i>
            </Link>
            <Link to="#">
              <i className="fab fa-instagram"></i>
            </Link>
          </div>
        </div>
      </div>
      <nav
        className={`main-menu main-menu--two ${
          sticky && "stricky-header stricked-menu stricky-fixed"
        }`}
      >
        <div className="container">
          <div className="main-menu--two__inner">
            <div className="main-menu__logo">
              <Link to="/">
                <img src={Logo} width="140" height="51" />
              </Link>
            </div>
            <div className="main-menu__nav">
              <ul className="main-menu__list">
                <li className={`dropdown ${menu.home && "current"}`}>
                  <Link to="/">Home</Link>
                  {/* <ul>
                    <li>
                      {" "}
                      <Link to="/">Home One</Link>{" "}
                    </li>
                    <li>
                      <Link to="/home-02">Home Two</Link>
                    </li>
                    <li>
                      <Link to="/home-03">Home Three</Link>
                    </li>
                    <li className="dropdown">
                      <Link to="#">Header Styles</Link>
                      <ul>
                        <li>
                          <Link to="/">Header One</Link>
                        </li>
                        <li>
                          <Link to="/home-02">Header Two</Link>
                        </li>
                        <li>
                          <Link to="/home-03">Header Three</Link>
                        </li>
                      </ul>
                    </li>
                  </ul> */}
                </li>
                <li class={`about ${menu.about && "current"}`}>
                  <Link to="/about">About</Link>
                </li>

                <li className={`dropdown ${menu.services && "current"}`}>
                  <Link to="/services">Services</Link>
                  {/* <ul>
                    <li>
                      <Link to="/services">Services 01</Link>
                    </li>
                    <li>
                      <Link to="/servicesdetails">Service Details</Link>
                    </li>
                  </ul> */}
                </li>
                <li className={`dropdown ${menu.pages && "current"}`}>
                  <Link to="#">Credit Consulting</Link>
                  <ul>
                    <li>
                      <Link to="/team">Team</Link>
                    </li>
                    <li>
                      <Link to="/teamdetails">Team Details</Link>
                    </li>
                    <li>
                      <Link to="/creditrepair">Credit Repair</Link>
                    </li>
                    <li>
                      <Link to="/creditaudit">Credit Audit</Link>
                    </li>
                    <li>
                      <Link to="/careers">Careers</Link>
                    </li>
                    <li>
                      <Link to="/faqs">Faqs</Link>
                    </li>
                    <li>
                      <Link to="/applynow">Apply Now</Link>
                    </li>
                  </ul>
                </li>
                <li className={`dropdown ${menu.features && "current"}`}>
                  <Link to="#">Features</Link>
                  <ul>
                    <li>
                      <Link to="/personalloan">Personal Loan</Link>
                    </li>
                    <li>
                      <Link to="/loaneligibility">Loan Eligibility</Link>
                    </li>
                    <li>
                      <Link to="/homeloan">Home Loan</Link>
                    </li>
                    <li>
                      <Link to="/homeloaneligibility">
                        Home Loan Eligibility
                      </Link>
                    </li>
                    <li>
                      <Link to="/compareEMI">Compare EMI</Link>
                    </li>
                    <li>
                      <Link to="/monthlyloan">Monthly Calculator</Link>
                    </li>
                  </ul>
                </li>
                <li className={`dropdown ${menu.news && "current"}`}>
                  <Link to="#">News</Link>
                  <ul>
                    <li>
                      <Link to="/newsmain">News</Link>
                    </li>
                    <li>
                      <Link to="/newsdetails">News Details</Link>
                    </li>
                  </ul>
                </li>
                <li class={`about ${menu.contact && "current"}`}>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="main-menu__right">
              <Link to="#" className="main-menu__toggler mobile-nav__toggler">
                <i className="fa fa-bars"></i>
              </Link>
              <Link to="#" className="main-menu__search search-toggler">
                <i className="icon-magnifying-glass"></i>
              </Link>
              <Link to="/applynow" className="thm-btn main-menu__btn">
                Request Loan
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="stricky-header stricked-menu main-menu main-menu--two">
        <div className="sticky-header__content"></div>
      </div>
      <section className="slider-one slider-one--two">
        <OwlCarousel
          ref={carouselRef}
          className="thm-owl__carousel thm-owl__carousel--custom-nav owl-carousel owl-theme owl-dot-style-one"
          data-owl-nav-prev=".slider-one__carousel__btn__left"
          data-owl-nav-next=".slider-one__carousel__btn__right"
          {...sliderOptionsOne}
        >
          <div className="item">
            <div className="slider-one__item">
              <div
                className="slider-one__image"
                style={{ backgroundImage: `url(${BGSLI1})` }}
              ></div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <p className="slider-one__tagline">Simple & Secure</p>
                    <h2 className="slider-one__title">
                      Quick Loan For <span>Everyone</span>
                    </h2>
                    <p className="slider-one__text">
                      Nullam vel nibh facilisis lectus fermentum ultrices quis
                      non risus.
                    </p>
                    <div className="slider-one__btns">
                      <Link
                        to="/applynow"
                        className="thm-btn thm-btn--dark-hover"
                      >
                        Apply For Loan
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="slider-one__item">
              <div
                className="slider-one__image"
                style={{ backgroundImage: `url(${BGSLI2})` }}
              ></div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <p className="slider-one__tagline">Simple & Secure</p>
                    <h2 className="slider-one__title">
                      Quick Loan For <span>Everyone</span>
                    </h2>
                    <p className="slider-one__text">
                      Nullam vel nibh facilisis lectus fermentum ultrices quis
                      non risus.
                    </p>
                    <div className="slider-one__btns">
                      <Link
                        to="/applynow"
                        className="thm-btn thm-btn--dark-hover"
                      >
                        Apply For Loan
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
        <div className="slider-one__carousel__btn">
          <button
            className="slider-one__carousel__btn__left"
            onClick={() => carouselRef.current.next()}
          >
            <i className="fa fa-angle-left"></i>
          </button>
          <button
            className="slider-one__carousel__btn__right"
            onClick={() => carouselRef.current.prev()}
          >
            <i className="fa fa-angle-right"></i>
          </button>
        </div>
      </section>
      <section className="service-four">
        <div className="container">
          <div
            className="service-four__inner wow fadeInUp"
            data-wow-duration="1500ms"
          >
            <div className="row row-gutter-x-0">
              <div className="col-lg-4 col-md-12">
                <div className="service-card-four">
                  <div className="service-card-four__icon">
                    <i className="icon-bill"></i>
                  </div>
                  <h3 className="service-card-four__title">
                    <Link to="/Linkbout">Quick cash loan</Link>
                  </h3>
                  <p className="service-card-four__text">
                    Lorem ipsum is simply dolor sit am adipi we help.{" "}
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="service-card-four">
                  <div className="service-card-four__icon">
                    <i className="icon-select"></i>
                  </div>
                  <h3 className="service-card-four__title">
                    <Link to="/loaneligilibity">Easy online application</Link>
                  </h3>
                  <p className="service-card-four__text">
                    Lorem ipsum is simply dolor sit am adipi we help.{" "}
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="service-card-four">
                  <div className="service-card-four__icon">
                    <i className="icon-growth"></i>
                  </div>
                  <h3 className="service-card-four__title">
                    <Link to="/creditrepair">Credit scores</Link>
                  </h3>
                  <p className="service-card-four__text">
                    Lorem ipsum is simply dolor sit am adipi we help.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-five pt-120 pb-120">
        <div className="about-five__shape-1"></div>
        <div className="about-five__shape-2"></div>
        <div className="about-five__shape-3"></div>
        <div className="container">
          <div className="row row-gutter-y-60">
            <div className="col-lg-6">
              <div
                className="about-five__image wow fadeInLeft"
                data-wow-duration="1500ms"
              >
                <img src="assets/images/resources/about-5-1.png" alt="" />
                <div className="about-five__image__caption">
                  <div className="about-five__image__caption__shape-1"></div>
                  <div className="about-five__image__caption__shape-2"></div>
                  <div className="about-five__image__caption__shape-3"></div>
                  <h3 className="about-five__image__title">
                    25<i>+</i>
                  </h3>
                  <p className="about-five__image__text">Years Experiecne</p>
                </div>
                <div className="about-five__image__floated">Finlon</div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-five__content">
                <div className="block-title text-left">
                  <p className="block-title__tagline">About Company</p>
                  <h2 className="block-title__title">
                    Small business loans for daily expenses
                  </h2>
                </div>
                <h3 className="about-five__subtitle">
                  Duis irure dolor lipsum is simply free text available.
                </h3>
                <p className="about-five__text">
                  There are many variations of passages of lorem ipsum available
                  the majority have suffered alteration in some form by injected
                  humour. Duis aute irure dolor lipsum is simply free text
                  available.
                </p>
                <div className="team-progress__item">
                  <h4 className="team-progress__title">Investment Plan</h4>
                  <div className="team-progress__bar">
                    <div
                      className="team-progress__bar__inner count-bar"
                      data-percent="77%"
                      style={{ width: "77%" }}
                    >
                      <div className="team-progress__bar__text count-text">
                        77%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="team-progress__item">
                  <h4 className="team-progress__title">
                    Consulting Experience
                  </h4>
                  <div className="team-progress__bar">
                    <div
                      className="team-progress__bar__inner count-bar"
                      data-percent="68%"
                      style={{ width: "68%" }}
                    >
                      <div className="team-progress__bar__text count-text">
                        68%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row row-gutter-y-30">
                  <div className="col-md-6">
                    <ul className="list-unstyled ml-0 about-two__list">
                      <li>
                        <i className="fa fa-arrow-circle-right"></i>
                        Nsectetur cing elit.
                      </li>
                      <li>
                        <i className="fa fa-arrow-circle-right"></i>
                        Suspe ndisse suscipit sagittis leo.
                      </li>
                      <li>
                        <i className="fa fa-arrow-circle-right"></i>
                        Entum estibulum digni posuere.
                      </li>
                      <li>
                        <i className="fa fa-arrow-circle-right"></i>
                        Donec tristique ante dictum rhoncus.
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <div className="about-five__video">
                      <img
                        src="assets/images/resources/about-5-v-1.png"
                        alt=""
                      />
                      <Link
                        to="#"
                        onClick={() => setytShow(true)}
                        className="video-popup about-five__video__btn"
                      >
                        <i className="fa fa-play"></i>
                        <span className="ripple"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="call-to-action-two">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 wow fadeInLeft"
              data-wow-delay="000ms"
              data-wow-duration="1500ms"
            >
              <div className="call-to-action-two__image">
                <img src="assets/images/backgrounds/cta-2-1-bg.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="call-to-action-two__content">
                <ul className="list-unstyled call-to-action-two__list">
                  <li>Simple</li>
                  <li>Transparent</li>
                  <li>Secure</li>
                </ul>
                <h3 className="call-to-action-two__title">
                  Get quick business loans
                </h3>
                <Link to="/applynow" className="thm-btn">
                  Apply For Loan
                </Link>
                <span className="call-to-action-two__arrow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 130.49 76.07"
                  >
                    <path
                      d="M153.74,101.43l1.56-.21c1-.12,2.49-.38,4.44-.53s4.28-.35,7-.49l4.29-.07c1.51,0,3.1.05,4.75.13,3.31.18,6.89.43,10.65,1a116,116,0,0,1,11.73,2.27,123,123,0,0,1,12.26,3.66,120.32,120.32,0,0,1,23.84,11.47,113.33,113.33,0,0,1,10.53,7.41c1.61,1.33,3.21,2.62,4.7,4s2.93,2.69,4.31,4,2.62,2.73,3.87,4,2.34,2.67,3.39,4,2.06,2.55,2.93,3.8,1.74,2.41,2.48,3.54l2,3.21c.61,1,1.12,2,1.6,2.8s.9,1.61,1.22,2.29l.84,1.73c.45.93.68,1.43.68,1.43a.95.95,0,0,1-1.62,1l0,0s-.33-.44-.93-1.27-1.43-2.06-2.59-3.57l-1.87-2.52c-.71-.89-1.47-1.86-2.28-2.9-1.63-2.06-3.55-4.32-5.68-6.75-1.07-1.21-2.24-2.41-3.4-3.71s-2.44-2.56-3.79-3.82c-2.61-2.62-5.53-5.2-8.62-7.8-.77-.65-1.58-1.26-2.38-1.91s-1.61-1.28-2.45-1.88l-2.52-1.88L232.07,122a126.44,126.44,0,0,0-11-6.71,117.91,117.91,0,0,0-11.65-5.54,106.37,106.37,0,0,0-11.85-4c-1-.29-2-.54-2.93-.77l-2.88-.69c-1.93-.37-3.8-.79-5.65-1-3.68-.63-7.2-.93-10.45-1.16-1.63-.09-3.19-.1-4.67-.15l-4.22.06-3.7.21c-1.14.07-2.18.22-3.12.31-1.87.17-3.37.44-4.38.6l-1.56.24a.94.94,0,0,1-1.08-.78,1,1,0,0,1,.79-1.09h0"
                      transform="translate(-152.92 -100.13)"
                    />
                    <path
                      d="M280.58,151.16c-.13,1-.19,1.94-.26,2.9s-.06,1.92-.07,2.89a50.5,50.5,0,0,0,.37,5.77c.12,1,.27,1.91.44,2.86s.38,1.89.6,2.83c.47,1.86,1,3.7,1.65,5.51a1.71,1.71,0,0,1-2.18,2.18l-.26-.09-2.46-.85c-.82-.28-1.64-.55-2.45-.85s-1.64-.57-2.44-.87l-2.44-.89c-1.61-.6-3.21-1.27-4.78-2a33,33,0,0,1-4.62-2.58,1.07,1.07,0,0,1-.25-1.44,1,1,0,0,1,.8-.48h0a21.85,21.85,0,0,1,2.7.26c.88.13,1.76.3,2.62.51a37.62,37.62,0,0,1,5.08,1.54q2.48.93,4.89,2c1.61.73,3.19,1.52,4.75,2.35l-2.44,2.09c-.18-1-.33-2-.47-3s-.23-2-.34-3-.17-2-.25-3-.13-2-.18-3-.07-2-.09-3l0-3c0-1-.06-2,0-3l0-3v0a1,1,0,0,1,1.08-.91,1,1,0,0,1,1,1s0,0,0,.08"
                      transform="translate(-152.92 -100.13)"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="service-three pt-120 pb-120">
        <div className="container">
          <div className="service-three__top">
            <div className="row">
              <div className="col-lg-6">
                <div className="block-title text-left">
                  <p className="block-title__tagline">What We???re Offering</p>
                  <h2 className="block-title__title">
                    We provide best services for your loans{" "}
                  </h2>
                </div>
              </div>
              <div className="col-lg-6">
                <p className="service-three__top__text">
                  Nullam vel nibh facilisis lectus fermentum ultrices quis non
                  risus. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. In hac habitasse platea dictumst.
                </p>
              </div>
            </div>
          </div>
          <OwlCarousel
            className="thm-owl__carousel service-three__carousel owl-dot-style-one owl-carousel owl-theme"
            {...sliderCard}
            data-owl-options='{
                        "margin": 30,
                        "items": 4,
                        "smartSpeed": 500,
                        "nav": true,
                        "dots": true,
                        "responsive": {
                          "0": {
                            "items": 1
                          },
                          "768": {
                            "items": 2
                          },
                          "992": {
                            "items": 3
                          },
                          "1200": {
                            "items": 4
                          }
                        }
                      }'
          >
            <div className="item">
              <div className="service-card-three">
                <div className="service-card-three__inner">
                  <div className="service-card-three__icon">
                    <i className="icon-car"></i>
                  </div>
                  <h3 className="service-card-three__title">
                    <Link to="/servicedetails">Auto Car Loan</Link>
                  </h3>
                  <p className="service-card-three__text">
                    Car Loan provide low interest many variations of passages of
                    lorem ipsum have some.
                  </p>
                </div>
                <Link to="/servicedetails" className="service-card-three__link">
                  <i className="fa fa-angle-right"></i>
                </Link>
              </div>
            </div>
            <div className="item">
              <div className="service-card-three">
                <div className="service-card-three__inner">
                  <div className="service-card-three__icon">
                    <i className="icon-diamond"></i>
                  </div>
                  <h3 className="service-card-three__title">
                    <Link to="/servicedetails">Wedding Loan</Link>
                  </h3>
                  <p className="service-card-three__text">
                    Car Loan provide low interest many variations of passages of
                    lorem ipsum have some.
                  </p>
                </div>
                <Link to="/servicedetails" className="service-card-three__link">
                  <i className="fa fa-angle-right"></i>
                </Link>
              </div>
            </div>
            <div className="item">
              <div className="service-card-three">
                <div className="service-card-three__inner">
                  <div className="service-card-three__icon">
                    <i className="icon-house"></i>
                  </div>
                  <h3 className="service-card-three__title">
                    <Link to="/servicedetails">Property Loan</Link>
                  </h3>
                  <p className="service-card-three__text">
                    Car Loan provide low interest many variations of passages of
                    lorem ipsum have some.
                  </p>
                </div>
                <Link to="/servicedetails" className="service-card-three__link">
                  <i className="fa fa-angle-right"></i>
                </Link>
              </div>
            </div>
            <div className="item">
              <div className="service-card-three">
                <div className="service-card-three__inner">
                  <div className="service-card-three__icon">
                    <i className="icon-briefcase"></i>
                  </div>
                  <h3 className="service-card-three__title">
                    <Link to="/servicedetails">Business Loan</Link>
                  </h3>
                  <p className="service-card-three__text">
                    Car Loan provide low interest many variations of passages of
                    lorem ipsum have some.
                  </p>
                </div>
                <Link to="/servicedetails" className="service-card-three__link">
                  <i className="fa fa-angle-right"></i>
                </Link>
              </div>
            </div>
            <div className="item">
              <div className="service-card-three">
                <div className="service-card-three__inner">
                  <div className="service-card-three__icon">
                    <i className="icon-car"></i>
                  </div>
                  <h3 className="service-card-three__title">
                    <Link to="/servicedetails">Auto Car Loan</Link>
                  </h3>
                  <p className="service-card-three__text">
                    Car Loan provide low interest many variations of passages of
                    lorem ipsum have some.
                  </p>
                </div>
                <Link to="/servicedetails" className="service-card-three__link">
                  <i className="fa fa-angle-right"></i>
                </Link>
              </div>
            </div>
            <div className="item">
              <div className="service-card-three">
                <div className="service-card-three__inner">
                  <div className="service-card-three__icon">
                    <i className="icon-diamond"></i>
                  </div>
                  <h3 className="service-card-three__title">
                    <Link to="/servicedetails">Wedding Loan</Link>
                  </h3>
                  <p className="service-card-three__text">
                    Car Loan provide low interest many variations of passages of
                    lorem ipsum have some.
                  </p>
                </div>
                <Link to="/servicedetails" className="service-card-three__link">
                  <i className="fa fa-angle-right"></i>
                </Link>
              </div>
            </div>
            <div className="item">
              <div className="service-card-three">
                <div className="service-card-three__inner">
                  <div className="service-card-three__icon">
                    <i className="icon-house"></i>
                  </div>
                  <h3 className="service-card-three__title">
                    <Link to="/servicedetails">Property Loan</Link>
                  </h3>
                  <p className="service-card-three__text">
                    Car Loan provide low interest many variations of passages of
                    lorem ipsum have some.
                  </p>
                </div>
                <Link to="/servicedetails" className="service-card-three__link">
                  <i className="fa fa-angle-right"></i>
                </Link>
              </div>
            </div>
            <div className="item">
              <div className="service-card-three">
                <div className="service-card-three__inner">
                  <div className="service-card-three__icon">
                    <i className="icon-briefcase"></i>
                  </div>
                  <h3 className="service-card-three__title">
                    <Link to="/servicedetails">Business Loan</Link>
                  </h3>
                  <p className="service-card-three__text">
                    Car Loan provide low interest many variations of passages of
                    lorem ipsum have some.
                  </p>
                </div>
                <Link to="/servicedetails" className="service-card-three__link">
                  <i className="fa fa-angle-right"></i>
                </Link>
              </div>
            </div>
            <div className="item">
              <div className="service-card-three">
                <div className="service-card-three__inner">
                  <div className="service-card-three__icon">
                    <i className="icon-car"></i>
                  </div>
                  <h3 className="service-card-three__title">
                    <Link to="/servicedetails">Auto Car Loan</Link>
                  </h3>
                  <p className="service-card-three__text">
                    Car Loan provide low interest many variations of passages of
                    lorem ipsum have some.
                  </p>
                </div>
                <Link to="/servicedetails" className="service-card-three__link">
                  <i className="fa fa-angle-right"></i>
                </Link>
              </div>
            </div>
            <div className="item">
              <div className="service-card-three">
                <div className="service-card-three__inner">
                  <div className="service-card-three__icon">
                    <i className="icon-diamond"></i>
                  </div>
                  <h3 className="service-card-three__title">
                    <Link to="/servicedetails">Wedding Loan</Link>
                  </h3>
                  <p className="service-card-three__text">
                    Car Loan provide low interest many variations of passages of
                    lorem ipsum have some.
                  </p>
                </div>
                <Link to="/servicedetails" className="service-card-three__link">
                  <i className="fa fa-angle-right"></i>
                </Link>
              </div>
            </div>
            <div className="item">
              <div className="service-card-three">
                <div className="service-card-three__inner">
                  <div className="service-card-three__icon">
                    <i className="icon-house"></i>
                  </div>
                  <h3 className="service-card-three__title">
                    <Link to="/servicedetails">Property Loan</Link>
                  </h3>
                  <p className="service-card-three__text">
                    Car Loan provide low interest many variations of passages of
                    lorem ipsum have some.
                  </p>
                </div>
                <Link to="/servicedetails" className="service-card-three__link">
                  <i className="fa fa-angle-right"></i>
                </Link>
              </div>
            </div>
            <div className="item">
              <div className="service-card-three">
                <div className="service-card-three__inner">
                  <div className="service-card-three__icon">
                    <i className="icon-briefcase"></i>
                  </div>
                  <h3 className="service-card-three__title">
                    <Link to="/servicedetails">Business Loan</Link>
                  </h3>
                  <p className="service-card-three__text">
                    Car Loan provide low interest many variations of passages of
                    lorem ipsum have some.
                  </p>
                </div>
                <Link to="/servicedetails" className="service-card-three__link">
                  <i className="fa fa-angle-right"></i>
                </Link>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </section>
      <section
        className="call-to-action-four text-center wow fadeInUp"
        data-wow-duration="1500ms"
      >
        <div className="container">
          <div className="call-to-action-four__inner">
            <div className="call-to-action-four__shape-1"></div>
            <div className="call-to-action-four__shape-2"></div>
            <p className="call-to-action-four__text">
              We will customize a loan based on the amount of cash you need.
              <Link to="/contact">Contact Now</Link>
            </p>
          </div>
        </div>
      </section>
      <section className="testimonials-one pt-120 pb-120">
        <div className="container">
          <div className="block-title text-center">
            <p className="block-title__tagline">our testimonials</p>
            <h2 className="block-title__title">
              What they???re talking about <br /> our company
            </h2>
          </div>
          <div className="row row-gutter-y-30">
            <div
              className="col-lg-4 col-md-12 wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="000ms"
            >
              <div className="testimonial-card">
                <div className="testimonial-card__info">
                  <div className="testimonial-card__image">
                    <img
                      src="assets/images/resources/testi-1-1.png"
                      alt="Delia Riley"
                    />
                  </div>
                  <div className="testimonial-card__meta">
                    <div className="testimonial-card__stars">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <h3 className="testimonial-card__name">Delia Riley</h3>
                    <p className="testimonial-card__designation">
                      Finance Manager
                    </p>
                  </div>
                </div>
                <span className="testimonial-card__line"></span>
                <div className="testimonial-card__text">
                  <p>
                    I loved the customer service you guys provided me. That was
                    very nice and patient with questions I had. I would really
                    like definitely come back here. Thank you for yours service.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-12 wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="100ms"
            >
              <div className="testimonial-card">
                <div className="testimonial-card__info">
                  <div className="testimonial-card__image">
                    <img
                      src="assets/images/resources/testi-1-2.png"
                      alt="Essie Perez"
                    />
                  </div>
                  <div className="testimonial-card__meta">
                    <div className="testimonial-card__stars">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <h3 className="testimonial-card__name">Essie Perez</h3>
                    <p className="testimonial-card__designation">
                      Finance Manager
                    </p>
                  </div>
                </div>
                <span className="testimonial-card__line"></span>
                <div className="testimonial-card__text">
                  <p>
                    I loved the customer service you guys provided me. That was
                    very nice and patient with questions I had. I would really
                    like definitely come back here. Thank you for yours service.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-12 wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="200ms"
            >
              <div className="testimonial-card">
                <div className="testimonial-card__info">
                  <div className="testimonial-card__image">
                    <img
                      src="assets/images/resources/testi-1-3.png"
                      alt="Dustin Dunn"
                    />
                  </div>
                  <div className="testimonial-card__meta">
                    <div className="testimonial-card__stars">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <h3 className="testimonial-card__name">Dustin Dunn</h3>
                    <p className="testimonial-card__designation">
                      Finance Manager
                    </p>
                  </div>
                </div>
                <span className="testimonial-card__line"></span>
                <div className="testimonial-card__text">
                  <p>
                    I loved the customer service you guys provided me. That was
                    very nice and patient with questions I had. I would really
                    like definitely come back here. Thank you for yours service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="call-to-action-three"
        ref={activeRef}
        style={{ backgroundImage: `url(${BGVImg1})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="call-to-action-three__title">
                Building a brighter financial future for you
              </h3>

              <div className="call-to-action-three__btns mt-50">
                <Link to="/about" className="thm-btn">
                  Discover More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-one pt-80 pb-120">
        <div className="container">
          <div className="row row-gutter-y-80">
            <div className="col-lg-6">
              <div className="about-one__content">
                <div className="block-title text-left">
                  <p className="block-title__tagline">About Company</p>
                  <h2 className="block-title__title">
                    We???re Trusted leaders in credit auditing
                  </h2>
                </div>
                <p className="about-one__text">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
                <div className="row row-gutter-y-20">
                  <div className="col-md-6">
                    <div className="about-one__box">
                      <div className="about-one__box__icon">
                        <i className="icon-money-transfer"></i>
                      </div>
                      <div className="about-one__box__content">
                        <h3 className="about-one__box__title">
                          International banking & finance
                        </h3>
                        <p className="about-one__box__text">
                          Nullam mollis elit quis dus is lacinia not efficitur
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-one__box">
                      <div className="about-one__box__icon">
                        <i className="icon-bank-transfer"></i>
                      </div>
                      <div className="about-one__box__content">
                        <h3 className="about-one__box__title">
                          International banking & finance
                        </h3>
                        <p className="about-one__box__text">
                          Nullam mollis elit quis dus is lacinia not efficitur
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-one__image">
                <img src="assets/images/resources/about-1-1.png" alt="" />
                <div className="about-one__image__caption">
                  <span>We're provide best facility for / wishes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-two pt-120 pb-120">
        <div className="container">
          <div className="block-title text-center">
            <p className="block-title__tagline">What We???re Offering</p>
            <h2 className="block-title__title">
              Our latest news updates <br /> & articles
            </h2>
          </div>
          <div className="row row-gutter-y-30">
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="blog-card">
                <div className="blog-card__image">
                  <div className="blog-card__date">
                    <span>05</span> Mar
                  </div>
                  <img
                    src="assets/images/blog/blog-1-1.png"
                    alt="Which growth strategies you should adopt"
                  />
                  <Link to="/newsdetails"></Link>
                </div>
                <div className="blog-card__content">
                  <div className="blog-card__meta">
                    <Link to="/newsdetails">
                      <i className="far fa-user-circle"></i> by Admin
                    </Link>
                    <Link to="/newsdetails">
                      <i className="far fa-comments"></i> 2 Comments
                    </Link>
                  </div>
                  <h3 className="blog-card__title">
                    <Link to="/newsdetails">
                      Which growth strategies you should adopt
                    </Link>
                  </h3>
                  <p className="blog-card__text">
                    Duis aute irure dolor lipsum simply free text the local
                    markets.
                  </p>
                  <Link to="/newsdetails" className="blog-card__link">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="blog-card">
                <div className="blog-card__image">
                  <div className="blog-card__date">
                    <span>05</span> Mar
                  </div>
                  <img
                    src="assets/images/blog/blog-1-2.png"
                    alt="Which growth strategies you should adopt"
                  />
                  <Link to="/newsdetails"></Link>
                </div>
                <div className="blog-card__content">
                  <div className="blog-card__meta">
                    <Link to="/newsdetails">
                      <i className="far fa-user-circle"></i> by Admin
                    </Link>
                    <Link to="/newsdetails">
                      <i className="far fa-comments"></i> 2 Comments
                    </Link>
                  </div>
                  <h3 className="blog-card__title">
                    <Link to="/newsdetails">
                      Which growth strategies you should adopt
                    </Link>
                  </h3>
                  <p className="blog-card__text">
                    Duis aute irure dolor lipsum simply free text the local
                    markets.
                  </p>
                  <Link to="/newsdetails" className="blog-card__link">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="blog-card">
                <div className="blog-card__image">
                  <div className="blog-card__date">
                    <span>05</span> Mar
                  </div>
                  <img
                    src="assets/images/blog/blog-1-3.png"
                    alt="Which growth strategies you should adopt"
                  />
                  <Link to="/newsdetails"></Link>
                </div>
                <div className="blog-card__content">
                  <div className="blog-card__meta">
                    <Link to="/newsdetails">
                      <i className="far fa-user-circle"></i> by Admin
                    </Link>
                    <Link to="/newsdetails">
                      <i className="far fa-comments"></i> 2 Comments
                    </Link>
                  </div>
                  <h3 className="blog-card__title">
                    <Link to="/newsdetails">
                      Which growth strategies you should adopt
                    </Link>
                  </h3>
                  <p className="blog-card__text">
                    Duis aute irure dolor lipsum simply free text the local
                    markets.
                  </p>
                  <Link to="/newsdetails" className="blog-card__link">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="client-carousel @@extraclassNameName">
        <div className="container">
          <Swiper
            className="thm-swiper__slider swiper-container"
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={5}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              0: {
                spaceBetween: 10,
                slidesPerView: 2,
              },
              375: {
                spaceBetween: 10,
                slidesPerView: 2,
              },
              575: {
                spaceBetween: 10,
                slidesPerView: 3,
              },
              767: {
                spaceBetween: 10,
                slidesPerView: 4,
              },
              991: {
                spaceBetween: 15,
                slidesPerView: 5,
              },
              1199: {
                spaceBetween: 30,
                slidesPerView: 5,
              },
            }}
          >
            <div className="swiper-wrapper">
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-1-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-1-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-1-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-1-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-1-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-1-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-1-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-1-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-1-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-1-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-1-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-1-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-1-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-1-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-1-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-1-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-1-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-1-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-1-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-1-1.png" alt="" />
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div>
      <div className="google-map__default">
        <iframe
          title="template google map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
          className="map__default"
          allowFullscreen
        ></iframe>
      </div>
      <Link
        to="#"
        data-target="html"
        className="scroll-to-target scroll-to-top"
      >
        <i className="fa fa-angle-up"></i>
      </Link>

      {ytShow && (
        <>
          <div
            className="mfp-bg mfp-fade mfp-ready"
            style={{ height: "7368px", position: "absolute" }}
          ></div>
          <div
            className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-fade mfp-ready"
            tabindex="-1"
            style={{ top: "1561px", position: "absolute", height: "310px" }}
          >
            <div className="mfp-container mfp-s-ready mfp-iframe-holder">
              <div className="mfp-content">
                <div className="mfp-iframe-scaler">
                  <button
                    title="Close (Esc)"
                    type="button"
                    className="mfp-close"
                    onClick={() => setytShow(false)}
                  >
                    ??
                  </button>
                  <iframe
                    className="mfp-iframe"
                    src="//www.youtube.com/embed/m2b9ZTBlW2k?autoplay=1"
                    frameborder="0"
                    allowfullscreen=""
                  ></iframe>
                </div>
              </div>
              <div className="mfp-preloader">Loading...</div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Home02;
