import BGPH1 from '../../assets/images/backgrounds/page-header-bg-1-1.jpg'
import { Link } from 'react-router-dom'
import React from 'react'

const Careers = () => {
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
                    <li><span>Careers</span></li>
                </ul>
                <h2>Careers</h2>
            </div>
        </section>
        <section className="career-one pt-120 pb-120">
            <div className="container">
                <div className="block-title text-center">
                    <p className="block-title__tagline">What We’re Offering</p>
                    <h2 className="block-title__title">Checkout finlon new job <br /> opportunities </h2>
                </div>
                <div className="row row-gutter-y-10">
                    <div className="col-lg-12 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="000ms">
                        <div className="career-one__item">
                            <div className="career-one__icon">
                                <i className="icon-management"></i>
                            </div>
                            <div className="career-one__content">
                                <h3 className="career-one__title"><Link to="/contact">Account Manager</Link></h3>
                                
                                <p className="career-one__text">Proin aliquet sagittis ex quis ultricies. Suspendisse a felis
                                    euismod, faucibus sem nec, porta velit.</p>
                            </div>
                            <div className="career-one__btns">
                                <Link to="/contact" className="thm-btn">Apply Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="100ms">
                        <div className="career-one__item">
                            <div className="career-one__icon">
                                <i className="icon-designer"></i>
                            </div>
                            <div className="career-one__content">
                                <h3 className="career-one__title"><Link to="/contact">UI/UX Designer</Link></h3>
                                
                                <p className="career-one__text">Proin aliquet sagittis ex quis ultricies. Suspendisse a felis
                                    euismod, faucibus sem nec, porta velit.</p>
                            </div>
                            <div className="career-one__btns">
                                <Link to="/contact" className="thm-btn">Apply Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="200ms">
                        <div className="career-one__item">
                            <div className="career-one__icon">
                                <i className="icon-programmer"></i>
                            </div>
                            <div className="career-one__content">
                                <h3 className="career-one__title"><Link to="/contact">Website Developer</Link></h3>
                                
                                <p className="career-one__text">Proin aliquet sagittis ex quis ultricies. Suspendisse a felis
                                    euismod, faucibus sem nec, porta velit.</p>
                            </div>
                            <div className="career-one__btns">
                                <Link to="/contact" className="thm-btn">Apply Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="300ms">
                        <div className="career-one__item">
                            <div className="career-one__icon">
                                <i className="icon-flowchart"></i>
                            </div>
                            <div className="career-one__content">
                                <h3 className="career-one__title"><Link to="/contact">Project Management</Link></h3>
                                
                                <p className="career-one__text">Proin aliquet sagittis ex quis ultricies. Suspendisse a felis
                                    euismod, faucibus sem nec, porta velit.</p>
                            </div>
                            <div className="career-one__btns">
                                <Link to="/contact" className="thm-btn">Apply Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="career-about pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 text-xl-start text-center">
                        <img src="assets/images/resources/career-about-1-1.jpg" className="img-responsive wow fadeInLeft" data-wow-duration="1500ms" alt="" />
                    </div>
                    <div className="col-lg-6">
                        <div className="career-about__content">
                            <div className="block-title text-left">
                                <p className="block-title__tagline">About Company</p>
                                <h2 className="block-title__title">Small business loans for daily expenses</h2>
                            </div>
                            <p className="career-about__highlight">Duis irure dolor lipsum is simply free text available.</p>
                            
                            <p className="career-about__text">There are many variations of passages of lorem ipsum available the
                                majority have suffered alteration in some form by injected humour. Duis aute irure dolor lipsum
                                is simply free text available.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Link to="#" data-target="html" className="scroll-to-target scroll-to-top"><i className="fa fa-angle-up"></i></Link>
    </>
  )
}

export default Careers