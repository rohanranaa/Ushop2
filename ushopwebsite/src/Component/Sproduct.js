import React, { useState } from 'react'
import {Link} from "react-router-dom"
import fj1 from "../Images/fj1.jpg"
import fj2 from "../Images/fj2.jpg"
import fj3 from "../Images/fj3.jpg"
import fj4 from "../Images/fj4.jpg"
import n1 from "../Images/n1.jpg"
import n2 from "../Images/n2.jpg"
import n3 from "../Images/n3.jpg"
import n8 from "../Images/n8.jpg"
import { useDispatch } from 'react-redux'
import {increment , decrement} from "../state/action/index"
function Sproduct() {
    const [state,setState]=useState("Add To Cart");
    const [color,setColor]=useState("green")
    
    // const [rohan, setRohan]=useState([])
    const dispatch=useDispatch()
    const added=()=>{
        if(state==="Add To Cart"){
            setState("Remove");
            dispatch(increment())
            setColor("Red")
        }
        else if(state==="Remove"){
            setState("Add To Cart")
            setColor("Green")
            dispatch(decrement())
        }else{
            setState("Add To Cart")
            setColor("Green")
        }
    }
  return (
    <>
        {/* <!-- prodetails --> */}
    <section id="prodetails" class="section-p1">
        <div class="single-pro-image">
            <img src={fj1} width="100%" id="MainImg" alt=""/>
            <div class="small-img-group">
                <div class="small-img-col">
                    <img src={fj1} width="100%" class="small-img" alt=""/>
                </div>
                <div class="small-img-col">
                    <img src={fj2} width="100%" class="small-img" alt=""/>
                </div>
                <div class="small-img-col">
                    <img src={fj3} width="100%" class="small-img" alt=""/>
                </div>
                <div class="small-img-col">
                    <img src={fj4} width="100%" class="small-img" alt=""/>
                </div>
            </div>
        </div>
        <div class="single-pro-details">
            <h6>Home / T-shirts</h6>
            <h4>Men's Fation T Shirt</h4>
            <h2>$139.00</h2>
            <select>
                <option>Select Size</option>
                <option>XL</option>
                <option>XXL</option>
                <option>Small</option>
                <option>Large</option>
            </select>
            <button class="normal" onClick={added} style={{backgroundColor:color}}>{state}</button>
            <h4>Products Details</h4>
            <span>Formal shirt otherwise known as the dress shirt can be identified by its stiff collar, lustrous
                fabric, long tails and single or double cuffs. Although patterned versions are available, the most
                popular styles come in conservative colours such as white, blue or pink.</span>
        </div>
    </section>
    <section id="product1" class="section-p1">
        <h2>Featured Products</h2>
        <p>Summer Collections New Morden Design</p>
        <div class="pro-container">
            <div class="pro">
                <img src={n1} alt="product-img"/>
                <div class="des">
                    <span>ZARA</span>
                    <h5>Men Regular Fit Sky Blue Shirt</h5>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h4>$99</h4>
                </div>
                <Link to="#"><i class="fa-solid fa-cart-shopping cart"></i></Link>
            </div>
            <div class="pro">
                <img src={n2} alt="product-img"/>
                <div class="des">
                    <span>USPA</span>
                    <h5>Men Regular Fit Grey Shirt</h5>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h4>$84</h4>
                </div>
                <Link to="#"><i class="fa-solid fa-cart-shopping cart"></i></Link>
            </div>
            <div class="pro">
                <img src={n3} alt="product-img"/>
                <div class="des">
                    <span>MUFTI</span>
                    <h5>Men Slim Fit White Casual Shirt</h5>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h4>$85</h4>
                </div>
                <Link to="#"><i class="fa-solid fa-cart-shopping cart"></i></Link>
            </div>
            <div class="pro">
                <img src={n8} alt="product-img"/>
                <div class="des">
                    <span>MUFTI </span>
                    <h5>Casual Men Regular Fit, Half Shirt Black </h5>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h4>$87</h4>
                </div>
                <Link to="#"><i class="fa-solid fa-cart-shopping cart"></i></Link>
            </div>
        </div>
    </section>
    </>
  )
}

export default Sproduct