import BGPH1 from "../../assets/images/backgrounds/page-header-bg-1-1.jpg";
import { Link } from "react-router-dom";
import React from "react";
import AnimatedNumber from "animated-number-react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Img15 from "../../assets/images/cdp/img15.jpg";
import Img16 from "../../assets/images/cdp/img16.png";
import Img13 from "../../assets/images/cdp/img13.png";
import Img6 from "../../assets/images/cdp/img6.png";
import Img7 from "../../assets/images/cdp/img7.png";
import Img8 from "../../assets/images/cdp/img8.png";
import Img17 from "../../assets/images/cdp/img17.jpg";
import Img18 from "../../assets/images/cdp/img18.jpg";
import Img19 from "../../assets/images/cdp/img19.jpg";

const About = () => {
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
              <span>About</span>
            </li>
          </ul>
          <h2>About Us</h2>
        </div>
      </section>
      <section className="about-two pt-120 pb-120">
        <div className="container">
          <div className="row row-gutter-y-50">
            <div className="col-lg-6">
              <div className="about-two__image">
                <img src={Img16} alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-two__content">
                <div className="block-title text-left">
                  <p className="block-title__tagline">About Company</p>
                  <h2 className="block-title__title">
                    Get to know about our company
                  </h2>
                </div>
                <p className="about-two__text">
                  There are many variations of passages of lorem ipsum available
                  the majority have suffered alteration in some form by injected
                  humour. Duis aute irure dolor lipsum is simply free text
                  available.
                </p>
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
                <img src={Img13} alt="" />
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
      <section className="testimonials-one pt-120 mb--40">
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
                    <img src={Img6} alt="Delia Riley" />
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
                    <img src={Img7} alt="Essie Perez" />
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
                    <img src={Img8} alt="Dustin Dunn" />
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
      <section className="fact-one pt-140 pb-100">
        <div className="container">
          <div className="row row-gutter-y-30">
            <div className="col-lg-3 col-md-6">
              <div className="fact-one__item">
                <div className="fact-one__count">
                  <span className="count-box">
                    <span
                      className="count-text"
                      data-stop="90"
                      data-speed="1500"
                    >
                      <AnimatedNumber
                        value={90}
                        duration={5000}
                        formatValue={(v) => Math.round(v)}
                      />
                    </span>
                  </span>
                  %
                </div>
                <h3 className="fact-one__title">Loans Approve</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="fact-one__item">
                <div className="fact-one__count">
                  $
                  <span className="count-box">
                    <span
                      className="count-text"
                      data-stop="90"
                      data-speed="1500"
                    >
                      <AnimatedNumber
                        value={90}
                        duration={5000}
                        formatValue={(v) => Math.round(v)}
                      />
                    </span>
                  </span>
                  k
                </div>
                <h3 className="fact-one__title">Daily Payments</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="fact-one__item">
                <div className="fact-one__count">
                  <span className="count-box">
                    <span
                      className="count-text"
                      data-stop="90"
                      data-speed="1500"
                    >
                      <AnimatedNumber
                        value={90}
                        duration={5000}
                        formatValue={(v) => Math.round(v)}
                      />
                    </span>
                  </span>
                  k
                </div>
                <h3 className="fact-one__title">Happy Customers</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="fact-one__item">
                <div className="fact-one__count">
                  <span className="count-box">
                    <span
                      className="count-text"
                      data-stop="290"
                      data-speed="1500"
                    >
                      <AnimatedNumber
                        value={290}
                        duration={2500}
                        formatValue={(v) => Math.round(v)}
                      />
                    </span>
                  </span>
                </div>
                <h3 className="fact-one__title">Expert People</h3>
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
                  <img src={Img17} alt="Connor Estrada" />
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
                  <img src={Img18} alt="Darrell Powell" />
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
                  <img src={Img19} alt="Carolyn Love" />
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
      {/* <div className="client-carousel @@extraclassNameName">
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
      </div> */}

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

export default About;
