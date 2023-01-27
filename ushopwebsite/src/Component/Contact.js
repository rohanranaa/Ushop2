import React from 'react'

function Contact() {
  return (
    <>
         {/* <!-- page header --> */}
    <section id="page-header" className="about-header">
        <h2>#let's_talk</h2>
        <p>LEAVE A MESSAGE, We love to hear from you.</p>
    </section>

    {/* <!-- contact details --> */}
    <section id="contact-details" className="section-p1">
        <div className="details">
            <span>GET IN TOUCH</span>
            <h2>Visit one of our agency locations or contact us today</h2>
            <h3>Head Office</h3>
            <div>
                <li>
                    <i className="fa-solid fa-map"></i>
                    <p>58 Glassford Street Glasgow , New York</p>
                </li>
                <li>
                    <i className="fa-solid fa-envelope"></i>
                    <p>Kasid5555@gmail.com</p>
                </li>
                <li>
                    <i className="fa-solid fa-phone"></i>
                    <p>+91-8787878787</p>
                </li>
                <li>
                    <i className="fa-solid fa-clock"></i>
                    <p>Monday to Saturday : 9.00am to 16.00pm</p>
                </li>
            </div>
        </div>
        <div className="map">
        <iframe style={{filter:  "grayscale(1) contrast(1.2) opacity(0.4)", border:"0"}} referrerpolicy="no-referrer-when-downgrade" loading="lazy" width="600" height="450" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28025.29738295285!2d77.33530280000001!3d28.5949113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1666093649937!5m2!1sen!2sin" />
       
        </div>
    </section>

    <section id="form-details">
     <form action="">
        <span>LEAVE A MESSAGE</span>
        <h2>We love to hear from you</h2>
        <input type="text" placeholder="Your Name"/>
        <input type="text" placeholder="E-Mail"/>
        <input type="text" placeholder="Subject"/>
        <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
        <button className="normal ">Submit</button>
     </form>

     <div className="people">
        <div>
            <img src="images/people/1.png" alt=""/>
            <p><span>John Doe</span> Senior Marketing Manager <br/> Phone: +91-8787878787 <br/> Email: John565@gmail.com</p>
        </div>
        <div>
            <img src="images/people/2.png" alt=""/>
            <p><span>Karl Smith</span> Data Engineer <br/> Phone: +91-8787878888 <br/> Email: Karl5555@gmail.com</p>
        </div>
        <div>
            <img src="images/people/3.png" alt=""/>
            <p><span>Emma </span>SDE-3 <br/> Phone: +91-8787874433 <br/> Email: Emma2355@gmail.com</p>
        </div>
     </div>
    </section>
    </>
  )
}

export default Contact