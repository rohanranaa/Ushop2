import React from 'react'
import f1 from "../Images/f1.png"
import f2 from "../Images/f2.png"
import f3 from "../Images/f3.png"
import f4 from "../Images/f4.png"
import f5 from "../Images/f5.png"
import f6 from "../Images/f6.png"
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
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
        <section id="hero">
         <h4>Trade-in-offer</h4>
         <h2>Super value deals</h2>
         <h1>On all products</h1>
         <p>Save more with coupons & up to 70% off ! </p>
         <button>Shop Now</button>
    </section>
    <section id="feature" className="section-p1">
         <div className="fe-box">
             <img src={f1} alt="features-img"/>
             <h6>Free Shipping</h6>
         </div>
         <div className="fe-box">
             <img src={f2} alt="features-img"/>
             <h6> Online Order</h6>
         </div>
         <div className="fe-box">
             <img src={f3} alt="features-img"/>
             <h6>Save Money</h6>
         </div>
         <div className="fe-box">
             <img src={f4} alt="features-img"/>
             <h6>Promotions</h6>
         </div>
         <div className="fe-box">
             <img src={f5} alt="features-img"/>
             <h6>Happy Sell</h6>
         </div>
         <div className="fe-box">
             <img src={f6} alt="features-img"/>
             <h6>24/7 Support</h6>
         </div>
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
{/* -----------------------Banner-------------------- */}
       <section id="banner" className="section-m1">
         <h4>Repair Services</h4>
         <h2>Up to <span>70% Off</span> - All t-Shirts & Accessories</h2>
         <button className="normal">Explore More</button>
     </section>

     {/* New Arrival */}
      <section id="product1" className="section-p1">
        <h2> New Arrivals</h2>
        <p>Summer Collections New Morden Design</p>
        <div className="pro-container">
            <div className="pro">
                <img src={n1} alt="product-img"/>
                <div className="des">
                    <span>ZARA</span>
                    <h5>Men Regular Fit Sky Blue Shirt</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>$99</h4>
                </div>
                <Link to="#"><i className="fa-solid fa-cart-shopping cart"></i></Link>
            </div>
            <div className="pro">
                <img src={n2} alt="product-img"/>
                <div className="des">
                    <span>USPA</span>
                    <h5>Men Regular Fit Grey Shirt</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>$84</h4>
                </div>
                <Link to="#"><i className="fa-solid fa-cart-shopping cart"></i></Link>
            </div>
            <div className="pro">
                <img src={n3} alt="product-img"/>
                <div className="des">
                    <span>MUFTI</span>
                    <h5>Men Slim Fit White Casual Shirt</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>$85</h4>
                </div>
                <Link to="#"><i className="fa-solid fa-cart-shopping cart"></i></Link>
            </div>
            <div className="pro">
                <img src={n4} alt="product-img"/>
                <div className="des">
                    <span>Zara</span>
                    <h5>Men Regular Fit Printed Shirt</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>$94</h4>
                </div>
                <Link to="#"><i className="fa-solid fa-cart-shopping cart"></i></Link>
            </div>
            <div className="pro">
                <img src={n5} alt="product-img"/>
                <div className="des">
                    <span>MUFTI</span>
                    <h5>Men Regular Fit Blue Denim Shirt</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>$118</h4>
                </div>
                <Link to="#"><i className="fa-solid fa-cart-shopping cart"></i></Link>
            </div>
            <div className="pro">
                <img src={n6} alt="product-img"/>
                <div className="des">
                    <span>TOMWOOD</span>
                    <h5>Men Regular Fit, Half Pant</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>$72</h4>
                </div>
                <Link to="#"><i className="fa-solid fa-cart-shopping cart"></i></Link>
            </div>
            <div className="pro">
                <img src={n7} alt="product-img"/>
                <div className="des">
                    <span>TOMWOOD</span>
                    <h5>Slim Fit Men Mud Colour Shirt</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>$73</h4>
                </div>
                <Link to="#"><i className="fa-solid fa-cart-shopping cart"></i></Link>
            </div>
            <div className="pro">
                <img src={n8} alt="product-img"/>
                <div className="des">
                    <span>MUFTI </span>
                    <h5>Casual Men Regular Fit, Half Shirt Black </h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>$87</h4>
                </div>
                <Link to="#"><i className="fa-solid fa-cart-shopping cart"></i></Link>
            </div>
        </div>
    </section>  
    {/* <!-- BOX BANNER --> */}
    <section id="sm-banner" class="section-p1">
        <div class="banner-box">
            <h4>crazy deals</h4>
            <h2>buy 1 get 1 free</h2>
            <span>The best classic dress is on sale at cara</span>
            <button class="white">Learn More</button>
        </div>
        <div class="banner-box banner-box2">
            <h4>spring/summer</h4>
            <h2>upcoming season</h2>
            <span>The best classic dress is on sale at cara</span>
            <button class="white">Collection</button>
        </div>
    </section>

    {/* <!-- BANNER 3 --> */}
    <section id="banner3">
        <div class="banner-box">
            <h2>SEASONAL SALE</h2>
            <h3>Winter Collection -50% OFF</h3>
        </div>
        <div class="banner-box banner-box2">
            <h2>NEW FOORWEAR COLLECTION</h2>
            <h3>Spring / Summer 2022</h3>
        </div>
        <div class="banner-box banner-box3">
            <h2>T SHIRTS</h2>
            <h3>New Trendy Prints</h3>
        </div>
    </section>
    </>
  )
}

export default Home