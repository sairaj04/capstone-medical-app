import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const Landing_Page = () => {
    return (
        <section className="hero-section">
            <div>
                <div data-aos="fade-up" className="flex-hero">

                    <h1>
                        Your Health<br />

                        <span className="text-gradient">

                            Our Responsibility
                        </span>
                    </h1>
                    <div class="blob-cont">
                        <div class="blue blob"></div>
                    </div>
                    <div class="blob-cont">
                        <div class="blue1 blob"></div>
                    </div>
                    <h4>
                        When nobility of purpose is powered by knowledge and technology, there are no limits to excellence. At StayHealthy Healthcare, we strive for excellence, every moment and every day - to bring great healthcare within reach for millions of people.
                    </h4>
                    <a href="#services">
                        <button class="button">Get Started</button>
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Landing_Page;