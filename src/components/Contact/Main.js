import BGPH1 from '../../assets/images/cdp/img15.jpg'
import { Link } from 'react-router-dom'
import React from 'react'

const Contact = () => {
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
                    <li><span>Contact</span></li>
                </ul>
                <h2>Contact us</h2>
            </div>
        </section>

        <section className="contact-one pt-120 pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="contact-one__content">
                            <div className="block-title">
                                <p className="block-title__tagline">contact</p>
                                <h2 className="block-title__title">Feel free to get
                                    in touch</h2>
                            </div>
                            <p className="contact-one__text">There are many variations of passages of lorem ipsum available the
                                majority have alteration in some form by injected humour.</p>
                            <div className="contact-one__social">
                                <Link to="#"><i className="fab fa-twitter"></i></Link>
                                <Link to="#"><i className="fab fa-facebook"></i></Link>
                                <Link to="#"><i className="fab fa-pinterest"></i></Link>
                                <Link to="#"><i className="fab fa-instagram"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <form action="assets/sendemail.php" className="form-one contact-form-validated">
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
                                <div className="col-md-12">
                                    <button type="submit" className="thm-btn">Send a Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        <section className="contact-info-one">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-12">
                        <div className="contact-info-one__item">
                            <div className="contact-info-one__icon">
                                <i className="icon-telephone"></i>
                            </div>
                            <div className="contact-info-one__content">
                                <p className="contact-info-one__text">Have any question?</p>
                                <a className="contact-info-one__link" href="tel:+3-(856)000-9850">+3-(856) 000-9850</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="contact-info-one__item">
                            <div className="contact-info-one__icon">
                                <i className="icon-email"></i>
                            </div>
                            <div className="contact-info-one__content">
                                <p className="contact-info-one__text">Write us email</p>
                                <a className="contact-info-one__link" href="mailto:needhelp@company.com">needhelp@company.com</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="contact-info-one__item">
                            <div className="contact-info-one__icon">
                                <i className="icon-pin"></i>
                            </div>
                            <div className="contact-info-one__content">
                                <p className="contact-info-one__text">Visit anytime</p>
                                <a className="contact-info-one__link" href="#">88 Road Broklyn New York</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div className="google-map__default">
            <iframe title="template google map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd" className="map__default" allowfullscreen></iframe>
        </div>
        <Link to="#" data-target="html" className="scroll-to-target scroll-to-top"><i className="fa fa-angle-up"></i></Link>
    
    </>
  )
}

export default Contact