import React from 'react'
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import './App.css'
import Home from "./Component/Home"
import Navbar from './Component/Navbar'
import Footer from "./Component/Footer"
import Shop from "./Component/Shop"
import Blog from './Component/Blog';
import About from './Component/About';
import Contact from './Component/Contact';
import Cart from './Component/Cart';
import Sproduct from './Component/Sproduct';
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
     <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route path='/shop' element={<Shop></Shop>}/>
      <Route path='/blog' element={<Blog></Blog>}/>
      <Route path='/about' element={<About></About>}/>
      <Route path='/contact' element={<Contact></Contact>}/>
      <Route path='/cart' element={<Cart></Cart>}/>
      <Route path='/Sproduct' element={<Sproduct></Sproduct>}/>
     </Routes>
     <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App