import React from 'react';
import './ContactForm.css';

function ContactForm() {
    return (
        <section className="contact-form">
            <h2>Contact Us</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number:</label>
                    <input type="tel" id="phone" name="phone" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="service">Service Interested In:</label>
                    <select id="service" name="service" required>
                        <option value="">Select a service</option>
                        <option value="landscape-design">Landscape Design</option>
                        <option value="lawn-maintenance">Lawn Maintenance</option>
                        <option value="hardscaping">Hardscaping</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message (Optional):</label>
                    <textarea id="message" name="message" rows="4"></textarea>
                </div>
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </section>
    );
}

export default ContactForm;