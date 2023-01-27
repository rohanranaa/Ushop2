import React from 'react'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'
function Navbar() {
  const st=useSelector((st)=>st.amountReducer)
  console.log(st)
  return (
    <>
     <section id="header">
        <h3>Ushop</h3>
        <div>
            <ul id="navbar">
                <li><Link className="active" to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li id="lg-bag"><Link to="/cart"><i className="fa-solid fa-bag-shopping"></i></Link></li>
                <Link to="/cart" id="close"><i className="fa-solid fa-xmark"></i></Link>
                <button className="btn btn-dark">
                Cart:
                {st}
                </button>
            </ul>
        </div>
        <div id="mobile">
            <Link to=""><i className="fa-solid fa-bag-shopping"></i></Link>
            <i id="bar" className="fas fa-outdent"></i>
        </div>
    </section>
    </>
  )
}

export default Navbar