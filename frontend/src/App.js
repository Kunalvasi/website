import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";
import Footer from "./components/footer/footer";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import EBookPage from "./pages/EBookPage/EBookPage";
import Prasadam from "./pages/prasadam/prasadam";
import HomePage from "./pages/homepage/homepage";
import AnnouncementPage from "./pages/announcement/AnnouncementPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="app-container">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/eBook" element={<EBookPage />} />
            <Route path="/orderprasadam" element={<Prasadam />} />
            <Route path="/announcement" element={<AnnouncementPage />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
