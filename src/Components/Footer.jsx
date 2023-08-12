import {
    FaInstagram,
    FaTwitter,
    FaYoutube,
    FaFacebook,
    FaLocationArrow,
    FaChevronRight,
    FaGooglePlay
} from "react-icons/fa";
import { MdEmail, MdPhone } from 'react-icons/md'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__info">
                <div className="footer__info-section">
                    <h3 className="footer__info-section-heading">
                        Terms & Conditions
                    </h3>
                    <ul className="footer__info-section-ul">
                        <li className="footer__info-section-link"><FaChevronRight /> Customer Agreement</li>
                        <li className="footer__info-section-link"><FaChevronRight /> Drivers Terms</li>
                        <li className="footer__info-section-link"><FaChevronRight /> Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer__info-section">
                    <h3 className="footer__info-section-heading">
                        Find Us
                    </h3>
                    <ul className="footer__info-section-ul">
                        <li className="footer__info-section-link"><FaLocationArrow /> location</li>
                        <li className="footer__info-section-link"><MdEmail /> email</li>
                        <li className="footer__info-section-link"><MdPhone />tele no. 1</li>
                        <li className="footer__info-section-link"><MdPhone />tele no. 2</li>
                    </ul>
                </div>
                <div className="footer__info-section">
                    <h3 className="footer__info-section-heading">
                        Download
                    </h3>
                    <ul className="footer__info-section-ul">
                        <li className="footer__info-section-link">
                            <a href="#download" id="download"><FaGooglePlay />  Download</a>
                        </li>
                    </ul>
                </div>
                <div className="footer__info-section">
                    <h3 className="footer__info-section-heading">
                        Social
                    </h3>
                    <ul className="footer__info-section-ul social">
                        <li className="footer__info-section-link"><FaFacebook /></li>
                        <li className="footer__info-section-link"><FaTwitter /></li>
                        <li className="footer__info-section-link"><FaYoutube /></li>
                        <li className="footer__info-section-link"><FaInstagram /></li>
                    </ul>
                </div>
            </div>
            <div className="footer__copyright">
                <p>&copy; 2022 OV Cab. All Rights Reserved </p>
            </div>
        </div>
    )
}

export default Footer;