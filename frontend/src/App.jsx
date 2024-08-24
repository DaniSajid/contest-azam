import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import HomeComp from "./components/pages/HomeComp";
import AboutComp from "./components/pages/AboutComp";
import ContactComp from "./components/pages/ContactComp";
import HeaderComp from "./components/header/HeaderComp";
import FooterComp from "./components/footer/FooterComp";
import LoginSignupComp from "./components/loginSignup/LoginSignupComp";
import FeedbackComp from "./components/pages/FeedbackComp";
import IndoorComp from "./components/pages/category/IndoorComp";
import OutdoorComp from "./components/pages/category/OutdoorComp";
import SucculentComp from "./components/pages/category/SucculentComp";
import FloweringComp from "./components/pages/category/FloweringComp";
import Cookies from "js-cookie";
// Other imports remain the same...

const ProtectedRoute = ({ children }) => {
  const token = Cookies.get("token");
  return  token ?  <Navigate to="/" /> : children ;
};
function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComp />
        <Routes>
          <Route path="/" element={<HomeComp />} />
          <Route path="/about" element={<AboutComp />} />
          <Route path="/contact" element={<ContactComp />} />
          <Route path="/feedback" element={<FeedbackComp />} />
          <Route path="/account" element={<ProtectedRoute><LoginSignupComp /> </ProtectedRoute>} />
          <Route path="/indoor" element={<IndoorComp />} />
          <Route path="/outdoor" element={<OutdoorComp />} />
          <Route path="/succulent" element={<SucculentComp />} />
          <Route path="/floweringshrubs" element={<FloweringComp />} />
        </Routes>
        <FooterComp />
      </BrowserRouter>
    </>
  );
}

export default App;
