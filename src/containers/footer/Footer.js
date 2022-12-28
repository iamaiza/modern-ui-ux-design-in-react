import React from "react";
import logoImg from "../../assets/logo.svg";
import "./footer.css";

const Footer = () => {
    return (
        <div className="gpt3__footer section__padding d-flex align-center justify-center">
            <div className="gpt3__footer-heading">
                <h1 className="gradient__text">
                    Do you want to step in to the future before others
                </h1>
            </div>
            <div className="gpt3__footer-btn d-flex align-center justify-center">
                <p>Request Early Access</p>
            </div>

            <div className="gpt3__footer-links d-flex">
                <div className="gpt3__footer-links_logo d-flex">
                    <img src={logoImg} alt="logoImg" />
                    <p>
                        Crechterwoord K12 182 DK Alknjkcb, All Rights
                        Reserved
                    </p>
                </div>

                <div className="gpt3__footer-links_div d-flex">
                    <h4>Links</h4>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contact</p>
                </div>

                <div className="gpt3__footer-links_div d-flex">
                    <h4>Company</h4>
                    <p>Terms & Conditions </p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>

                <div className="gpt3__footer-links_div d-flex">
                    <h4>Get in touch</h4>
                    <p>Crechterwoord K12 182 DK Alknjkcb</p>
                    <p>085-132567</p>
                    <p>info@payme.net</p>
                </div>
            </div>
            <div className="gpt3__footer-copyright">
                <p>@2021 GPT-3. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
