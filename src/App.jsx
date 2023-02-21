import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./component/Home";
import Product from "./component/Product";
import { About } from "./component/About";
import { Contact } from "./component/Contact";
import { Header } from "./component/Header";
import { ProductDetails } from "./component/ProductDetails";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
