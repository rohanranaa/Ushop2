import React from 'react'
import f1 from "../Images/f1.png"
import f2 from "../Images/f2.png"
import f3 from "../Images/f3.png"
import f4 from "../Images/f4.png"
import f5 from "../Images/f5.png"
import f6 from "../Images/f6.png"
import a6 from "../Images/a6.jpg"
import demo from "../Images/demo.mp4"
function About() {
  return (
    <>
        
    <section id="page-header" class="about-header">
        <h2>#knowUs</h2>
        <p>Our mission is to provide the best shopping experience.</p>
    </section>

    
    <div id="about-head" class="section-p1">
        <img src={a6} alt=""/>
        <div>
            <h2>Who Are We?</h2>
            <p>Cara is an Indian e-commerce company, headquartered in Bangalore, and incorporated in Singapore as a private limited company. The company initially focused on online book sales before expanding into other product categories such as consumer Clothing, fashion and lifestyle products.</p>
            <a title="">The month-long celebration began with the launch of a new brand campaign, with the tagline,'Iss baar sirf tyohar manao, shopping Cara pe chod do'.</a>
            <marquee bgcolor="#ccc" loop="-1" scrollamount="5" width="100%">Create stunning images with as much or as little control as you like thanks to aa choice of Basic and Creative modes.</marquee>
        </div>

    </div>

 
   <section id="about-app" class="section-p1">
     <h1>Download Our <a href="#">App</a></h1>
     <div class="video">
        <video autoplay muted loop src={demo}></video>
     </div>
   </section>

   {/* <!-- Features --> */}
   <section id="feature" class="section-p1">
    <div class="fe-box">
        <img src={f1} alt="features-img"/>
        <h6>Free Shipping</h6>
    </div>
    <div class="fe-box">
        <img src={f2} alt="features-img"/>
        <h6> Online Order</h6>
    </div>
    <div class="fe-box">
        <img src={f3} alt="features-img"/>
        <h6>Save Money</h6>
    </div>
    <div class="fe-box">
        <img src={f4} alt="features-img"/>
        <h6>Promotions</h6>
    </div>
    <div class="fe-box">
        <img src={f5} alt="features-img"/>
        <h6>Happy Sell</h6>
    </div>
    <div class="fe-box">
        <img src={f6} alt="features-img"/>
        <h6>24/7 Support</h6>
    </div>
</section>
    </>
  )
}

export default About