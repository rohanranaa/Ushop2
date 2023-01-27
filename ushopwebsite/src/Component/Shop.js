import React from 'react'
import { Link } from 'react-router-dom'
import fj1 from "../Images/fj1.jpg"
import fj2 from "../Images/fj2.jpg"
import fj3 from "../Images/fj3.jpg"
import fj4 from "../Images/fj4.jpg"
import fj5 from "../Images/fj5.jpg"
import fj6 from "../Images/fj6.jpg"
import fj7 from "../Images/fj7.jpg"
import fj8 from "../Images/fj8.jpg"
import n1 from "../Images/n1.jpg"
import n2 from "../Images/n2.jpg"
import n3 from "../Images/n3.jpg"
import n4 from "../Images/n4.jpg"
import n5 from "../Images/n5.jpg"
import n6 from "../Images/n6.jpg"
import n7 from "../Images/n7.jpg"
import n8 from "../Images/n8.jpg"
// import Sproduct from './Sproduct'
function Shop() {
  return (
    <>
    <section id="page-header">
        <h2><div id="stayhome">#stayhome</div></h2>
        <p>Save more with coupons & up to 70% off ! </p>
    </section>
    <section id="product1" className="section-p1">
        <h2>Featured Products</h2>
        <p>Summer Collections New Morden Design</p>
        <div className="pro-container">
            <div className="pro">
            <Link to="/Sproduct">
                <img src={fj1} alt="product-img"/>
                <div className="des">
                    <span>Mufti</span>
                    <h5>Carton Astronaut T-Shirts</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>$78</h4>
                </div><i className="fa-solid fa-cart-shopping cart"></i></Link>
            </div>
            <div className="pro">
                <img src={fj2} alt="product-img"/>
                <div className="des">
                    <span>USPA</span>
                    <h5>Men Regular Fit Beach Wear Shirt</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>$54</h4>
                </div>
                <Link to="#"><i className="fa-solid fa-cart-shopping cart"></i></Link>
            </div>
            <div className="pro">
                <img src={fj3} alt="product-img"/>
                <div className="des">
                    <span>Armani</span>
                    <h5>Men Slim Fit Floral Print Slim Collar Casual Shirt</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>$98</h4>
                </div>
                <Link to="#"><i className="fa-solid fa-cart-shopping cart"></i></Link>
            </div>
            <div className="pro">
                <img src={fj4} alt="product-img"/>
                <div className="des">
                    <span>Zara</span>
                    <h5>Men Regular Fit Solid Casual Shirt</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>$67</h4>
                </div>
                <Link to="#"><i className="fa-solid fa-cart-shopping cart"></i></Link>
            </div>
            <div className="pro">
                <img src={fj5} alt="product-img"/>
                <div className="des">
                    <span>Prag</span>
                    <h5>Men Regular Fit Printed Cut Away Collar Casual Shirt</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>$52</h4>
                </div>
                <Link to="#"><i className="fa-solid fa-cart-shopping cart"></i></Link>
            </div>
            <div className="pro">
                <img src={fj6} alt="product-img"/>
                <div className="des">
                    <span>Tomwood</span>
                    <h5>Men Regular Fit, Solid Button Down Collar Casual Shirt</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>$104</h4>
                </div>
                <Link to="#"><i className="fa-solid fa-cart-shopping cart"></i></Link>
            </div>
            <div className="pro">
                <img src={fj7} alt="product-img"/>
                <div className="des">
                    <span>Manaitri</span>
                    <h5>Slim Fit Girls Black Crepe Trousers</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>$43</h4>
                </div>
                <Link to="#"><i className="fa-solid fa-cart-shopping cart"></i></Link>
            </div>
            <div className="pro">
                <img src={fj8} alt="product-img"/>
                <div className="des">
                    <span>FuzzyBid </span>
                    <h5>Girls Casual Cotton Rayon Blend Peplum Top (Grey, Pack of 1)</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>$37</h4>
                </div>
                <Link to="#"><i className="fa-solid fa-cart-shopping cart"></i></Link>
            </div>
        </div>
    </section>
{/* ----------------------2 Section of Shop Component------------------------------------- */}
<section id="product1" className="section-p1">
        <h2>Featured Products</h2>
        <p>Summer Collections New Morden Design</p>
        <div className="pro-container">
            <div className="pro">
                <img src={n1} alt="product-img"/>
                <div className="des">
                    <span>Mufti</span>
                    <h5>Carton Astronaut T-Shirts</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>$78</h4>
                </div>
                <Link to="#"><i className="fa-solid fa-cart-shopping cart"></i></Link>
            </div>
            <div className="pro">
                <img src={n2} alt="product-img"/>
                <div className="des">
                    <span>USPA</span>
                    <h5>Men Regular Fit Beach Wear Shirt</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>$54</h4>
                </div>
                <Link to="#"><i className="fa-solid fa-cart-shopping cart"></i></Link>
            </div>
            <div className="pro">
                <img src={n3} alt="product-img"/>
                <div className="des">
                    <span>Armani</span>
                    <h5>Men Slim Fit Floral Print Slim Collar Casual Shirt</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>$98</h4>
                </div>
                <Link to="#"><i className="fa-solid fa-cart-shopping cart"></i></Link>
            </div>
            <div className="pro">
                <img src={n4} alt="product-img"/>
                <div className="des">
                    <span>Zara</span>
                    <h5>Men Regular Fit Solid Casual Shirt</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>$67</h4>
                </div>
                <Link to="#"><i className="fa-solid fa-cart-shopping cart"></i></Link>
            </div>
            <div className="pro">
                <img src={n5} alt="product-img"/>
                <div className="des">
                    <span>Prag</span>
                    <h5>Men Regular Fit Printed Cut Away Collar Casual Shirt</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>$52</h4>
                </div>
                <Link to="#"><i className="fa-solid fa-cart-shopping cart"></i></Link>
            </div>
            <div className="pro">
                <img src={n6} alt="product-img"/>
                <div className="des">
                    <span>Tomwood</span>
                    <h5>Men Regular Fit, Solid Button Down Collar Casual Shirt</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>$104</h4>
                </div>
                <Link to="#"><i className="fa-solid fa-cart-shopping cart"></i></Link>
            </div>
            <div className="pro">
                <img src={n7} alt="product-img"/>
                <div className="des">
                    <span>Manaitri</span>
                    <h5>Slim Fit Girls Black Crepe Trousers</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>$43</h4>
                </div>
                <Link to="#"><i className="fa-solid fa-cart-shopping cart"></i></Link>
            </div>
            <div className="pro">
                <img src={n8} alt="product-img"/>
                <div className="des">
                    <span>FuzzyBid </span>
                    <h5>Girls Casual Cotton Rayon Blend Peplum Top (Grey, Pack of 1)</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>$37</h4>
                </div>
                <Link to="#"><i className="fa-solid fa-cart-shopping cart"></i></Link>
            </div>
        </div>
    </section>
            <section id="pagination" class="section-p1">
                 <a href="#">1</a>
                 <a href="#">2</a>
                 <a href="#"><i class="fa-solid fa-arrow-right-long"></i></a>
            </section>
        </>
    )
}
export default Shop