import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="company-info">
                    <h3>Green Landscapes Inc.</h3>
                    <p>123 Nature Lane, Green City, GC 12345</p>
                    <p>Phone: (555) 123-4567</p>
                </div>
                <div className="social-links">
                    <h4>Follow Us</h4>
                    <ul>
                        <li><a href="#" aria-label="Facebook">Facebook</a></li>
                        <li><a href="#" aria-label="Twitter">Twitter</a></li>
                        <li><a href="#" aria-label="Instagram">Instagram</a></li>
                        <li><a href="#" aria-label="LinkedIn">LinkedIn</a></li>
                        <li><a href="#" aria-label="YouTube">YouTube</a></li>
                        <li><a href="#" aria-label="Pinterest">Pinterest</a></li>
                        <li><a href="#" aria-label="TikTok">TikTok</a></li>
                        <li><a href="#" aria-label="Houzz">Houzz</a></li>
                    </ul>
                </div>
                <div className="legal">
                    <a href="#" className="terms-link">Terms of Service</a>
                </div>
            </div>
            <div className="copyright">
                <p>&copy; 2024 Green Landscapes Inc. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;