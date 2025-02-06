import { Route, Routes } from "react-router"
import NavBar from "./components/navigation/NavBar"
import LandingPage from "./pages/landing/LandingPage"
import Login from "./pages/login/Login"
import ProductPage from "./pages/products/ProductPage"
import PrivateRoute from "./pages/private/PrivateRoute"
import AdminDashboard from "./pages/private/admin/AdminDashboard"
import CartPage from "./pages/cart/CartPage"
import Footer from "./components/footer/Footer"
import AddProduct from "./pages/private/addProduct/AddProduct"


function App() {

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/admin" element={<PrivateRoute><AdminDashboard /></PrivateRoute>} />
        <Route path="/admin/add/product" element={<PrivateRoute><AddProduct /></PrivateRoute>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
