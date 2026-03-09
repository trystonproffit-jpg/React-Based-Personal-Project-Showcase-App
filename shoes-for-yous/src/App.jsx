import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Admin from "./pages/Admin";

import { products as initialProducts } from "./data/products";

function App() {
  const [products, setProducts] = useState(initialProducts);

  return (
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop products={products} />} />
          <Route 
            path="/admin" 
            element={<Admin products={products} setProducts={setProducts} />} 
          />
        </Routes>
      </Router>
  );
}

export default App;