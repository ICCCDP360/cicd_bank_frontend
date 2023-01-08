import BGPH1 from '../../../assets/images/backgrounds/page-header-bg-1-1.jpg'
import { Link } from 'react-router-dom'
import React from 'react'

const Team = () => {
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
                    <li><span>Team</span></li>
                </ul>
                <h2>Our Team</h2>
            </div>
        </section>

        <section className="team-grid pt-120 pb-120">
            <div className="container">
                <div className="row row-gutter-y-30">
                    <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="000ms">
                        <div className="team-card">
                            <div className="team-card__image">
                                <img src="assets/images/team/team-1-1.jpg" alt="Connor Estrada" />
                                <div className="team-card__social">
                                    <Link to="#"><i className="fab fa-twitter"></i></Link>
                                    <Link to="#"><i className="fab fa-facebook"></i></Link>
                                    <Link to="#"><i className="fab fa-pinterest"></i></Link>
                                    <Link to="#"><i className="fab fa-instagram"></i></Link>
                                </div>
                            </div>
                            <div className="team-card__content">
                                <div className="team-card__content__inner">
                                    <h3 className="team-card__title"><Link to="/teamdetails">Connor Estrada</Link></h3>
                                    <p className="team-card__designation">ADVISOR</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="100ms">
                        <div className="team-card">
                            <div className="team-card__image">
                                <img src="assets/images/team/team-1-2.jpg" alt="Darrell Powell" />
                                <div className="team-card__social">
                                    <Link to="#"><i className="fab fa-twitter"></i></Link>
                                    <Link to="#"><i className="fab fa-facebook"></i></Link>
                                    <Link to="#"><i className="fab fa-pinterest"></i></Link>
                                    <Link to="#"><i className="fab fa-instagram"></i></Link>
                                </div>
                            </div>
                            <div className="team-card__content">
                                <div className="team-card__content__inner">
                                    <h3 className="team-card__title"><Link to="/teamdetails">Darrell Powell</Link></h3>
                                    <p className="team-card__designation">ADVISOR</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="200ms">
                        <div className="team-card">
                            <div className="team-card__image">
                                <img src="assets/images/team/team-1-3.jpg" alt="Carolyn Love" />
                                <div className="team-card__social">
                                    <Link to="#"><i className="fab fa-twitter"></i></Link>
                                    <Link to="#"><i className="fab fa-facebook"></i></Link>
                                    <Link to="#"><i className="fab fa-pinterest"></i></Link>
                                    <Link to="#"><i className="fab fa-instagram"></i></Link>
                                </div>
                            </div>
                            <div className="team-card__content">
                                <div className="team-card__content__inner">
                                    <h3 className="team-card__title"><Link to="/teamdetails">Carolyn Love</Link></h3>
                                    <p className="team-card__designation">ADVISOR</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="300ms">
                        <div className="team-card">
                            <div className="team-card__image">
                                <img src="assets/images/team/team-1-4.jpg" alt="Elsie Reid" />
                                <div className="team-card__social">
                                    <Link to="#"><i className="fab fa-twitter"></i></Link>
                                    <Link to="#"><i className="fab fa-facebook"></i></Link>
                                    <Link to="#"><i className="fab fa-pinterest"></i></Link>
                                    <Link to="#"><i className="fab fa-instagram"></i></Link>
                                </div>
                            </div>
                            <div className="team-card__content">
                                <div className="team-card__content__inner">
                                    <h3 className="team-card__title"><Link to="/teamdetails">Elsie Reid</Link></h3>
                                    <p className="team-card__designation">ADVISOR</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="400ms">
                        <div className="team-card">
                            <div className="team-card__image">
                                <img src="assets/images/team/team-1-5.jpg" alt="Flora Fletcher" />
                                <div className="team-card__social">
                                    <Link to="#"><i className="fab fa-twitter"></i></Link>
                                    <Link to="#"><i className="fab fa-facebook"></i></Link>
                                    <Link to="#"><i className="fab fa-pinterest"></i></Link>
                                    <Link to="#"><i className="fab fa-instagram"></i></Link>
                                </div>
                            </div>
                            <div className="team-card__content">
                                <div className="team-card__content__inner">
                                    <h3 className="team-card__title"><Link to="/teamdetails">Flora Fletcher</Link></h3>
                                    <p className="team-card__designation">ADVISOR</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="500ms">
                        <div className="team-card">
                            <div className="team-card__image">
                                <img src="assets/images/team/team-1-6.jpg" alt="Julian Miller" />
                                <div className="team-card__social">
                                    <Link to="#"><i className="fab fa-twitter"></i></Link>
                                    <Link to="#"><i className="fab fa-facebook"></i></Link>
                                    <Link to="#"><i className="fab fa-pinterest"></i></Link>
                                    <Link to="#"><i className="fab fa-instagram"></i></Link>
                                </div>
                            </div>
                            <div className="team-card__content">
                                <div className="team-card__content__inner">
                                    <h3 className="team-card__title"><Link to="/teamdetails">Julian Miller</Link></h3>
                                    <p className="team-card__designation">ADVISOR</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Link to="#" data-target="html" className="scroll-to-target scroll-to-top"><i className="fa fa-angle-up"></i></Link>
    </>
  )
}

export default Team