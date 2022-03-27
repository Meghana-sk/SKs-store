import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { makeServer } from "./server";
import { ProductsProvider } from "./context/product-context";

// Call make Server
makeServer();

ReactDOM.render(
	<React.StrictMode>
    	<BrowserRouter>
    		<ProductsProvider>
				<App />	
    		</ProductsProvider>
  		</BrowserRouter>
  	</React.StrictMode>,
	document.getElementById("root")
);
