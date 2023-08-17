import About from "../Components/About";
import Footer from "../Components/Footer";
import Header from "../Components/Header"
import Hero from "../Components/Hero";
import Services from "../Components/Services";
import Testimonials from "../Components/Testimonials";

const Main = () => {
    return (
        <div className="mainx">
            <Header />
            <Hero />
            <About />
            <Services />
            <Testimonials />
            <Footer />
        </div>
    )
}

export default Main;