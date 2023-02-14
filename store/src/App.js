import Home from "./pages/home/Home";
import ProductsLists from "./pages/ProductsLists/ProductsLists";
import SingleProduct from "./pages/singleProduct/SingleProduct";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Cart from "./pages/Cart/Cart";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  const user = true;
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:id" element={<ProductsLists />} />
      <Route path="/product/:id" element={<SingleProduct />} />
      <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
      <Route
        path="/register"
        element={user ? <Navigate to="/" /> : <Register />}
      />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
