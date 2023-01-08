import BGPH1 from '../../../assets/images/auditBack.jpg'
import BGImgBe1 from '../../../assets/images/backgrounds/benefit-bg-1-1.jpg'
import BGCt1 from '../../../assets/images/backgrounds/cta-1-1-bg.jpg'
import Image from '../../../assets/images/handsack.png'
import IMG26 from '../../../assets/images/cdp/img26.png'
import IMG27 from '../../../assets/images/cdp/img27.png'
import IMG28 from '../../../assets/images/cdp/img28.png'
import IMG29 from '../../../assets/images/cdp/img29.png'
import IMG30 from '../../../assets/images/cdp/img30.png'

import { Link } from 'react-router-dom'
import AnimatedNumber from "animated-number-react"
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react'


const CreditAudit = () => {
  return (
    <>

        <div className="stricky-header stricked-menu main-menu">
            <div className="sticky-header__content"></div>
        </div>
        <section className="page-header">
            <div className="page-header__bg" style={{ backgroundImage: `url(${BGPH1})`}}></div>
            <div className="container">
                <ul className="thm-breadcrumb list-unstyled">
                    <li><Link to="/">Home</Link></li>
                    <li><span>Credit Audit</span></li>
                </ul>
                <h2>Credit Audit</h2>
            </div>
        </section>
        <section className="about-one pt-120 pb-120">
            <div className="container">
                <div className="row row-gutter-y-60">
                    <div className="col-lg-6">
                        <div className="about-one__content">
                            <div className="block-title text-left">
                                <p className="block-title__tagline">About Company</p>
                                <h2 className="block-title__title">We’re Trusted leaders in credit auditing</h2>
                            </div>
                            <p className="about-one__text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur.</p>
                            <div className="row row-gutter-y-20">
                                <div className="col-md-6">
                                    <div className="about-one__box">
                                        <div className="about-one__box__icon">
                                            <i className="icon-money-transfer"></i>
                                        </div>
                                        <div className="about-one__box__content">
                                            <h3 className="about-one__box__title">International banking
                                                & finance</h3>
                                            <p className="about-one__box__text">Nullam mollis elit quis dus is lacinia not efficitur
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
                                            <h3 className="about-one__box__title">International banking
                                                & finance</h3>
                                            <p className="about-one__box__text">Nullam mollis elit quis dus is lacinia not efficitur
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-one__image">
                            <img src={Image} alt=""/>
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
                    autoplay={{delay:5000}}
                    breakpoints= {{
                     "0": {
                         "spaceBetween": 10,
                         "slidesPerView": 2
                     },
                     "375": {
                         "spaceBetween": 10,
                         "slidesPerView": 2
                     },
                     "575": {
                         "spaceBetween": 10,
                         "slidesPerView": 3
                     },
                     "767": {
                         "spaceBetween": 10,
                         "slidesPerView": 4
                     },
                     "991": {
                         "spaceBetween": 15,
                         "slidesPerView": 5
                     },
                     "1199": {
                         "spaceBetween": 30,
                         "slidesPerView": 5
                     }
                    }} 
                >
                    <div className="swiper-wrapper">
                        <SwiperSlide>
                            <div className="swiper-slide">
                                <img src={IMG26} alt="" />
                            </div>
                        </SwiperSlide>  
                        <SwiperSlide> 
                        <div className="swiper-slide">
                            <img src={IMG26} alt="" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src={IMG26} alt="" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src={IMG26} alt="" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src={IMG26} alt="" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src={IMG26} alt="" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src={IMG26} alt="" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src={IMG26} alt="" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src={IMG26} alt="" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src={IMG26} alt="" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src={IMG26} alt="" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src={IMG26} alt="" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src={IMG26} alt="" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src={IMG26} alt="" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src={IMG26} alt="" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src={IMG26} alt="" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src={IMG26} alt="" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src={IMG26} alt="" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src={IMG26} alt="" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src={IMG26} alt="" />
                        </div>
                        </SwiperSlide>
                    </div>
        </Swiper>
            </div>
        </div>
        <section className="fact-one pt-100 pb-100">
            <div className="container">
                <div className="row row-gutter-y-30">
                    <div className="col-lg-3 col-md-6">
                        <div className="fact-one__item">
                            <div className="fact-one__count">
                                <span className="count-box">
                                    <span className="count-text" data-stop="90" data-speed="1500"><AnimatedNumber value={90} duration={5000} formatValue={(v) => Math.round(v)} /></span>
                                </span>%
                            </div>
                            <h3 className="fact-one__title">Loans Approve</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="fact-one__item">
                            <div className="fact-one__count">$<span className="count-box">
                                    <span className="count-text" data-stop="90" data-speed="1500"><AnimatedNumber value={90} duration={5000} formatValue={(v) => Math.round(v)} /></span>
                                </span>k</div>
                            <h3 className="fact-one__title">Daily Payments</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="fact-one__item">
                            <div className="fact-one__count"><span className="count-box">
                                    <span className="count-text" data-stop="90" data-speed="1500"><AnimatedNumber value={90} duration={5000} formatValue={(v) => Math.round(v)} /></span>
                                </span>k</div>
                            <h3 className="fact-one__title">Happy Customers</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="fact-one__item">
                            <div className="fact-one__count"><span className="count-box">
                                    <span className="count-text" data-stop="290" data-speed="1500"><AnimatedNumber value={290} duration={5000} formatValue={(v) => Math.round(v)} /></span>
                                </span>
                            </div>
                            <h3 className="fact-one__title">Expert People</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="benefit-one pt-120">
            <div className="benefit-one__shape-1 wow fadeInLeft" data-wow-delay="000ms" data-wow-duration="1500ms" style={{ backgroundImage: `url(${BGImgBe1})` }}>
            </div>
            <div className="benefit-one__shape-2"></div>
            <div className="container">
                <div className="row row-gutter-y-60">
                    <div className="col-lg-6">
                        <div className="benefit-one__image wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="500ms">
                            <img src={IMG27} alt="" />
                            <div className="benefit-one__image__caption">
                                <h3 className="benefit-one__image__title">99.9%</h3>
                                <p className="benefit-one__image__text">Success Rates Guarantee</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="benefit-one__content">
                            <div className="block-title text-left">
                                <p className="block-title__tagline">our benefits</p>
                                <h2 className="block-title__title">Why you should choose our company</h2>
                            </div>
                            <p className="benefit-one__text">Nullam vel nibh facilisis lectus fermentum ultrices quis non risus.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Duis
                                porta, quam ut finibus ultrices, lorem lacus congue lorem et rutrum sapien magna tincidunt
                                magna.</p>
                            <div className="benefit-one__box">
                                <div className="benefit-one__box__icon">
                                    <i className="icon-bank"></i>
                                </div>
                                <div className="benefit-one__box__content">
                                    <h3 className="benefit-one__box__title">Lowest bank fees</h3>
                                    <p className="benefit-one__box__text">Lorem ipsum dolor consectetur notte massa sapien samet.
                                        Aucibus sed sem non, mattis commodo nisi.</p>
                                </div>
                            </div>
                            <div className="benefit-one__box">
                                <div className="benefit-one__box__icon">
                                    <i className="icon-payment"></i>
                                </div>
                                <div className="benefit-one__box__content">
                                    <h3 className="benefit-one__box__title">Up to 20.000$ limit</h3>
                                    
                                    <p className="benefit-one__box__text">Lorem ipsum dolor consectetur notte massa sapien samet.
                                        Aucibus sed sem non, mattis commodo nisi.</p>
                                </div>
                            </div>
                            <div className="benefit-one__box">
                                <div className="benefit-one__box__icon">
                                    <i className="icon-smartphone-1"></i>
                                </div>
                                <div className="benefit-one__box__content">
                                    <h3 className="benefit-one__box__title">Easy in 3 steps</h3>
                                    <p className="benefit-one__box__text">Lorem ipsum dolor consectetur notte massa sapien samet.
                                        Aucibus sed sem non, mattis commodo nisi.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="pt-120 pb-120">
            <div className="container">
                <div className="row row-gutter-y-30">
                    <div className="col-lg-4 col-md-12">
                        <div className="image-box">
                            <img src={IMG28} alt="" />
                            <h3 className="image-box__title"><Link to="/creditaudit">Credit auditing</Link></h3>
                            <p className="image-box__text">There are many variations of passages of lorem ipsum available the
                                majority have alteration in some form by injected humour.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="image-box">
                            <img src={IMG29} alt="" />
                            <h3 className="image-box__title"><Link to="/contact">Credit consulting</Link></h3>
                            <p className="image-box__text">There are many variations of passages of lorem ipsum available the
                                majority have alteration in some form by injected humour.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="image-box">
                            <img src={IMG30} alt="" />
                            <h3 className="image-box__title"><Link to="/creditrepair">Credit repairing</Link></h3>
                            <p className="image-box__text">There are many variations of passages of lorem ipsum available the
                                majority have alteration in some form by injected humour.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="call-to-action-one call-to-action-one--has-bottom-margin">
            <div className="container">
                <div className="call-to-action-one__inner wow fadeInUp" data-wow-duration="1500ms">
                    <div className="call-to-action-one__bg" style={{ backgroundImage: `url(${BGCt1})` }}></div>
                       <h3 className="call-to-action-one__title">
                        Are you ready to get credit
                        repair services?
                    </h3>
                    <div className="call-to-action-one__btns">
                        <Link to="/creditrepair" className="thm-btn">Let’s Get Started</Link>
                    </div>
                </div>
            </div>
        </section>
        <Link to="#" data-target="html" className="scroll-to-target scroll-to-top"><i className="fa fa-angle-up"></i></Link>
    </>
  )
}

export default CreditAudit