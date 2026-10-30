import { Routes, Route, Navigate } from "react-router-dom";
import Ecommerce from './Components/Ecommerce';
import Products from "./Components/Products";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Antigravity from "./Components/Antigravity";

function App() {
 

  return (
    <>
    <Routes>
       <Route path="/" element={<Ecommerce />} />
      <Route path='/home' element={<Ecommerce/>}></Route>
      <Route path='/products' element={<Products/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
    </Routes>
    <Antigravity/>
    </>
  )
}

export default App
    