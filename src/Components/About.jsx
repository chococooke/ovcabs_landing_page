import img from "../images/about.svg";

const About = () => {
    return (
        <section id="about" className="about">
            <div className="about__title">
                <h2>About</h2>
            </div>
            <div className="about__info">
                <div className="about__info-text">
                    <h2 className="about__info-text-heading">
                        We are Empowering <span>#Indian</span> Youth!<br />
                    </h2>
                    <h3 className="about__info-text-heading-min">Unleash the Countless Opportunities with OV Cabs.</h3>
                </div>
                <div className="about__info-img">
                    <img src={img} alt="about" />
                    <div className="about__info-img-dsc">
                        <p>Join us in becoming a part of the tight-knit OV CAB Family, where every individual matters.</p>
                        <h3 className="about__info-text-heading-sub">
                            Our mission is to relentlessly pursue results while creating opportunities for both our valued clients and dedicated drivers.
                            We transcend the concept of a mere team – at OV CAB, we foster a culture of mutual care and support.
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;