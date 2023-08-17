import { FaCar } from "react-icons/fa";

const Services = () => {
    return (
        <section id="services" className="services">
            <h1 className="services__heading">Services</h1>
            <div className="services__info">
                <div className="services__info-intro">
                    <h3>Discover Our Fleet</h3>
                    <p>Explore deluxe cab services for your sophisticated travel needs.</p>
                </div>
                <div className="servies__info-features">
                    <ul className="services__info-features-list">
                        {/* <li className="services__info-features-list-feature">
                            Auto - Cost-effective solution for budget-conscious travelers.
                        </li> */}
                        <li className="services__info-features-list-feature">
                            <FaCar />
                            <p className="services__info-features-list-feature-dsc">
                                <span>#PREMIUM Cars</span>
                                Enjoy utmost comfort and luxury with our premium vehicle selection.
                            </p>
                        </li>
                        <li className="services__info-features-list-feature">
                            <FaCar />
                            <p className="services__info-features-list-feature-dsc">
                                <span>#ECONOMY Cars</span>
                                Opt for our economical yet reliable cars for your travel requirements.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Services;