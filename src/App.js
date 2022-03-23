import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Wishlist from "./pages/Wishlist/Wishlist";
import Cart from "./pages/Cart/Cart";
import Products from "./pages/Products/Products";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Cart />
      <Products />
      <Wishlist />
      <Footer/>
    </div>
  );
}

export default App;
