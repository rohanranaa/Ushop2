import React from 'react'
import { Link } from 'react-router-dom'
import f1 from "../Images/fj1.jpg"
import f2 from "../Images/fj2.jpg"
import f3 from "../Images/fj3.jpg"
function Cart() {
  return (
    <>
        {/* <!-- page header --> */}
    <section id="page-header" className="about-header">
        <h2>#let's_talk</h2>
        <p>LEAVE A MESSAGE, We love to hear from you.</p>
    </section>

    {/* <!-- cart --> */}
    <section id="cart" className="section-p1">
        <table width="100%">
            <thead>
                <tr>
                    <td>Remove</td>
                    <td>Images</td>
                    <td>Products</td>
                    <td>Price</td>
                    <td>Quantity</td>
                    <td>Subtotal</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><Link to=""><i className="fa-solid fa-circle-xmark"></i></Link></td>
                    <td><img src={f1} alt=""/></td>
                    <td>Cartoon Astronaut T-Shirt</td>
                    <td>$78</td>
                    <td><input type="number" value="1"/></td>
                    <td>$78</td>
                </tr>
                <tr>
                    <td><Link to=""><i className="fa-solid fa-circle-xmark"></i></Link></td>
                    <td><img src={f2} alt=""/></td>
                    <td>Men Regular Fit Beach Wear Shirt</td>
                    <td>$54</td>
                    <td><input type="number" value="1"/></td>
                    <td>$54</td>
                </tr>
                <tr>
                    <td><Link to=""><i className="fa-solid fa-circle-xmark"></i></Link></td>
                    <td><img src={f3} alt=""/></td>
                    <td>Men Slim Fit Floral Print Casual Shirt</td>
                    <td>$98</td>
                    <td><input type="number" value="1"/></td>
                    <td>$98</td>
                </tr>
            </tbody>
        </table>
                {/* <ul>
                    {rohan.map((itemval,i)=>{
                        return <li key={i}>{itemval}<button onClick={deletItem}>X</button></li>
                     })}
                </ul> */}
    </section>
    {/* <!-- CART ADD --> */}
    <section id="cart-add" class="section-p1">
      <div id="coupon">
        <h3>Apply Coupon</h3>
        <div>
            <input type="text" placeholder="Enter Your Coupon"/>
            <button class="normal">Apply</button>
        </div>
      </div>
      <div id="subtotal">
        <h3>Cart Totals</h3>
        <table>
            <tr>
                <td>Cart Subtotal</td>
                <td>$ 335</td>
            </tr>
            <tr>
                <td>Shipping</td>
                <td>Free</td>
            </tr>
            <tr>
                <td><strong>Total</strong></td>
                <td><strong>$ 335 </strong></td>
            </tr>
        </table>
        <button class="normal">Proceed to checkout</button>
      </div>
    </section>
    </>
  )
}
export default Cart