import React from 'react'
import { Link } from 'react-router-dom'
import app from "../Images/app.jpg"
import pay from "../Images/pay.png"
import play from "../Images/play.jpg"
function Footer() {
  return (
    <>
    <section id="newsletter" class="section-p1 section-m1">
        <div class="newstext">
            <h4>Sign Up For Newsletter</h4>
            <p>Get E-mail updates about our latest shop and <span>special offers.</span></p>
        </div>
        <div class="form">
            <input type="text" placeholder="your email address"/>
            <button class="normal">Sign Up</button>
        </div>
    </section>
     <div className="section-p1">
        <div className="col">
            <h3>Ushop</h3>
            <h4>Contact</h4>
            <p><strong>Address:</strong>B-229 Faridabad, Bohra Road, Haryana</p>
            <p><strong>Phone:</strong>+91-7701971457</p>
            <p><strong>Hours:</strong> 10:00 - 18:00, Mon - Sat</p>
            <div className="follow">
                <h4>Follow Us</h4>
                <div className="icon">
                    <Link className="fab fa-facebook-f"></Link>
                    <Link className="fab fa-twitter"></Link>
                    <Link className="fab fa-instagram"></Link>
                    <Link className="fab fa-youtube"></Link>
                    <Link className="fab fa-pinterest-p"></Link>
                </div>
            </div>
        </div>

        <div className="col">
            <h4>About</h4>
            <a to="/">About Us</a>
            <a to="/">Delivery Information</a>
            <a to="/">Privacy Policy</a>
            <a to="/">Terms & Conditions</a>
            <a to="/">Contact Us</a>
        </div>
        <div className="col">
            <h4>My Account</h4>
            <a to="/">Sign In</a>
            <a to="/">View Cart</a>
            <a to="/">My Wishlist</a>
            <a to="/">Track My Order</a>
            <a to="/">Help</a>
        </div>
        <div className="col  install">
            <h4>Install App</h4>
            <p>From App Store or Google Play</p>
            <div className="row">
                <img src={app} alt="app-img"/>
                <img src={play} alt="play-img"/>
            </div>
            <p>Secured Payment Gateways </p>
            <img src={pay} alt="pay-img"/>
        </div>
        <div className="copyright">
            <p>@ 2022, Rohan Rana - Ecommerse Multipage Website</p>
        </div>
    </div>
    </>
  )
}
export default Footer