import React from 'react';
import './Services.css';

function Services() {
    return (
        <section className="services">
            <h2>Our Services</h2>
            <div className="service-container">
                <div className="service-box">
                    <h3>Landscape Design</h3>
                    <p>Create a custom outdoor space tailored to your vision and needs.</p>
                </div>
                <div className="service-box">
                    <h3>Lawn Maintenance</h3>
                    <p>Keep your lawn healthy and beautiful with our expert care.</p>
                </div>
                <div className="service-box">
                    <h3>Hardscaping</h3>
                    <p>Enhance your outdoor living with patios, walkways, and retaining walls.</p>
                </div>
            </div>
        </section>
    );
}

export default Services;