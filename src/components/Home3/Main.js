import BGSLI3 from "../../assets/images/backgrounds/slider-3-1.png";
import BGSLI4 from "../../assets/images/backgrounds/slider-3-2.png";
import BGCase11 from "../../assets/images/case/case-1-1.png";
import BGCase12 from "../../assets/images/case/case-1-2.png";
import BGCase13 from "../../assets/images/case/case-1-3.png";
import BGCase14 from "../../assets/images/case/case-1-4.png";
import BGBL21 from "../../assets/images/blog/blog-2-1.png";
import BGBL22 from "../../assets/images/blog/blog-2-2.png";
import BGBL23 from "../../assets/images/blog/blog-2-3.png";
import BGCta1 from "../../assets/images/backgrounds/cta-1-1-bg.jpg";
import AnimatedNumber from "animated-number-react";
import OwlCarousel from "react-owl-carousel";
import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import Logo from "../../assets/images/cdp360.png";

const Home3 = () => {
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

  const sliderOptionsTwo = {
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

  const sliderFeature = {
    loop: true,
    items: 1,
    navText: [
      "<span class='slider-one__carousel__btn__left'></span>",
      "<span class='slider-one__carousel__btn__left'></span>",
    ],
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
  const sliderTestimonial = {
    loop: true,
    items: 1,
    navText: [
      "<span class='slider-one__carousel__btn__left'></span>",
      "<span class='slider-one__carousel__btn__left'></span>",
    ],
    margin: 0,
    dots: true,
    nav: true,
    animateOut: "slideOutDown",
    animateIn: "fadeIn",
    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 7000,
    autoplayHoverPause: false,
  };

  return (
    <>
      <nav
        class={`main-menu main-menu--three ${
          sticky && "stricky-header stricked-menu stricky-fixed"
        }`}
      >
        <div class="container-fluid">
          <div class="main-menu__logo">
            <Link to="/">
              <img src={Logo} />
            </Link>
          </div>
          <div class="main-menu__nav">
            <ul class="main-menu__list">
              <li class={`dropdown ${menu.home && "current"}`}>
                <Link to="/">Home</Link>
                {/* <ul>
                  <li>
                    {" "}
                    <Link to="/">Home One</Link>{" "}
                  </li>
                  <li>
                    <Link to="home-02">Home Two</Link>
                  </li>
                  <li>
                    <Link to="home-03">Home Three</Link>
                  </li>
                  <li class="dropdown">
                    <Link to="#">Header Styles</Link>
                    <ul>
                      <li>
                        <Link to="/">Header One</Link>
                      </li>
                      <li>
                        <Link to="home-02">Header Two</Link>
                      </li>
                      <li>
                        <Link to="home-03">Header Three</Link>
                      </li>
                    </ul>
                  </li>
                </ul> */}
              </li>
              <li class={`about ${menu.about && "current"}`}>
                <Link to="/about">About</Link>
              </li>
              <li class={`dropdown ${menu.services && "current"}`}>
                <Link to="/services">Services</Link>
                {/* <ul>
                  <li>
                    <Link to="/service">Services 01</Link>
                  </li>
                  <li>
                    <Link to="/servicesdetails">Service Details</Link>
                  </li>
                </ul> */}
              </li>
              <li class={`dropdown ${menu.pages && "current"}`}>
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
              <li class={`dropdown ${menu.features && "current"}`}>
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
                    <Link to="/homeloaneligibility">Home Loan Eligibility</Link>
                  </li>
                  <li>
                    <Link to="/compareEMI">Compare EMI</Link>
                  </li>
                  <li>
                    <Link to="/monthlyloan">Monthly Calculator</Link>
                  </li>
                </ul>
              </li>
              <li class={`dropdown ${menu.news && "current"}`}>
                <Link to="#">News</Link>
                <ul>
                  <li>
                    <Link to="/newsmain">News</Link>
                  </li>
                  <li>
                    <Link to="/newsdetails.">News Details</Link>
                  </li>
                </ul>
              </li>
              <li class={`contact ${menu.about && "current"}`}>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div class="main-menu__right">
            <Link to="#" class="main-menu__toggler mobile-nav__toggler">
              <i class="fa fa-bars"></i>
            </Link>
            <Link to="#" class="main-menu__search search-toggler">
              <i class="icon-magnifying-glass"></i>
            </Link>
            <Link to="/applynow" class="thm-btn main-menu__btn">
              Request Loan
            </Link>
            <Link to="tel:926668880000" class="main-menu__contact">
              <span class="main-menu__contact__icon">
                <i class="icon-phone"></i>
              </span>
              <span class="main-menu__contact__text">
                <strong>92 666 888 0000</strong>
                Mon to Fri: 9 am to 6 pm
              </span>
            </Link>
          </div>
        </div>
      </nav>
      <div className="stricky-header stricked-menu main-menu main-menu--three">
        <div className="sticky-header__content"></div>
      </div>
      <section className="slider-one slider-one--three">
        <OwlCarousel
          ref={carouselRef}
          className="thm-owl__carousel thm-owl__carousel--custom-nav owl-carousel owl-theme owl-dot-style-one"
          data-owl-nav-prev=".slider-one__carousel__btn__left"
          data-owl-nav-next=".slider-one__carousel__btn__right"
          {...sliderOptionsTwo}
        >
          <div className="item">
            <div className="slider-one__item">
              <div
                className="slider-one__image"
                style={{ backgroundImage: `url(${BGSLI3})` }}
              ></div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 text-center">
                    <h2 className="slider-one__title">
                      Personalized <br />
                      Credit Repair Services
                    </h2>
                    <p className="slider-one__text">
                      Nullam vel nibh facilisis lectus fermentum ultrices quis
                      non risus.
                    </p>
                    <div className="slider-one__btns">
                      <Link to="/creditrepair" className="thm-btn">
                        Let’s Get Started
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
                style={{ backgroundImage: `url(${BGSLI4})` }}
              ></div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 text-center">
                    <h2 className="slider-one__title">
                      Personalized <br />
                      Credit Repair Services
                    </h2>
                    <p className="slider-one__text">
                      Nullam vel nibh facilisis lectus fermentum ultrices quis
                      non risus.
                    </p>
                    <div className="slider-one__btns">
                      <Link to="/creditrepair" className="thm-btn">
                        Let’s Get Started
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

      <section className="about-six pt-120 pb-120">
        <div className="container">
          <div className="row row-gutter-y-60">
            <div className="col-lg-6">
              <div className="about-six__image">
                <img src="assets/images/resources/about-6-1.png" alt="" />
                <div
                  className="about-six__image__caption wow fadeInRight"
                  data-wow-duration="1500ms"
                >
                  <h4 className="about-six__image__caption__year count-box">
                    <span
                      className="count-text"
                      data-stop="20"
                      data-speed="1500"
                    ></span>
                  </h4>
                  <p className="about-six__image__caption__text">
                    Years of practicing
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-six__content">
                <div className="block-title text-left">
                  <p className="block-title__tagline">About Company</p>
                  <h2 className="block-title__title">
                    We repair & improve your credit scores
                  </h2>
                </div>
                <ul className="list-unstyled about-six__list">
                  <li>
                    <i className="fa fa-check-circle"></i>
                    Credit repairing
                  </li>
                  <li>
                    <i className="fa fa-check-circle"></i>
                    Credit consulting
                  </li>
                </ul>
                <h3 className="about-six__subtitle">
                  Duis irure dolor lipsum is simply free text available.
                </h3>

                <p className="about-six__text">
                  There are many variations of passages of lorem ipsum available
                  the majority have suffered alteration in some form by injected
                  humour. Duis aute irure dolor lipsum is simply free text
                  available.
                </p>
                <div className="about-six__author">
                  <div className="about-six__author__image">
                    <img src="assets/images/resources/about-6-2.png" alt="" />
                  </div>
                  <div className="about-six__author__name">Kevin Martin</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-five pt-120 pb-120">
        <div className="container">
          <div className="service-five__top">
            <div className="row">
              <div className="col-lg-6">
                <div className="block-title text-left">
                  <p className="block-title__tagline">What We’re Offering</p>
                  <h2 className="block-title__title">
                    We provide best services for your credit
                  </h2>
                </div>
              </div>
              <div className="col-lg-6">
                <p className="service-five__text">
                  Lorem ipsum dolor sit amet nsectetur cing elituspe ndisse
                  suscipit sagitis leo sit.
                </p>
              </div>
            </div>
          </div>
          <div className="row row-gutter-y-30">
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="000ms"
            >
              <div className="service-card-five">
                <div className="service-card-five__icon">
                  <i className="icon-credit-cards"></i>
                </div>
                <h3 className="service-card-five__title">
                  <Link to="/creditrepair">Credit Repair</Link>
                </h3>
                <p className="service-card-five__text">
                  Lorem ipsum is free text used by neque est qui lorem.
                </p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="100ms"
            >
              <div className="service-card-five">
                <div className="service-card-five__icon">
                  <i className="icon-audit"></i>
                </div>
                <h3 className="service-card-five__title">
                  <Link to="/creditrepair">Credit Audit</Link>
                </h3>
                <p className="service-card-five__text">
                  Lorem ipsum is free text used by neque est qui lorem.
                </p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="200ms"
            >
              <div className="service-card-five">
                <div className="service-card-five__icon">
                  <i className="icon-portfolio"></i>
                </div>
                <h3 className="service-card-five__title">
                  <Link to="/creditrepair">Business</Link>
                </h3>
                <p className="service-card-five__text">
                  Lorem ipsum is free text used by neque est qui lorem.
                </p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="300ms"
            >
              <div className="service-card-five">
                <div className="service-card-five__icon">
                  <i className="icon-education"></i>
                </div>
                <h3 className="service-card-five__title">
                  <Link to="/creditrepair">Education</Link>
                </h3>
                <p className="service-card-five__text">
                  Lorem ipsum is free text used by neque est qui lorem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="case-one pb-120">
        <div className="container-fluid">
          <div className="block-title text-center">
            <p className="block-title__tagline">case study</p>
            <h2 className="block-title__title">
              Discover our featured <br /> work studies
            </h2>
          </div>
          <div className="case-one__carousel">
            <OwlCarousel
              className="thm-owl__carousel owl-carousel owl-theme owl-dot-style-one"
              {...sliderFeature}
              data-owl-options='{
                            "loop": true,
                            "items": 1,
                            "autoplay": true,
                            "autoplayHoverPause": true,
                            "autoplayTimeout": 5000,
                            "smartSpeed": 500,
                            "nav": true,
                            "dots": true,
                            "margin": 30,
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
                <div className="case-card-one">
                  <Link to="/servicedetails" className="case-card-one__link">
                    <i className="fa fa-plus"></i>
                  </Link>
                  <div
                    className="case-card-one__image"
                    style={{ backgroundImage: `url(${BGCase11})` }}
                  ></div>
                  <div className="case-card-one__content">
                    <h3 className="case-card-one__title">
                      <Link to="#">Personal banking</Link>
                    </h3>
                    <p className="case-card-one__text">Finance</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="case-card-one">
                  <Link to="/servicedetails" className="case-card-one__link">
                    <i className="fa fa-plus"></i>
                  </Link>
                  <div
                    className="case-card-one__image"
                    style={{ backgroundImage: `url(${BGCase12})` }}
                  ></div>
                  <div className="case-card-one__content">
                    <h3 className="case-card-one__title">
                      <Link to="#">Business planning</Link>
                    </h3>
                    <p className="case-card-one__text">Finance</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="case-card-one">
                  <Link to="/servicedetails" className="case-card-one__link">
                    <i className="fa fa-plus"></i>
                  </Link>
                  <div
                    className="case-card-one__image"
                    style={{ backgroundImage: `url(${BGCase13})` }}
                  ></div>
                  <div className="case-card-one__content">
                    <h3 className="case-card-one__title">
                      <Link to="#">Meger & acquistion</Link>
                    </h3>
                    <p className="case-card-one__text">Finance</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="case-card-one">
                  <Link to="/servicedetails" className="case-card-one__link">
                    <i className="fa fa-plus"></i>
                  </Link>
                  <div
                    className="case-card-one__image"
                    style={{ backgroundImage: `url(${BGCase14})` }}
                  ></div>
                  <div className="case-card-one__content">
                    <h3 className="case-card-one__title">
                      <Link to="#">Business tie-ups</Link>
                    </h3>
                    <p className="case-card-one__text">Finance</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="case-card-one">
                  <Link to="/servicedetails" className="case-card-one__link">
                    <i className="fa fa-plus"></i>
                  </Link>
                  <div
                    className="case-card-one__image"
                    style={{ backgroundImage: `url(${BGCase11})` }}
                  ></div>
                  <div className="case-card-one__content">
                    <h3 className="case-card-one__title">
                      <Link to="#">Personal banking</Link>
                    </h3>
                    <p className="case-card-one__text">Finance</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="case-card-one">
                  <Link to="/servicedetails" className="case-card-one__link">
                    <i className="fa fa-plus"></i>
                  </Link>
                  <div
                    className="case-card-one__image"
                    style={{ backgroundImage: `url(${BGCase12})` }}
                  ></div>
                  <div className="case-card-one__content">
                    <h3 className="case-card-one__title">
                      <Link to="#">Business planning</Link>
                    </h3>
                    <p className="case-card-one__text">Finance</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="case-card-one">
                  <Link to="/servicedetails" className="case-card-one__link">
                    <i className="fa fa-plus"></i>
                  </Link>
                  <div
                    className="case-card-one__image"
                    style={{ backgroundImage: `url(${BGCase13})` }}
                  ></div>
                  <div className="case-card-one__content">
                    <h3 className="case-card-one__title">
                      <Link to="#">Meger & acquistion</Link>
                    </h3>
                    <p className="case-card-one__text">Finance</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="case-card-one">
                  <Link to="/servicedetails" className="case-card-one__link">
                    <i className="fa fa-plus"></i>
                  </Link>
                  <div
                    className="case-card-one__image"
                    style={{ backgroundImage: `url(${BGCase14})` }}
                  ></div>
                  <div className="case-card-one__content">
                    <h3 className="case-card-one__title">
                      <Link to="#">Business tie-ups</Link>
                    </h3>
                    <p className="case-card-one__text">Finance</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="case-card-one">
                  <Link to="/servicedetails" className="case-card-one__link">
                    <i className="fa fa-plus"></i>
                  </Link>
                  <div
                    className="case-card-one__image"
                    style={{ backgroundImage: `url(${BGCase11})` }}
                  ></div>
                  <div className="case-card-one__content">
                    <h3 className="case-card-one__title">
                      <Link to="#">Personal banking</Link>
                    </h3>
                    <p className="case-card-one__text">Finance</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="case-card-one">
                  <Link to="/servicedetails" className="case-card-one__link">
                    <i className="fa fa-plus"></i>
                  </Link>
                  <div
                    className="case-card-one__image"
                    style={{ backgroundImage: `url(${BGCase12})` }}
                  ></div>
                  <div className="case-card-one__content">
                    <h3 className="case-card-one__title">
                      <Link to="#">Business planning</Link>
                    </h3>
                    <p className="case-card-one__text">Finance</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="case-card-one">
                  <Link to="/servicedetails" className="case-card-one__link">
                    <i className="fa fa-plus"></i>
                  </Link>
                  <div
                    className="case-card-one__image"
                    style={{ backgroundImage: `url(${BGCase13})` }}
                  ></div>
                  <div className="case-card-one__content">
                    <h3 className="case-card-one__title">
                      <Link to="#">Meger & acquistion</Link>
                    </h3>
                    <p className="case-card-one__text">Finance</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="case-card-one">
                  <Link to="/servicedetails" className="case-card-one__link">
                    <i className="fa fa-plus"></i>
                  </Link>
                  <div
                    className="case-card-one__image"
                    style={{ backgroundImage: `url(${BGCase14})` }}
                  ></div>
                  <div className="case-card-one__content">
                    <h3 className="case-card-one__title">
                      <Link to="#">Business tie-ups</Link>
                    </h3>
                    <p className="case-card-one__text">Finance</p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>

      <section className="testimonials-three">
        <div className="testimonials-three__shape"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="testimonials-three__content">
                <div className="block-title text-left">
                  <p className="block-title__tagline">our testimonials</p>
                  <h2 className="block-title__title">
                    What they are talking about our company
                  </h2>
                </div>
                <div className="testimonials-three__carousel">
                  <div className="testimonials-three__carousel__line"></div>
                  <OwlCarousel
                    className="thm-owl__carousel owl-carousel owl-theme owl-dot-style-one"
                    {...sliderTestimonial}
                    data-owl-options='{
                                        "loop": true,
                                        "items": 1,
                                        "autoplay": true,
                                        "autoplayHoverPause": true,
                                        "autoplayTimeout": 5000,
                                        "smartSpeed": 500,
                                        "nav": false,
                                        "dots": true,
                                        "margin": 30,
                                        "responsive": {
                                          "0": {
                                            "items": 1
                                          },
                                          "768": {
                                            "items": 1
                                          },
                                          "992": {
                                            "items": 1
                                          }
                                        }
                                      }'
                  >
                    <div className="item">
                      <div className="testimonial-card-two">
                        <div className="testimonial-card-two__content">
                          <div className="testimonial-card-two__icon">
                            <i className="icon-quotes"></i>
                          </div>
                          <div className="testimonial-card-two__text">
                            I loved the customer service you guys provided me.
                            That was very nice and patient with questions I had.
                            I would really like definitely come back here. Thank
                            you for yours service.
                          </div>
                        </div>
                        <div className="testimonial-card__info">
                          <div className="testimonial-card__image">
                            <img
                              src="assets/images/resources/testi-1-1.png"
                              alt="@@title"
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
                            <h3 className="testimonial-card__name">
                              Kevin martin
                            </h3>
                            <p className="testimonial-card__designation">
                              Finance Manager
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="testimonial-card-two">
                        <div className="testimonial-card-two__content">
                          <div className="testimonial-card-two__icon">
                            <i className="icon-quotes"></i>
                          </div>
                          <div className="testimonial-card-two__text">
                            I loved the customer service you guys provided me.
                            That was very nice and patient with questions I had.
                            I would really like definitely come back here. Thank
                            you for yours service.
                          </div>
                        </div>
                        <div className="testimonial-card__info">
                          <div className="testimonial-card__image">
                            <img
                              src="assets/images/resources/testi-1-1.png"
                              alt="@@title"
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
                            <h3 className="testimonial-card__name">
                              Kevin martin
                            </h3>
                            <p className="testimonial-card__designation">
                              Finance Manager
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="testimonial-card-two">
                        <div className="testimonial-card-two__content">
                          <div className="testimonial-card-two__icon">
                            <i className="icon-quotes"></i>
                          </div>
                          <div className="testimonial-card-two__text">
                            I loved the customer service you guys provided me.
                            That was very nice and patient with questions I had.
                            I would really like definitely come back here. Thank
                            you for yours service.
                          </div>
                        </div>
                        <div className="testimonial-card__info">
                          <div className="testimonial-card__image">
                            <img
                              src="assets/images/resources/testi-1-1.png"
                              alt="@@title"
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
                            <h3 className="testimonial-card__name">
                              Kevin martin
                            </h3>
                            <p className="testimonial-card__designation">
                              Finance Manager
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </OwlCarousel>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInRight">
              <div className="testimonials-three__image">
                <img src="assets/images/resources/testi-3-b-1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-about pt-120 pb-120">
        <div className="container">
          <div className="block-title text-center">
            <p className="block-title__tagline">professional team</p>
            <h2 className="block-title__title">
              Meet the highly qualified <br /> team members
            </h2>
          </div>
          <div className="row row-gutter-y-30">
            <div
              className="col-lg-4 col-md-12 col-sm-12 wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="000ms"
            >
              <div className="team-card">
                <div className="team-card__image">
                  <img
                    src="assets/images/team/team-1-1.jpg"
                    alt="Connor Estrada"
                  />
                  <div className="team-card__social">
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
                <div className="team-card__content">
                  <div className="team-card__content__inner">
                    <h3 className="team-card__title">
                      <Link to="/teamdetails">Connor Estrada</Link>
                    </h3>
                    <p className="team-card__designation">ADVISOR</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-12 col-sm-12 wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="100ms"
            >
              <div className="team-card">
                <div className="team-card__image">
                  <img
                    src="assets/images/team/team-1-2.jpg"
                    alt="Darrell Powell"
                  />
                  <div className="team-card__social">
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
                <div className="team-card__content">
                  <div className="team-card__content__inner">
                    <h3 className="team-card__title">
                      <Link to="/teamdetails">Darrell Powell</Link>
                    </h3>
                    <p className="team-card__designation">ADVISOR</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-12 col-sm-12 wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="200ms"
            >
              <div className="team-card">
                <div className="team-card__image">
                  <img
                    src="assets/images/team/team-1-3.jpg"
                    alt="Carolyn Love"
                  />
                  <div className="team-card__social">
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
                <div className="team-card__content">
                  <div className="team-card__content__inner">
                    <h3 className="team-card__title">
                      <Link to="/teamdetails">Carolyn Love</Link>
                    </h3>
                    <p className="team-card__designation">ADVISOR</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="work-process pb-120">
        <div className="work-process__shape-1"></div>
        <div className="work-process__shape-2"></div>
        <div className="work-process__shape-3"></div>

        <div className="container">
          <div className="block-title text-center">
            <p className="block-title__tagline">Work process</p>
            <h2 className="block-title__title">
              Credit repair works in 4 eas <br /> simple steps
            </h2>
          </div>
          <div className="row row-gutter-y-30">
            <div
              className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="000ms"
            >
              <div className="work-process__item">
                <div className="work-process__icon">
                  <i className="icon-select"></i>
                </div>
                <h3 className="work-process__title">
                  <Link to="#">Review reports</Link>
                </h3>
                <p className="work-process__text">
                  Lorem Ipsum is simply free dumy text of the printing and amet
                  piscing
                </p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="100ms"
            >
              <div className="work-process__item">
                <div className="work-process__icon">
                  <i className="icon-settings"></i>
                </div>
                <h3 className="work-process__title">
                  <Link to="#">Fix errors</Link>
                </h3>
                <p className="work-process__text">
                  Lorem Ipsum is simply free dumy text of the printing and amet
                  piscing
                </p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="200ms"
            >
              <div className="work-process__item">
                <div className="work-process__icon">
                  <i className="icon-bill"></i>
                </div>
                <h3 className="work-process__title">
                  <Link to="#">Pay your bills</Link>
                </h3>
                <p className="work-process__text">
                  Lorem Ipsum is simply free dumy text of the printing and amet
                  piscing
                </p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="300ms"
            >
              <div className="work-process__item">
                <div className="work-process__icon">
                  <i className="icon-growth"></i>
                </div>
                <h3 className="work-process__title">
                  <Link to="#">Watch progress</Link>
                </h3>
                <p className="work-process__text">
                  Lorem Ipsum is simply free dumy text of the printing and amet
                  piscing
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="benefit-two ">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="benefit-two__image">
                <img src="assets/images/resources/benefit-2-1.png" alt="" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="benefit-two__content">
                <div className="block-title text-left">
                  <p className="block-title__tagline">our benefits</p>
                  <h2 className="block-title__title">
                    Benefits of better credit score and restoration
                  </h2>
                </div>
                <div className="benefit-two__tab tabs-box">
                  <ul className="list-unstyled benefit-two__tab__title tab-btns tab-buttons">
                    <li className="tab-btn  active-btn" data-tab="#repair">
                      <span>Credit repairs</span>
                    </li>
                    <li className="tab-btn" data-tab="#audit">
                      <span>Credit audit</span>
                    </li>
                    <li className="tab-btn" data-tab="#credit">
                      <span>New credit</span>
                    </li>
                  </ul>
                  <div className="benefit-two__tab__content tabs-content">
                    <div
                      className="benefit-two__tab__content__inner tab active-tab"
                      id="repair"
                    >
                      <p>
                        There are many variations of passages of but the
                        majority have in some form, by injected humou or words
                        which don't look even slightly believable of but the
                        majority have suffered.
                      </p>
                      <div className="benefit-two__tab__content__box">
                        <div className="benefit-two__tab__content__box__image">
                          <img
                            src="assets/images/resources/benefit-2-2.png"
                            alt=""
                          />
                        </div>
                        <div className="benefit-two__tab__content__box__content">
                          <ul className="list-unstyled ml-0 about-two__list">
                            <li>
                              <i className="fa fa-arrow-circle-right"></i>
                              Nsectetur cing elit
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
                              Lorem Ipsum on the tend to repeat
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      className="benefit-two__tab__content__inner tab"
                      id="audit"
                    >
                      <p>
                        There are many variations of passages of but the
                        majority have in some form, by injected humou or words
                        which don't look even slightly believable of but the
                        majority have suffered.
                      </p>
                      <div className="benefit-two__tab__content__box">
                        <div className="benefit-two__tab__content__box__image">
                          <img
                            src="assets/images/resources/benefit-2-2.png"
                            alt=""
                          />
                        </div>
                        <div className="benefit-two__tab__content__box__content">
                          <ul className="list-unstyled ml-0 about-two__list">
                            <li>
                              <i className="fa fa-arrow-circle-right"></i>
                              Nsectetur cing elit
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
                              Lorem Ipsum on the tend to repeat
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      className="benefit-two__tab__content__inner tab"
                      id="credit"
                    >
                      <p>
                        There are many variations of passages of but the
                        majority have in some form, by injected humou or words
                        which don't look even slightly believable of but the
                        majority have suffered.
                      </p>
                      <div className="benefit-two__tab__content__box">
                        <div className="benefit-two__tab__content__box__image">
                          <img
                            src="assets/images/resources/benefit-2-2.png"
                            alt=""
                          />
                        </div>
                        <div className="benefit-two__tab__content__box__content">
                          <ul className="list-unstyled ml-0 about-two__list">
                            <li>
                              <i className="fa fa-arrow-circle-right"></i>
                              Nsectetur cing elit
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
                              Lorem Ipsum on the tend to repeat
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="benefit-two__fact">
                  <div className="benefit-two__fact__icon">
                    <i className="icon-credibility"></i>
                  </div>
                  <div className="benefit-two__fact__content">
                    <div className="benefit-two__fact__title">
                      <span className="odometer" data-count="6,800">
                        <AnimatedNumber
                          value={6800}
                          duration={5000}
                          formatValue={(v) => Math.round(v)}
                        />
                      </span>
                    </div>
                    <p className="benefit-two__fact__text">
                      Successfully credit repaired
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-three pb-120">
        <div className="container">
          <div className="blog-three__top">
            <div className="row">
              <div className="col-lg-6">
                <div className="block-title text-left">
                  <p className="block-title__tagline">professional team</p>
                  <h2 className="block-title__title">
                    Meet the highly qualified <br /> team members
                  </h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="blog-three__btns">
                  <Link to="newsdetails" className="thm-btn">
                    View All News
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row row-gutter-y-30">
            <div className="col-lg-4 col-md-12">
              <div className="blog-card-two">
                <div
                  className="blog-card-two__image"
                  style={{ backgroundImage: `url(${BGBL21})` }}
                ></div>
                <div className="blog-card-two__content">
                  <div className="blog-card__meta">
                    <Link to="newsdetails">
                      <i className="far fa-user-circle"></i> by Admin
                    </Link>
                    <Link to="newsdetails">
                      <i className="far fa-comments"></i> 2 Comments
                    </Link>
                  </div>
                  <h3 className="blog-card-two__title">
                    <Link to="newsdetails">
                      Better changing to grow business faster{" "}
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="blog-card-two">
                <div
                  className="blog-card-two__image"
                  style={{ backgroundImage: `url(${BGBL22})` }}
                ></div>
                <div className="blog-card-two__content">
                  <div className="blog-card__meta">
                    <Link to="newsdetails">
                      <i className="far fa-user-circle"></i> by Admin
                    </Link>
                    <Link to="newsdetails">
                      <i className="far fa-comments"></i> 2 Comments
                    </Link>
                  </div>
                  <h3 className="blog-card-two__title">
                    <Link to="newsdetails">
                      Better changing to grow business faster{" "}
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="blog-card-two">
                <div
                  className="blog-card-two__image"
                  style={{ backgroundImage: `url(${BGBL23})` }}
                ></div>
                <div className="blog-card-two__content">
                  <div className="blog-card__meta">
                    <Link to="newsdetails">
                      <i className="far fa-user-circle"></i> by Admin
                    </Link>
                    <Link to="newsdetails">
                      <i className="far fa-comments"></i> 2 Comments
                    </Link>
                  </div>
                  <h3 className="blog-card-two__title">
                    <Link to="newsdetails">
                      Better changing to grow business faster{" "}
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="call-to-action-one call-to-action-one--has-bottom-margin">
        <div className="container">
          <div
            className="call-to-action-one__inner wow fadeInUp"
            data-wow-duration="1500ms"
          >
            <div
              className="call-to-action-one__bg"
              style={{ backgroundImage: `url(${BGCta1})` }}
            ></div>

            <h3 className="call-to-action-one__title">
              Are you ready to get credit repair services?
            </h3>
            <div className="call-to-action-one__btns">
              <Link to="/applynow" className="thm-btn">
                Apply now
              </Link>
            </div>
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

export default Home3;
