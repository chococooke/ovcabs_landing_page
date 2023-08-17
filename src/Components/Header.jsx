import logo from "../images/logo.ico";

const Header = () => {
    return (
        <div className="header">
            <div className="header__brand">
                <img src={logo} alt="logo" />
            </div>
            <input type="checkbox" className="header__nav-checkbox" />
            <div className="header__nav-menu"></div>
            <div className="header__nav">
                <div className="header__nav-ul">
                    <li className="header__nav-ul-link">
                        About
                    </li>
                    <li className="header__nav-ul-link">
                        Features
                    </li>
                    <li className="header__nav-ul-link-active">
                        Services
                    </li>
                    <li className="header__nav-ul-link">
                        Contact
                    </li>
                </div>
            </div>
        </div>
    )
}

export default Header;

// Services
// Cab Types
// Testimonial
// Contact