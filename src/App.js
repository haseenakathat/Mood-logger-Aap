
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HistoryPage from "./pages/HistoryPage";
import SuggestionsPage from "./pages/SuggestionsPage";
import LoginPage from "./pages/LoginPage"; 
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

 
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    window.location.reload(); 
  };

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/history">History</Link>
        <Link to="/suggestions">Suggestions</Link>

        {/* Show login link or logout button depending on login state */}
        {!isLoggedIn ? (
          <Link to="/login">Login</Link>
        ) : (
          <button onClick={handleLogout}>Logout</button> 
        )}
      </nav>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/suggestions" element={<SuggestionsPage />} />
        <Route path="/login" element={<LoginPage />} />
         {/* Add the login route */}
      </Routes>
    </Router>
  );
}

export default App;





