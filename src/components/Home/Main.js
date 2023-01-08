import BGImg from "../../assets/images/backgrounds/slider-1-1.png";
import BGImg1 from "../../assets/images/backgrounds/slider-1-2.png";
import BGVImg1 from "../../assets/images/backgrounds/video-bg-1-1.jpg";
import BGImgBe1 from "../../assets/images/backgrounds/benefit-bg-1-1.jpg";
import OwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";
import AnimatedNumber from "animated-number-react";
import React, { useRef, useState, useEffect } from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Slider1 from "../../assets/images/cdp/slider1.png";
import Slider2 from "../../assets/images/cdp/slider2.png";
import Img1 from "../../assets/images/cdp/img1.png";
import Img2 from "../../assets/images/cdp/img2.png";
import Img3 from "../../assets/images/cdp/img3.png";
import Img4 from "../../assets/images/cdp/img4.png";
import Img5 from "../../assets/images/cdp/img5.png";
import Img6 from "../../assets/images/cdp/img6.png";
import Img7 from "../../assets/images/cdp/img7.png";
import Img8 from "../../assets/images/cdp/img8.png";
import Img9 from "../../assets/images/cdp/img9.png";
import Img10 from "../../assets/images/cdp/img10.png";
import Img11 from "../../assets/images/cdp/img11.png";
import Img12 from "../../assets/images/cdp/img12.png";
import Img13 from "../../assets/images/cdp/img13.png";
import Img14 from "../../assets/images/cdp/img14.jpg";
import Img26 from "../../assets/images/cdp/img26.png";


