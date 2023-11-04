import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import ForgotPassword from "./pages/ForgotPassword";
import NavbarComponent from "./components/NavbarComponent";
import Furniture from "./pages/Furniture";
import Readme from "./pages/Readme";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Router>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/furniture" element={<Furniture />} />
          <Route path="/about" element={<About />} />
          <Route path="/readme" element={<Readme />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
