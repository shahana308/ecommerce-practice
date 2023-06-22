import "./App.css";
import Product from "./components/Product";
import ProductsContainer from "./components/ProductsContainer";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import CartProvider from "./providers/CartProvider";

function App() {
  return (
    <main>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProductsContainer />}></Route>
            <Route path="/product/:id" element={<Product />}></Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </main>
  );
}

export default App;