const Main = () => {
  const [yActive, setActive] = useState();
  const [ytShow, setytShow] = useState(false);
  const [ySlider, setSlider] = useState();
  const [loanMoney, setLoanMoney] = useState(16000);
  const [loanMonth, setLoanMonth] = useState(8);
  const [interestRate, setInterestRate] = useState(15);

  const [Money, setMoney] = useState(0);
  const [Month, setMonth] = useState(0);
  const carouselRef = useRef();
  useEffect(() => {
    if (loanMoney > 0 && loanMonth > 0) {
      emiCalculate();
    }
  }, [loanMoney, loanMonth]);
  const emiCalculate = () => {
    console.log("ddsfdfef fsfasf");

    const interestRatePercent = parseInt(interestRate, 10) / 100;
    const totalPay = loanMoney * interestRatePercent + parseInt(loanMoney, 10);
    const monthlyPay = totalPay / parseInt(loanMonth, 10);

    setMoney(parseInt(monthlyPay, 10));
    setMonth(parseInt(totalPay, 10));
  };

  const sliderOptions = {
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

  return (
    <>
      <div className="stricky-header stricked-menu main-menu">
        <div className="sticky-header__content"></div>
      </div>
      <section className="slider-one">
        <OwlCarousel
          ref={carouselRef}
          className="thm-owl__carousel thm-owl__carousel--custom-nav owl-carousel owl-theme owl-dot-style-one"
          data-owl-nav-prev=".slider-one__carousel__btn__left"
          data-owl-nav-next=".slider-one__carousel__btn__right"
          {...sliderOptions}
        >
          <div className="item">
            <div className="slider-one__item">
              <div className="slider-one__lines">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <img className="slider-one__image" src={Slider1}></img>

              <div className="container">
                <div className="row">
                  <div className="col-lg-7">
                    <p className="slider-one__tagline">
                      <i className="fa fa-chart-pie"></i>
                      Simple & Secure Payment
                    </p>

                    <h2 className="slider-one__title">
                      We provide you a financial <span>power</span>
                    </h2>
                    <p className="slider-one__text">
                      Nullam vel nibh facilisis lectus fermentum ultrices quis
                      non risus.
                    </p>
                    <div className="slider-one__btns">
                      <Link to="/applynow" className="thm-btn">
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
              <div className="slider-one__lines">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <img className="slider-one__image" src={Slider2}></img>

              <div className="container">
                <div className="row">
                  <div className="col-lg-7">
                    <p className="slider-one__tagline">
                      <i className="fa fa-chart-pie"></i>
                      Simple & Secure Payment
                    </p>

                    <h2 className="slider-one__title">
                      We provide you a financial <span>power</span>
                    </h2>
                    <p className="slider-one__text">
                      Nullam vel nibh facilisis lectus fermentum ultrices quis
                      non risus.
                    </p>
                    <div className="slider-one__btns">
                      <Link to="/applynow" className="thm-btn">
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
        <div
          className="slider-one__box wow fadeInRight"
          data-wow-duration="1500ms"
        >
          <div className="slider-one__box__icon">
            <i className="icon-successful"></i>
          </div>
          <div className="slider-one__box__content">
            <p className="slider-one__box__tagline">Checkout our</p>
            <h3 className="slider-one__box__title">88% Success Rates</h3>
          </div>
        </div>
      </section>
      <section className="about-four pt-120 pb-120">
        <div className="about-four__shape"></div>
        <div className="container">
          <div className="row row-gutter-y-50">
            <div className="col-lg-6">
              <div className="about-four__content">
                <div className="block-title text-left">
                  <p className="block-title__tagline">About Company</p>
                  <h2 className="block-title__title">
                    Personal loans to fulfill your dreams
                  </h2>
                </div>
                <div className="about-four__box">
                  <div className="about-four__box__icon">
                    <i className="icon-loan"></i>
                  </div>
                  <div className="about-four__box__content">
                    <h3 className="about-four__box__title">
                      We’re in this business since 1987 and we provide the best
                      services.
                    </h3>
                  </div>
                </div>
                <p className="about-four__text">
                  Alteration in some form by injected humour. Duis aute irure
                  dolor lipsum is simply free text available in the local
                  markets in reprehenderit.
                </p>

                <div className="row row-gutter-y-20">
                  <div className="col-md-6">
                    <div className="about-four__feature">
                      <div className="about-four__feature__content">
                        <div className="about-four__feature__icon">
                          <i className="icon-confirmation"></i>
                        </div>
                        <h3 className="about-four__feature__title">
                          Direct card payment
                        </h3>
                      </div>
                      <div className="about-four__feature__text">
                        Lorem ipsum dolor sit ame ed consectetur nod.
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-four__feature">
                      <div className="about-four__feature__content">
                        <div className="about-four__feature__icon">
                          <i className="icon-confirmation"></i>
                        </div>
                        <h3 className="about-four__feature__title">
                          Direct card payment
                        </h3>
                      </div>
                      <div className="about-four__feature__text">
                        Lorem ipsum dolor sit ame ed consectetur nod.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="about-four__btns">
                  <Link to="/about" className="thm-btn thm-btn--dark-hover">
                    Discover More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-four__image">
                <div className="about-four__image__bg"></div>
                <div className="about-four__image__shape"></div>
                <img src={Img1} />
                <div className="about-four__image__caption">
                  <h3 className="about-four__image__caption__year">
                    25<i>+</i>
                  </h3>
                  <p className="about-four__image__caption__text">
                    Years Experience
                  </p>
                </div>
                <div className="about-four__image__floated">Finance</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="service-two mb--120">
        <div className="service-two__shape"></div>
        <div className="container">
          <div className="row row-gutter-y-30">
            <div className="col-lg-4 col-md-12">
              <div className="service-card-two">
                <div className="service-card-two__shape"></div>
                <div className="service-card-two__icon">
                  <i className="icon-smartphone"></i>
                </div>
                <div className="service-card-two__content">
                  <h3 className="service-card-two__title">
                    <Link to="/servicesdetails">Safe and Secure Payments</Link>
                  </h3>
                  <p className="service-card-two__text">
                    Duis aute irure dolor lipsum free is simply free text the
                    local markets in reprehenderit.
                  </p>
                  <Link
                    to="/servicesdetails"
                    className="service-card-two__link"
                  >
                    More Detail
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="service-card-two">
                <div className="service-card-two__shape"></div>
                <div className="service-card-two__icon">
                  <i className="icon-operation"></i>
                </div>
                <div className="service-card-two__content">
                  <h3 className="service-card-two__title">
                    <Link to="/servicesdetails">Quick Payment Process</Link>
                  </h3>
                  <p className="service-card-two__text">
                    Duis aute irure dolor lipsum free is simply free text the
                    local markets in reprehenderit.
                  </p>
                  <Link
                    to="/servicesdetails"
                    className="service-card-two__link"
                  >
                    More Detail
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="service-card-two">
                <div className="service-card-two__shape"></div>
                <div className="service-card-two__icon">
                  <i className="icon-payment-gateway"></i>
                </div>
                <div className="service-card-two__content">
                  <h3 className="service-card-two__title">
                    <Link to="/servicesdetails">No Prepayment Charges</Link>
                  </h3>
                  <p className="service-card-two__text">
                    Duis aute irure dolor lipsum free is simply free text the
                    local markets in reprehenderit.
                  </p>
                  <Link
                    to="/servicesdetails"
                    className="service-card-two__link"
                  >
                    More Detail
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="video-one video-one--home pt-240 pb-120"
        style={{ backgroundImage: "../../assets/images/cdp/img14.jpg" }}
      >
        <div className="video-one__shape"></div>
        <div className="container">
          <div className="row row-gutter-y-50">
            <div className="col-lg-6">
              <div className="video-one__content">
                <Link
                  to="#"
                  className="video-popup video-one__btn "
                  onClick={() => setytShow(true)}
                >
                  <i className="fa fa-play"></i>
                  <span className="ripple"></span>
                </Link>
                <h3 className="video-one__title">
                  Hundreds of customers <br /> trust our company
                </h3>
              </div>
            </div>
            <div className="col-lg-6">
              <ul className="list-unstyled video-one__list">
                <li>
                  <i className="icon-tick"></i>
                  Expert & Certified
                </li>
                <li>
                  <i className="icon-tick"></i>
                  Quality Services
                </li>
                <li>
                  <i className="icon-tick"></i>
                  Quick Loan Order
                </li>
                <li>
                  <i className="icon-tick"></i>
                  Status Monitor
                </li>
                <li>
                  <i className="icon-tick"></i>
                  Status Monitor
                </li>
                <li>
                  <i className="icon-tick"></i>
                  Easy to Use
                </li>
              </ul>
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
                  <img src={Img26} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src={Img26} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src={Img26} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src={Img26} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src={Img26} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src={Img26} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src={Img26} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src={Img26} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src={Img26} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src={Img26} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src={Img26} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src={Img26} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src={Img26} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src={Img26} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src={Img26} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src={Img26} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src={Img26} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src={Img26} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src={Img26} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src={Img26} alt="" />
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div>
      <section className="service-one pt-120 pb-140">
        <img
          src="assets/images/shapes/service-h-1.png"
          className="service-one__icon-1"
          alt=""
        />
        <img
          src="assets/images/shapes/service-h-2.png"
          className="service-one__icon-2"
          alt=""
        />
        <img
          src="assets/images/shapes/service-h-3.png"
          className="service-one__icon-3"
          alt=""
        />
        <div className="container">
          <div className="block-title text-center">
            <p className="block-title__tagline">What We’re Offering</p>
            <h2 className="block-title__title">
              We provide best services <br /> for your loans{" "}
            </h2>
          </div>
          <div className="row row-gutter-y-50">
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="service-card">
                <div className="service-card__image">
                  <img src={Img2} alt="Auto Car Loan" />
                  <Link to="/servicesdetails"></Link>
                </div>
                <div className="service-card__content">
                  <div className="service-card__content__inner">
                    <div className="service-card__icon">
                      <i className="icon-car"></i>
                    </div>
                    <h3 className="service-card__title">
                      <Link to="/servicesdetails">Auto Car Loan</Link>
                    </h3>
                    <p className="service-card__text">
                      Car Loan provide low interest many variations of passages
                      of lorem ipsum have some.
                    </p>
                    <Link to="/servicesdetails" className="service-card__link">
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="service-card">
                <div className="service-card__image">
                  <img src={Img3} alt="Wedding Loan" />
                  <Link to="/servicesdetails"></Link>
                </div>
                <div className="service-card__content">
                  <div className="service-card__content__inner">
                    <div className="service-card__icon">
                      <i className="icon-diamond"></i>
                    </div>
                    <h3 className="service-card__title">
                      <Link to="/servicesdetails">Wedding Loan</Link>
                    </h3>
                    <p className="service-card__text">
                      Car Loan provide low interest many variations of passages
                      of lorem ipsum have some.
                    </p>
                    <Link to="/servicesdetails" className="service-card__link">
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="service-card">
                <div className="service-card__image">
                  <img src={Img4} alt="Property Loan" />
                  <Link to="/servicesdetails"></Link>
                </div>
                <div className="service-card__content">
                  <div className="service-card__content__inner">
                    <div className="service-card__icon">
                      <i className="icon-house"></i>
                    </div>
                    <h3 className="service-card__title">
                      <Link to="/servicesdetails">Property Loan</Link>
                    </h3>
                    <p className="service-card__text">
                      Car Loan provide low interest many variations of passages
                      of lorem ipsum have some.
                    </p>
                    <Link to="/servicesdetails" className="service-card__link">
                      <i className="fa fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="loan-calculator loan-calculator--has-bg pt-120">
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
                    <span>$40000</span>
                  </div>
                  <div>
                    <input
                      color="orange-50"
                      className="w-100 slider"
                      type="range"
                      id="volume"
                      min="10000"
                      max="40000"
                      onChange={(e) => {
                        setLoanMoney(e.target.value);
                        console.log(e);
                      }}
                    />
                    <h6>${loanMoney}</h6>
                  </div>

                  <div className="input-box">
                    <div
                      className="range-slider-count"
                      id="range-slider-count"
                    ></div>
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
                      value=""
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
                  <img src={Img5} alt="" />
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
      <section className="testimonials-one pt-120 mb--40">
        <div className="container">
          <div className="block-title text-center">
            <p className="block-title__tagline">our testimonials</p>
            <h2 className="block-title__title">
              What they’re talking about <br /> our company
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
                    <img src={Img7} alt="Delia Riley" />
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
                    <img src={Img8} alt="Essie Perez" />
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
                    <img src={Img6} alt="Dustin Dunn" />
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
                      {" "}
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
                        duration={5000}
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
      <section className="benefit-one pt-120">
        <div
          className="benefit-one__shape-1 wow fadeInLeft"
          data-wow-delay="000ms"
          data-wow-duration="1500ms"
          style={{ backgroundImage: `url(${BGImgBe1})` }}
        ></div>
        <div className="benefit-one__shape-2"></div>
        <div className="container">
          <div className="row row-gutter-y-60">
            <div className="col-lg-6">
              <div
                className="benefit-one__image wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="500ms"
              >
                <img src={Img9} alt="" />
                <div className="benefit-one__image__caption">
                  <h3 className="benefit-one__image__title">99.9%</h3>
                  <p className="benefit-one__image__text">
                    Success Rates Guarantee
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="benefit-one__content">
                <div className="block-title text-left">
                  <p className="block-title__tagline">our benefits</p>
                  <h2 className="block-title__title">
                    Why you should choose our company
                  </h2>
                </div>
                <p className="benefit-one__text">
                  Nullam vel nibh facilisis lectus fermentum ultrices quis non
                  risus. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. In hac habitasse platea dictumst. Duis porta, quam ut
                  finibus ultrices, lorem lacus congue lorem et rutrum sapien
                  magna tincidunt magna.
                </p>
                <div className="benefit-one__box">
                  <div className="benefit-one__box__icon">
                    <i className="icon-bank"></i>
                  </div>
                  <div className="benefit-one__box__content">
                    <h3 className="benefit-one__box__title">
                      Lowest bank fees
                    </h3>
                    <p className="benefit-one__box__text">
                      Lorem ipsum dolor consectetur notte massa sapien samet.
                      Aucibus sed sem non, mattis commodo nisi.
                    </p>
                  </div>
                </div>
                <div className="benefit-one__box">
                  <div className="benefit-one__box__icon">
                    <i className="icon-payment"></i>
                  </div>
                  <div className="benefit-one__box__content">
                    <h3 className="benefit-one__box__title">
                      Up to 20.000$ limit
                    </h3>

                    <p className="benefit-one__box__text">
                      Lorem ipsum dolor consectetur notte massa sapien samet.
                      Aucibus sed sem non, mattis commodo nisi.
                    </p>
                  </div>
                </div>
                <div className="benefit-one__box">
                  <div className="benefit-one__box__icon">
                    <i className="icon-smartphone-1"></i>
                  </div>
                  <div className="benefit-one__box__content">
                    <h3 className="benefit-one__box__title">Easy in 3 steps</h3>
                    <p className="benefit-one__box__text">
                      Lorem ipsum dolor consectetur notte massa sapien samet.
                      Aucibus sed sem non, mattis commodo nisi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-one pt-120 pb-120">
        <div className="container">
          <div className="block-title text-center">
            <p className="block-title__tagline">What We’re Offering</p>
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
                    src={Img10}
                    alt="Which growth strategies you should adopt"
                  />
                  <Link to="#"></Link>
                </div>
                <div className="blog-card__content">
                  <div className="blog-card__meta">
                    <Link to="#">
                      <i className="far fa-user-circle"></i> by Admin
                    </Link>
                    <Link to="#">
                      <i className="far fa-comments"></i> 2 Comments
                    </Link>
                  </div>
                  <h3 className="blog-card__title">
                    <Link to="#">Which growth strategies you should adopt</Link>
                  </h3>
                  <p className="blog-card__text">
                    Duis aute irure dolor lipsum simply free text the local
                    markets.
                  </p>
                  <Link to="#" className="blog-card__link">
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
                    src={Img11}
                    alt="Which growth strategies you should adopt"
                  />
                  <Link to="#"></Link>
                </div>
                <div className="blog-card__content">
                  <div className="blog-card__meta">
                    <Link to="#">
                      <i className="far fa-user-circle"></i> by Admin
                    </Link>
                    <Link to="#">
                      <i className="far fa-comments"></i> 2 Comments
                    </Link>
                  </div>
                  <h3 className="blog-card__title">
                    <Link to="#">Which growth strategies you should adopt</Link>
                  </h3>
                  <p className="blog-card__text">
                    Duis aute irure dolor lipsum simply free text the local
                    markets.
                  </p>
                  <Link to="#" className="blog-card__link">
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
                    src={Img12}
                    alt="Which growth strategies you should adopt"
                  />
                  <Link to="#"></Link>
                </div>
                <div className="blog-card__content">
                  <div className="blog-card__meta">
                    <Link to="#">
                      <i className="far fa-user-circle"></i> by Admin
                    </Link>
                    <Link to="#">
                      <i className="far fa-comments"></i> 2 Comments
                    </Link>
                  </div>
                  <h3 className="blog-card__title">
                    <Link to="#">Which growth strategies you should adopt</Link>
                  </h3>
                  <p className="blog-card__text">
                    Duis aute irure dolor lipsum simply free text the local
                    markets.
                  </p>
                  <Link to="#" className="blog-card__link">
                    Read More
                  </Link>
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
            style={{ height: "8265px", position: "absolute" }}
          ></div>
          <div
            className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-fade mfp-ready"
            tabindex="-1"
            style={{ top: "2000px", position: "absolute", height: "300px" }}
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
                    ×
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
      {ySlider && (
        <>
          <div className="noUi-base">
            <div className="noUi-connects">
              <div
                className="noUi-connect"
                style={{ transform: "translate(0%, 0px) scale(0.384615, 1)" }}
              ></div>
            </div>
            <div
              className="noUi-origin"
              style={{ transform: "translate(-615.385%, 0px)" }}
            >
              <div
                className="noUi-handle noUi-handle-lower"
                data-handle="0"
                tabindex="0"
                role="slider"
                aria-orientation="horizontal"
                aria-valuemin="1000.0"
                aria-valuemax="40000.0"
                aria-valuenow="16000.0"
                aria-valuetext="16000.00"
              >
                <div className="noUi-touch-area"></div>
                <div className="noUi-tooltip">$16000</div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Main;
