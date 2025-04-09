import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// User Pages
import Home from "./Pages/UserPages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import Cart from "./Pages/UserPages/Cart/Cart";
import Wishlist from "./Pages/UserPages/Wishlist/Wishlist";
import Product from "./Pages/Product/Product";
import Checkout from "./Pages/UserPages/Checkout/Checkout";

// Layouts
import AdminLayout from "./Components/AdminComponents/Layouts/AdminLayout";
import UserLayout from "./Components/UserLayouts/UserLayout";

// Admin Pages
import Login from "./Pages/AdminPages/Login/Login";
import Dashboard from "./Pages/AdminPages/Dashboard/Dashboard";
import Products from "./Pages/AdminPages/ProductPages/Products/Products";
import EditProducts from "./Pages/AdminPages/ProductPages/EditProducts/EditProducts";
import AddProducts from "./Pages/AdminPages/ProductPages/AddProducts/AddProducts";

function App() {
  return (
    <Router>
      <Routes>
        {/* User Routes  */}

        <Route element={<UserLayout />}>
          <Route path={"/"} element={<Home />} />
          <Route path={"/shop"} element={<Shop />} />
          <Route path={"/cart"} element={<Cart />} />
          <Route path={"/wishlist"} element={<Wishlist />} />
          <Route path={"/product"} element={<Product />} />
          <Route path={"/checkout"} element={<Checkout />} />
        </Route>

        {/* Admin Routes  */}

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="products/edit" element={<EditProducts />} />
          <Route path="products/add" element={<AddProducts />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
