import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Login from "./pages/Authentication/Login";
import Logout from "./pages/Authentication/Logout";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Login />
      <Logout />
      <Footer/>
    </div>
  );
}

export default App;
