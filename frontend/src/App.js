import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ChatbotWidget from "./components/ChatbotWidget";
import Home from "./pages/Home";
import Services from "./pages/Services";
import BookCall from "./pages/BookCall";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceId" element={<Services />} />
          <Route path="/book-call" element={<BookCall />} />
          <Route path="/case-studies" element={<Home />} />
          <Route path="/resources" element={<Home />} />
          <Route path="/about" element={<Home />} />
        </Routes>
        <Footer />
        <ChatbotWidget />
      </BrowserRouter>
    </div>
  );
}

export default App;
