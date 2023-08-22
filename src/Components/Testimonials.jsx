const Testimonials = () => {
    return (
        <section className="testimonials">
            <h2 className="testimonials__heading">Testimonials</h2>
            <div className="testimonials__title">
                <h2>Words of Acclaim</h2>
                <h3>Praise from Our Valued Clients</h3>
            </div>
            <ul className="testimonials__list">
                <li className="testimonials__list-item">
                    <div className="testmonials__list-item-card">
                        <div className="testimonials__list-item-card-head">
                            <h2>Suraj</h2>
                        </div>
                        <div className="testimonials__list-item-card-body">
                            <p> have recently tried OV cab and my experience was really good.</p>
                        </div>
                    </div>
                </li>
                <li className="testimonials__list-item">
                    <div className="testmonials__list-item-card">
                        <div className="testimonials__list-item-card-head">
                            <h2>Vaani</h2>
                        </div>
                        <div className="testimonials__list-item-card-body">
                            <p>It was really nice experience, would recommend others to give it a try.</p>
                        </div>
                    </div>
                </li>
                <li className="testimonials__list-item">
                    <div className="testmonials__list-item-card">
                        <div className="testimonials__list-item-card-head">
                            <h2>Aditya</h2>
                        </div>
                        <div className="testimonials__list-item-card-body">
                            <p>I loved there support, a quick and professional support by ov team.</p>
                        </div>
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default Testimonials;