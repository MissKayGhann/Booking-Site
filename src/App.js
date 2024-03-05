import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutMe";
import BookingPage from "./pages/Booking";
import TermsPage from "./pages/TermsCon";
import Services from "./pages/Services";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <AboutSection />
            </>
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/services" element={<Services />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
