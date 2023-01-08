import BGPH1 from '../../assets/images/backgrounds/page-header-bg-1-1.jpg'
import { Link } from 'react-router-dom'
import React , { useState }  from 'react'

const Faqs = () => {
    const [clicked, setClicked] = useState(0);
    const faqs = [
        {
            question: "Nunc dui massa, porttitor id erat et",
            answer: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable. Phasellus a rhoncus erat."
        },
        {
            question: "Quisque quis urna consequat, scelerisque",
            answer: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable. Phasellus a rhoncus erat."
        },
        {
            question: "Mauris a ipsum id libero sodales dapibus",
            answer: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable. Phasellus a rhoncus erat.There are many variations of passages of available but the majority have suffered alteration that some form by injected randomised words which don’t look even as slightly believable now. Phasellus mollis ac augue sed varius. "
        },
        {
            question: "Nunc dui massa, porttitor id erat et",
            answer: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable. Phasellus a rhoncus erat."
        }
    ]
    const [clickedOne, setClickedOne] = useState(0);
    const faqsone = [
        {
            question: "Nunc dui massa, porttitor id erat et",
            answer: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable. Phasellus a rhoncus erat."
        },
        {
            question: "Quisque quis urna consequat, scelerisque",
            answer: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable. Phasellus a rhoncus erat."
        },
        {
            question: "Mauris a ipsum id libero sodales dapibus",
            answer: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable. Phasellus a rhoncus erat.There are many variations of passages of available but the majority have suffered alteration that some form by injected randomised words which don’t look even as slightly believable now. Phasellus mollis ac augue sed varius. "
        },
        {
            question: "Nunc dui massa, porttitor id erat et",
            answer: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable. Phasellus a rhoncus erat."
        },
    ]
  return (
    <>
        <div className="stricky-header stricked-menu main-menu">
            <div className="sticky-header__content"></div>
        </div>
        <section className="page-header">
            <div className="page-header__bg"  style={{ backgroundImage: `url(${BGPH1})`}}></div>
              <div className="container">
                <ul className="thm-breadcrumb list-unstyled">
                    <li><Link to="/">Home</Link></li>
                    <li><span>FAQs</span></li>
                </ul>
                <h2>FAQs</h2>
            </div>
        </section>
        <section className="faq-grid pt-120 pb-120">
            <div className="container">
                <div className="row row-gutter-y-20">
                    <div className="col-lg-6">
                        <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                        {faqs.map((item, index) => (
                            <div className={`accrodion  wow fadeInUp ${index === clicked && "active"}`} key={index} data-wow-delay="0ms">
                                <div className="accrodion-title" onClick={() => setClicked(index)}>
                                    <h4>{item.question}</h4>
                                    <span className="accrodion-icon"></span>
                                </div>
                                {index === clicked && <div className="accrodion-content">
                                    <div className="inner">
                                        <p>{item.answer}</p>
                                    </div>
                                </div>}
                            </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                        {faqsone.map((item, index) => (
                            <div className={`accrodion  wow fadeInUp ${index === clickedOne && "active-item"}`} key={index} data-wow-delay="0ms">
                                <div className="accrodion-title" onClick={() => setClickedOne(index)}>
                                     <h4>{item.question}</h4>
                                     <span className="accrodion-icon"></span>
                                </div>
                                {index === clickedOne && <div className="accrodion-content">
                                    <div className="inner">
                                        <p>{item.answer}</p>
                                    </div>
                                </div>}
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="faq-form pt-120 pb-120">
            <div className="container">
                <div className="block-title text-center">
                    <p className="block-title__tagline">contact</p>
                    <h2 className="block-title__title">Feel free to get in touch <br/> with our team</h2>
                </div>
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
                        <div className="col-md-12 text-center">
                            <button type="submit" className="thm-btn">Send a Message</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
        <Link to="#" data-target="html" className="scroll-to-target scroll-to-top"><i className="fa fa-angle-up"></i></Link>
    </>
  )
}

export default Faqs