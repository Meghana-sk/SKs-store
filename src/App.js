import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import { Home, Login, Logout, Signup, Products, Cart, Wishlist } from "./pages";
import { PrivateRoutes } from "./private-routes/private-route";
import Mockman from "mockman-js";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route element={<PrivateRoutes />}>
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="cart" element={<Cart />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/mock" element={<Mockman />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
