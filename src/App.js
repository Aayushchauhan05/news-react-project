// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import News from "./Components/News";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<News  key="general" category="General" />} />
        <Route path="/business" element={<News  key="business"  category="Business" />} />
        <Route path="/entertainment" element={<News  key="Gntertainment" category="Entertainment" />} />
        <Route path="/sports" element={<News   key="sports"category="sports" />} />
        <Route path="/technology" element={<News  key="technology" category="Technology" />} />
        <Route path="/medical" element={<News  key="medical" category="Health" />} />
      </Routes>
    </Router>
  );
}

export default App;
