import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import Signup from "./Components/Login/Signup";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Product from "./Components/Product/Product";
import Products from "./Components/Products/Products";
import Checkout from "./Components/Checkout/Checkout";
import { Payment } from "./Components/Payment/Payment";
import Category from "./Components/CategoryProducts/Category";
import Footer from "./Components/Footer/Footer";
import Search from "./Components/Search/Search";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/product/:id" element={<Product />}></Route>
          <Route exact path="/allProducts" element={<Products />}></Route>
          <Route exact path="/:category" element={<Category />}></Route>
          <Route exact path="/checkout" element={<Checkout />}></Route>
          <Route exact path="/payment" element={<Payment />}></Route>
          <Route exact path="/search/:productName" element={<Search />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
