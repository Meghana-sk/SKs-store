import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import { Home, Login, Logout, Signup, Products, Cart, Wishlist } from "./pages";

function App() {
	return (
		<>
			<Navbar />
			<div className="App">
				<Routes>
					<Route path="/" element={ <Home /> } />
					<Route path="/products" element={ <Products /> } />
					<Route path="/wishlist" element={ <Wishlist /> } />
					<Route path="/cart" element={ <Cart /> } />
					<Route path="/login" element={ <Login /> } />
					<Route path="/logout" element={ <Logout /> } />
					<Route path="/signup" element={ <Signup /> } />
				</Routes>
			</div>
			<Footer />
		</>
  );
}

export default App;
