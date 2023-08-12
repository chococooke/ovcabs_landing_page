import img from "../images/hero_img.svg";

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero__animation_circle"></div>
            <div className="hero-text">
                <h1>
                    Reach Your Destination
                    Within Exact Time
                </h1>
                <h2>
                    Travel Safe & Secure with Assured Cab Service
                </h2>
            </div>
            <div className="hero__img">
                <img src={img} alt="hero img" />
            </div>
        </div>
    )
}

export default Hero;