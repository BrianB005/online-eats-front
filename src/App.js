import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Register from "./pages/register";
import Login from "./pages/login";
import SingleProduct from "./pages/singleProduct";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import Account from "./pages/Account";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Cart from "./pages/Cart";
import AdminPanel from "./pages/admin/AdminPanel";
import AddProduct from "./pages/AddProduct";
import EditItem from "./pages/EditItem";
import User from "./pages/User";
import Users from "./pages/admin/users";
import Admins from "./pages/admin/admins";
import Vendors from "./pages/admin/vendors";
function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/register" element={<Register />} />

        <Route path="/login" element={<Login />} />
        <Route path="/products/edit/:id" element={<EditItem />} />
        <Route path="/products/find/:id" element={<SingleProduct />} />

        <Route path="/account" element={<Account />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="admin" element={<AdminPanel />}></Route>
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/vendors" element={<Vendors />} />
        <Route path="/admin/admins" element={<Admins />} />
        <Route path="/admin/users/:id" element={<User />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
