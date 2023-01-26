import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import Store from "./pages/Store";
import Product from "./pages/Product";
import NoMatch from "./pages/NoMatch";
import About from "./pages/About";
import { DataProvider } from "./context/DataContext";
import ShoppingCart from "./pages/ShoppingCart";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <>
      <DataProvider>
        <nav className="navbar">
          <Navbar />
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<About />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route path="/milk-products">
            <Route index element={<Store />} />
            <Route path=":id" element={<Product />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </DataProvider>
    </>
  );
}

export default App;
