import BGPH1 from "../../../assets/images/backgrounds/page-header-bg-1-1.jpg";
import BGVImg1 from "../../../assets/images/backgrounds/video-bg-1-1.jpg";
import OwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Img22 from "../../../assets/images/cdp/img22.jpg";
import Img23 from "../../../assets/images/cdp/img23.png";
import Img24 from "../../../assets/images/cdp/img24.jpg";
import Img25 from "../../../assets/images/cdp/img24.png";
import Img26 from "../../../assets/images/cdp/img25.png";
import Img6 from "../../../assets/images/cdp/img6.png";
import Img7 from "../../../assets/images/cdp/img7.png";
import Img8 from "../../../assets/images/cdp/img8.png";

const CreditRepair = () => {
  const [ytShow, setytShow] = useState(false);
  const sliderOptions = {
    loop: true,
    items: 2,
    navText: [
      '<span className="fa-solid fa-angle-left"></span>',
      '<span className="fa-solid fa-angle-right"></span>',
    ],
    margin: 0,
    dots: false,
    nav: false,
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
      <section className="page-header">
        <img className="page-header__bg" src={Img22}></img>

        <div className="container">
          <ul className="thm-breadcrumb list-unstyled">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <span>Credit Repair</span>
            </li>
          </ul>
          <h2>Credit Repair</h2>
        </div>
      </section>
      <section className="about-three text-center pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="about-three__image mb-60 wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="000ms"
              >
                <img src={Img23} alt="" />
              </div>
              <div className="about-three__content">
                <div className="block-title text-center">
                  <p className="block-title__tagline">our introduction</p>
                  <h2 className="block-title__title">
                    Are you ready to get <br /> credit repair services?
                  </h2>
                </div>
                <p className="about-three__text mt--10">
                  Proin aliquet sagittis ex quis ultricies. Suspendisse a felis
                  euismod, faucibus sem nec, porta velit. Aliquam facilisis,
                  ligula vitae ultrices dapibus, nibh lacus aliquam mi, vel
                  facilisis purus dolor vulputate urna. Morbi viverra imperdiet
                  arcu, sit amet suscipit enim vehicula sed. Ut varius leo et
                  dolor pharetra mollis. Proin cursus eros id aliquam euismod.
                  Sed erat arcu, iaculis pellentesque ultrices sed. Suspendisse
                  quis nibh lorem.
                </p>
                <div className="about-three__btns mt-40">
                  <Link to="#" className="thm-btn thm-btn--dark-hover">
                    Let’s Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="video-one pt-120 pb-120"
        style={{ backgroundImage: `url(${Img24})` }}
      >
        <div className="video-one__shape"></div>
        <div className="container">
          <div className="row row-gutter-y-50">
            <div className="col-lg-6">
              <div className="video-one__content ">
                <Link
                  to="#"
                  onClick={() => setytShow(true)}
                  className="video-popup video-one__btn"
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
      <section className="testimonials-two pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <div className="block-title text-left">
                <p className="block-title__tagline">our testimonials</p>
                <h2 className="block-title__title">
                  What they’re talking about company
                </h2>
              </div>

              <div className="testimonials-two__btn">
                <button className="testimonials-two__btn__left">
                  <i className="fa fa-angle-left"></i>
                </button>
                <button className="testimonials-two__btn__right">
                  <i className="fa fa-angle-right"></i>
                </button>
              </div>
            </div>
            <div className="col-lg-8 col-md-12">
              <div className="testimonials-two__carousel">
                <OwlCarousel
                  className="thm-owl__carousel thm-owl__carousel--custom-nav owl-carousel owl-theme owl-dot-style-one"
                  data-owl-nav-prev=".testimonials-two__btn__left"
                  data-owl-nav-next=".testimonials-two__btn__right"
                  {...sliderOptions}
                  data-owl-options='{
                                    "loop": true,
                                    "items": 2,
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
                                        "items": 2
                                      },
                                      "992": {
                                        "items": 2
                                      }
                                    }
                                  }'
                >
                  <div className="item">
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
                          <h3 className="testimonial-card__name">
                            Delia Riley
                          </h3>
                          <p className="testimonial-card__designation">
                            Finance Manager
                          </p>
                        </div>
                      </div>
                      <span className="testimonial-card__line"></span>
                      <div className="testimonial-card__text">
                        <p>
                          I loved the customer service you guys provided me.
                          That was very nice and patient with questions I had. I
                          would really like definitely come back here. Thank you
                          for yours service.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
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
                          <h3 className="testimonial-card__name">
                            Essie Perez
                          </h3>
                          <p className="testimonial-card__designation">
                            Finance Manager
                          </p>
                        </div>
                      </div>
                      <span className="testimonial-card__line"></span>
                      <div className="testimonial-card__text">
                        <p>
                          I loved the customer service you guys provided me.
                          That was very nice and patient with questions I had. I
                          would really like definitely come back here. Thank you
                          for yours service.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
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
                          <h3 className="testimonial-card__name">
                            Dustin Dunn
                          </h3>
                          <p className="testimonial-card__designation">
                            Finance Manager
                          </p>
                        </div>
                      </div>
                      <span className="testimonial-card__line"></span>
                      <div className="testimonial-card__text">
                        <p>
                          I loved the customer service you guys provided me.
                          That was very nice and patient with questions I had. I
                          would really like definitely come back here. Thank you
                          for yours service.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
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
                          <h3 className="testimonial-card__name">
                            Delia Riley
                          </h3>
                          <p className="testimonial-card__designation">
                            Finance Manager
                          </p>
                        </div>
                      </div>
                      <span className="testimonial-card__line"></span>
                      <div className="testimonial-card__text">
                        <p>
                          I loved the customer service you guys provided me.
                          That was very nice and patient with questions I had. I
                          would really like definitely come back here. Thank you
                          for yours service.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
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
                          <h3 className="testimonial-card__name">
                            Essie Perez
                          </h3>
                          <p className="testimonial-card__designation">
                            Finance Manager
                          </p>
                        </div>
                      </div>
                      <span className="testimonial-card__line"></span>
                      <div className="testimonial-card__text">
                        <p>
                          I loved the customer service you guys provided me.
                          That was very nice and patient with questions I had. I
                          would really like definitely come back here. Thank you
                          for yours service.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
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
                          <h3 className="testimonial-card__name">
                            Dustin Dunn
                          </h3>
                          <p className="testimonial-card__designation">
                            Finance Manager
                          </p>
                        </div>
                      </div>
                      <span className="testimonial-card__line"></span>
                      <div className="testimonial-card__text">
                        <p>
                          I loved the customer service you guys provided me.
                          That was very nice and patient with questions I had. I
                          would really like definitely come back here. Thank you
                          for yours service.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
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
                          <h3 className="testimonial-card__name">
                            Delia Riley
                          </h3>
                          <p className="testimonial-card__designation">
                            Finance Manager
                          </p>
                        </div>
                      </div>
                      <span className="testimonial-card__line"></span>
                      <div className="testimonial-card__text">
                        <p>
                          I loved the customer service you guys provided me.
                          That was very nice and patient with questions I had. I
                          would really like definitely come back here. Thank you
                          for yours service.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
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
                          <h3 className="testimonial-card__name">
                            Essie Perez
                          </h3>
                          <p className="testimonial-card__designation">
                            Finance Manager
                          </p>
                        </div>
                      </div>
                      <span className="testimonial-card__line"></span>
                      <div className="testimonial-card__text">
                        <p>
                          I loved the customer service you guys provided me.
                          That was very nice and patient with questions I had. I
                          would really like definitely come back here. Thank you
                          for yours service.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
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
                          <h3 className="testimonial-card__name">
                            Dustin Dunn
                          </h3>
                          <p className="testimonial-card__designation">
                            Finance Manager
                          </p>
                        </div>
                      </div>
                      <span className="testimonial-card__line"></span>
                      <div className="testimonial-card__text">
                        <p>
                          I loved the customer service you guys provided me.
                          That was very nice and patient with questions I had. I
                          would really like definitely come back here. Thank you
                          for yours service.
                        </p>
                      </div>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-120 pb-120">
        <div className="container">
          <div className="row row-gutter-y-50">
            <div
              className="col-lg-6 col-md-12 wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="000ms"
            >
              <div className="image-box-two">
                <div className="image-box-two__image">
                  <img src={Img25} alt="" />
                </div>
                <div className="image-box-two__content  mt-30">
                  <h3 className="image-box-two__title">
                    <Link to="#">
                      We’re trusted leaders in credit repairing
                    </Link>
                  </h3>
                  <p className="image-box-two__text mt-20">
                    There are many variations of passages of lorem ipsum
                    available the majority have suffered alteration in some form
                    by injected humour. Duis aute irure dolor lipsum is simply
                    free text available.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12 wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="100ms"
            >
              <div className="image-box-two">
                <div className="image-box-two__image">
                  <img src={Img26} alt="" />
                </div>
                <div className="image-box-two__content mt-30">
                  <h3 className="image-box-two__title">
                    <Link to="#">
                      Discover our credit repair & restoration works
                    </Link>
                  </h3>
                  <p className="image-box-two__text  mt-20">
                    There are many variations of passages of lorem ipsum
                    available the majority have suffered alteration in some form
                    by injected humour. Duis aute irure dolor lipsum is simply
                    free text available.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="client-carousel client-carousel--team-details">
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
                  <img src="assets/images/resources/brand-2-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-2-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-2-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-2-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-2-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-2-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-2-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-2-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-2-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-2-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-2-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-2-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-2-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-2-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-2-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-2-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-2-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-2-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-2-1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/resources/brand-2-1.png" alt="" />
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
      {ytShow && (
        <>
          <div
            className="mfp-bg mfp-fade mfp-ready"
            style={{ height: "4089px", position: "absolute" }}
          ></div>

          <div
            className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-fade mfp-ready"
            tabindex="-1"
            style={{ top: " 1251px", position: "absolute", height: "310px" }}
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
    </>
  );
};

export default CreditRepair;
